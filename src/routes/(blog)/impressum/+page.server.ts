import { impressum } from '$lib/types/zod/impressum';
import { directus } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const response = impressum
		.array()
		.parse((await directus.items('impressum').readByQuery({ limit: 1 })).data);

	return {
		impressum: response.length === 1 ? response[0] : undefined
	};
}) satisfies PageServerLoad;
