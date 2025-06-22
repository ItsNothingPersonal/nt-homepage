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
			getProjectNews('Anarchen'),
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
		case 'Anarchen': {
			newsList = await client.request(
				readItems('anarchen_news', {
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
		if (!userSet.has(news.user_created)) {
			const author = await client.request(readUser(news.user_created));
			userSet.set(news.user_created, {
				id: author.id,
				first_name: author.first_name,
				last_name: author.last_name,
				avatar: author.avatar as BasicUser['avatar']
			});
		}

		// Fetch user_updated data if it exists
		if (news.user_updated && !userSet.has(news.user_updated)) {
			const updater = await client.request(readUser(news.user_updated));
			userSet.set(news.user_updated, {
				id: updater.id,
				first_name: updater.first_name,
				last_name: updater.last_name,
				avatar: updater.avatar as BasicUser['avatar']
			});
		}

		const user = userSet.get(news.user_created);
		const updater = news.user_updated ? userSet.get(news.user_updated) : null;

		if (!user) {
			console.error(`User not found for news item ${news.id}`);
			continue;
		}

		shortNewsWithUsers.push({
			...news,
			user_created: user,
			user_updated: updater ?? null,
			date_created: new Date(news.date_created),
			date_updated: news.date_updated ? new Date(news.date_updated) : undefined,
			project
		});
	}
	return shortNewsWithUsers;
}
