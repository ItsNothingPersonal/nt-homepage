import { wasIstVampireLive } from '$lib/types/zod/wasIstVampireLive';
import { directus } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const response = wasIstVampireLive
		.array()
		.parse((await directus.items('was_ist_vampire_live').readByQuery({ limit: 1 })).data);

	return {
		wasIstVampireLive: response.length === 1 ? response[0] : undefined
	};
}) satisfies PageServerLoad;
