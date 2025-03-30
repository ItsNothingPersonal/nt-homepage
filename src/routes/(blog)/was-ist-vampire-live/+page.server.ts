import { renderMarkdown } from '$lib/markdownUtil';
import { readSingleton } from '@directus/sdk';
import { client } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const wasIstVampireLive = client.request(readSingleton('was_ist_vampire_live'));

	return {
		wasIstVampireLive,
		erklaerung: renderMarkdown((await wasIstVampireLive).erklaerung)
	};
}) satisfies PageServerLoad;
