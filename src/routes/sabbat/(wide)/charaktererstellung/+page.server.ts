import { readSingleton } from '@directus/sdk';
import { client } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const charaktererstellung = client.request(readSingleton('sabbat_charaktererstellung'));

	return {
		charaktererstellung
	};
}) satisfies PageServerLoad;
