import { zeittafel } from '$lib/types/zod/zeittafel';
import { directus } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const zeittafel_sabbat = directus.items('sabbat_zeittafel').readByQuery({
		limit: -1,
		sort: ['datum']
	});

	return { zeittafel: zeittafel.array().parse((await zeittafel_sabbat).data) };
}) satisfies PageServerLoad;
