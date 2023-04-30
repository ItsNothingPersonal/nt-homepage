import { directus } from '../../../services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const zeittafel = await directus.items('camarilla_zeittafel_protektorat').readByQuery({
		limit: -1,
		sort: ['datum']
	});

	return { zeittafel: zeittafel.data ?? [] };
}) satisfies PageServerLoad;
