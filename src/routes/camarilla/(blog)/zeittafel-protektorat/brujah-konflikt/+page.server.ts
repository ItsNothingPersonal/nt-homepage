import type { Zeittafel } from '$lib/types/zod/zeittafel';
import { readItems } from '@directus/sdk';
import { client } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const zeittafel = client.request(readItems('camarilla_brujah_konflikt', { sort: ['sort'] }));

	return { zeittafel: zeittafel as Promise<Zeittafel[]> };
}) satisfies PageServerLoad;
