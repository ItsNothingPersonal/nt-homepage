import { camarillaBrujahKonflikt } from '$lib/types/zod/camarillaBrujahKonflikt';
import { directus } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const zeittafel = directus.items('camarilla_brujah_konflikt').readByQuery({
		limit: -1,
		sort: ['sort']
	});

	return { zeittafel: camarillaBrujahKonflikt.array().parse((await zeittafel).data) };
}) satisfies PageServerLoad;
