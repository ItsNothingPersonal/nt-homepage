import { camarillaSpielortFiles } from '$lib/types/zod/camarillaSpielortFiles';
import { readItems, readSingleton } from '@directus/sdk';
import { client } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const spielort = client.request(readSingleton('camarilla_spielort'));
	const bilder = client.request(
		readItems('camarilla_spielort_files', { filter: { directus_files_id: { _nnull: true } } })
	);

	return {
		spielort,
		bilder: camarillaSpielortFiles.array().parse(await bilder)
	};
}) satisfies PageServerLoad;
