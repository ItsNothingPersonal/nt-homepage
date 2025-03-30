import { renderMarkdown } from '$lib/markdownUtil';
import { type Clan } from '$lib/types/zod/clan';
import { readItems, readSingleton } from '@directus/sdk';
import { client } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const clans = client.request(readItems('clans', { sort: ['name'] }));
	const wasSindClans = client.request(readSingleton('was_sind_clans'));

	return {
		clans: clans as Promise<Clan[]>,
		beschreibung: renderMarkdown((await wasSindClans).beschreibung)
	};
}) satisfies PageServerLoad;
