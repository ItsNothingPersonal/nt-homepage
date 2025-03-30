import { renderMarkdown } from '$lib/markdownUtil';
import { type Clan } from '$lib/types/zod/clan';
import type { ClansFiles } from '$lib/types/zod/clansFiles';
import { readItem, readItems } from '@directus/sdk';
import { client } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const clan = client.request(readItem('clans', params.clanId, { sort: ['name'] }));
	const bilder = client.request(
		readItems('clans_files', { filter: { clans_id: { _eq: params.clanId } } })
	);

	return {
		clan: clan as Promise<Clan>,
		beschreibung: renderMarkdown(((await clan) as Clan).beschreibung ?? ''),
		bilder: bilder as Promise<ClansFiles[]>
	};
}) satisfies PageServerLoad;
