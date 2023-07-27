import { readSingleton } from '@directus/sdk';
import { client } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		kontakt: client.request(readSingleton('verein_kontakt'))
	};
}) satisfies PageServerLoad;
