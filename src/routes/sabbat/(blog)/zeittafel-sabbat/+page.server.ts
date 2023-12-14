import type { Zeittafel } from '$lib/types/zod/zeittafel';
import { readItems } from '@directus/sdk';
import { client } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const zeittafel = client.request(readItems('sabbat_zeittafel', { sort: ['datum'] }));

	return { zeittafel: (await zeittafel) as Zeittafel[] };
}) satisfies PageServerLoad;
