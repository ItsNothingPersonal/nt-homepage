import { camarillaZeittafelProtektorat } from '$lib/types/zod/camarillaZeittafelProtektorat';
import { directus } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const zeittafel = directus.items('camarilla_zeittafel_protektorat').readByQuery({
		limit: -1,
		sort: ['datum']
	});

	return { zeittafel: camarillaZeittafelProtektorat.array().parse((await zeittafel).data) };
}) satisfies PageServerLoad;
