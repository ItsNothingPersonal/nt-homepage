import { clan } from '$lib/types/zod/clan';
import { readItems, readSingleton } from '@directus/sdk';
import { compile } from 'mdsvex';
import { client } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const clans = client.request(readItems('clans', { sort: ['name'] }));
	const wasSindClans = client.request(readSingleton('was_sind_clans'));

	return {
		clans: clan.array().parse(await clans),
		beschreibung: await compile((await wasSindClans).beschreibung)
	};
}) satisfies PageServerLoad;
