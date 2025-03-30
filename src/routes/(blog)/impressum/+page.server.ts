import { renderMarkdown } from '$lib/markdownUtil';
import { readSingleton } from '@directus/sdk';
import { client } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const impressum = client.request(readSingleton('impressum'));

	return {
		impressum,
		copyrightNotice: renderMarkdown((await impressum).copyright_notice)
	};
}) satisfies PageServerLoad;
