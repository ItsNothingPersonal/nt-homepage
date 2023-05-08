import { isNullOrUndefined } from '$lib/util';
import { directus } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const wasIstVampireLive = await directus.items('was_ist_vampire_live').readByQuery({
		limit: 1
	});

	return {
		wasIstVampireLive: !isNullOrUndefined(wasIstVampireLive.data)
			? wasIstVampireLive.data[0]
			: undefined
	};
}) satisfies PageServerLoad;
