import { isNullOrUndefined } from '$lib/util';
import { directus } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const impressum = await directus.items('impressum').readByQuery({
		limit: 1
	});

	return {
		impressum: !isNullOrUndefined(impressum.data) ? impressum.data[0] : undefined
	};
}) satisfies PageServerLoad;
