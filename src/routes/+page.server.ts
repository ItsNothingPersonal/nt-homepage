import type { BasicUser } from '$lib/types/zod/basicUser';
import type { ProjektName } from '$lib/types/zod/projektName';
import type { ShortNews } from '$lib/types/zod/shortNews';
import type { ShortNewsWithUser } from '$lib/types/zod/shortNewsWithUser';
import { readItems, readUser } from '@directus/sdk';
import { client } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		news: Promise.all([
			getProjectNews('Camarilla'),
			getProjectNews('Sabbat'),
			getProjectNews('Wh40k'),
			getProjectNews('Verein')
		])
	};
}) satisfies PageServerLoad;

async function getProjectNews(project: ProjektName): Promise<ShortNewsWithUser[]> {
	let newsList: ShortNews[];
	switch (project) {
		case 'Camarilla': {
			newsList = await client.request(
				readItems('camarilla_news', {
					fields: ['id', 'titel', 'synopsis', 'date_created', 'date_updated', 'user_created']
				})
			);
			break;
		}
		case 'Sabbat': {
			newsList = await client.request(
				readItems('sabbat_news', {
					fields: ['id', 'titel', 'synopsis', 'date_created', 'date_updated', 'user_created']
				})
			);
			break;
		}
		case 'Wh40k': {
			newsList = await client.request(
				readItems('wh40k_news', {
					fields: ['id', 'titel', 'synopsis', 'date_created', 'date_updated', 'user_created']
				})
			);
			break;
		}
		case 'Verein': {
			newsList = await client.request(
				readItems('verein_news', {
					fields: ['id', 'titel', 'synopsis', 'date_created', 'date_updated', 'user_created']
				})
			);
			break;
		}
		default: {
			newsList = [];
		}
	}

	const shortNewsWithUsers: ShortNewsWithUser[] = [];
	const userSet: Map<string, BasicUser> = new Map();

	for (const news of newsList) {
		const temp: ShortNewsWithUser = {
			id: news.id,
			titel: news.titel,
			synopsis: news.synopsis,
			user_created: {
				id: undefined,
				first_name: undefined,
				last_name: undefined,
				avatar: undefined
			},
			user_updated: undefined,
			date_created: new Date(news.date_created),
			date_updated: news.date_updated ? new Date(news.date_updated) : undefined,
			project
		};

		if (!userSet.has(news.user_created)) {
			userSet.set(news.user_created, await client.request(readUser(news.user_created)));
		}
		const author = userSet.get(news.user_created);

		temp.user_created.id = author?.id;
		temp.user_created.first_name = author?.first_name;
		temp.user_created.last_name = author?.last_name;
		temp.user_created.avatar = author?.avatar;

		shortNewsWithUsers.push(temp);
	}

	return shortNewsWithUsers;
}
