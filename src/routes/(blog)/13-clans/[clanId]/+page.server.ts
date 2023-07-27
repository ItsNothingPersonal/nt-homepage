import { clansFiles } from '$lib/types/zod/clansFiles';
import { readItem, readItems } from '@directus/sdk';
import { compile } from 'mdsvex';
import { client } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const clan = client.request(readItem('clans', params.clanId, { sort: ['name'] }));

	const clanBilder = client.request(
		readItems('clans_files', { filter: { clans_id: { _eq: params.clanId } } })
	);

	return {
		clan,
		beschreibung: compile((await clan).beschreibung ?? ''),
		bilder: clansFiles.array().parse(await clanBilder)
	};
}) satisfies PageServerLoad;
