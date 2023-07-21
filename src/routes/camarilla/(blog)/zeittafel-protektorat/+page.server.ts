import { zeittafel } from '$lib/types/zod/zeittafel';
import { directus } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const zeittafel_protektorat = directus.items('camarilla_zeittafel_protektorat').readByQuery({
		limit: -1,
		sort: ['datum']
	});

	return { zeittafel: zeittafel.array().parse((await zeittafel_protektorat).data) };
}) satisfies PageServerLoad;
