import { readItems, readSingleton } from '@directus/sdk';
import { client } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const spielort = client.request(readSingleton('w40k_spielort'));
	const bilder = client.request(readItems('w40k_spielort_files'));

	return {
		spielort,
		bilder
	};
}) satisfies PageServerLoad;
