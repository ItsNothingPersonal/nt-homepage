import { readItems, readSingleton } from '@directus/sdk';
import { compile } from 'mdsvex';
import { client } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const response = client.request(readSingleton('w40k_uebersicht'));
	const bilder = client.request(readItems('w40k_uebersicht_files'));

	return {
		beschreibung: compile((await response).beschreibung ?? ''),
		spieltermine: compile((await response).spieltermine ?? ''),
		bilder,
		w40kUebersicht: response
	};
}) satisfies PageServerLoad;
