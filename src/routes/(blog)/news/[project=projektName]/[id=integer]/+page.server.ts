import { renderMarkdown } from '$lib/markdownUtil';
import type { BasicUser } from '$lib/types/zod/basicUser';
import { news, type News } from '$lib/types/zod/news';
import type { NewsWithUser } from '$lib/types/zod/newsWithUser';
import { readItem, readUser } from '@directus/sdk';
import { error } from '@sveltejs/kit';
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

	const author = await client.request(readUser(basicNews.user_created));
	const newsWithUser: NewsWithUser = {
		id: basicNews.id,
		titel: basicNews.titel,
		synopsis: basicNews.synopsis,
		news: renderMarkdown(basicNews.news),
		user_created: {
			id: author.id,
			first_name: author.first_name,
			last_name: author.last_name,
			avatar: author.avatar as BasicUser['avatar']
		},
		date_created: new Date(basicNews.date_created),
		project: params.project
	};

	return { news: newsWithUser };
}) satisfies PageServerLoad;
