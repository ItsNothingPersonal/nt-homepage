import { wh40kSpielortFiles } from '$lib/types/zod/wh40kSpielortFiles';
import { readItems, readSingleton } from '@directus/sdk';
import { client } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const spielort = client.request(readSingleton('wh40k_spielort'));
	const bilder = client.request(
		readItems('wh40k_spielort_files', { filter: { directus_files_id: { _nnull: true } } })
	);

	return {
		spielort,
		bilder: wh40kSpielortFiles.array().parse(await bilder)
	};
}) satisfies PageServerLoad;
