import { vereinKontakt } from '$lib/types/zod/vereinKontakt';
import { directus } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const kontakt = directus.items('verein_kontakt').readByQuery({
		limit: 1
	});

	return {
		kontakt: vereinKontakt.array().parse((await kontakt).data)[0]
	};
}) satisfies PageServerLoad;
