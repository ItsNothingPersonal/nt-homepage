import { news, type News } from '$lib/types/zod/news';
import type { NewsWithUser } from '$lib/types/zod/newsWithUser';
import { readItem, readUser } from '@directus/sdk';
import { error } from '@sveltejs/kit';
import { compile } from 'mdsvex';
import { client } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	let basicNews: News;

	switch (params.project) {
		case 'Camarilla': {
			basicNews = news.parse(await client.request(readItem('camarilla_news', params.id)));
			break;
		}
		case 'Sabbat': {
			basicNews = news.parse(await client.request(readItem('sabbat_news', params.id)));
			break;
		}
		case 'Wh40k': {
			basicNews = news.parse(await client.request(readItem('wh40k_news', params.id)));
			break;
		}
		case 'Verein': {
			basicNews = news.parse(await client.request(readItem('verein_news', params.id)));
			break;
		}
		default: {
			error(404, {
				message: 'Not found'
			});
		}
	}

	const newsWithUser: NewsWithUser = {
		id: basicNews.id,
		titel: basicNews.titel,
		synopsis: basicNews.synopsis,
		news: (await compile(basicNews.news))?.code ?? '',
		user_created: {
			id: undefined,
			first_name: undefined,
			last_name: undefined,
			avatar: undefined
		},
		user_updated: undefined,
		date_created: new Date(basicNews.date_created),
		date_updated: basicNews.date_updated ? new Date(basicNews.date_updated) : undefined,
		project: params.project
	};

	const author = await client.request(readUser(basicNews.user_created));

	newsWithUser.user_created.id = author.id;
	newsWithUser.user_created.first_name = author.first_name;
	newsWithUser.user_created.last_name = author.last_name;
	newsWithUser.user_created.avatar = author.avatar;

	return { news: newsWithUser };
}) satisfies PageServerLoad;
