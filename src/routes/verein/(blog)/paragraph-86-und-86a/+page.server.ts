import { renderMarkdown } from '$lib/markdownUtil';
import { readSingleton } from '@directus/sdk';
import { client } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const paragraph86und86a = client.request(readSingleton('verein_paragraph_86_und_86a'));

	return {
		paragraph86und86a: renderMarkdown((await paragraph86und86a).inhalt)
	};
}) satisfies PageServerLoad;
