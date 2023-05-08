import { directus } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const zeittafel = await directus.items('camarilla_brujah_konflikt').readByQuery({
		limit: -1,
		sort: ['sort']
	});

	return { zeittafel: zeittafel.data ?? [] };
}) satisfies PageServerLoad;
