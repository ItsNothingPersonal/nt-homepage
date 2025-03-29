import { readItems, readSingleton } from '@directus/sdk';
// @ts-ignore
import { compile } from 'mdsvex';
import { client } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const response = client.request(readSingleton('camarilla_uebersicht'));
	const bilder = client.request(readItems('camarilla_uebersicht_files'));

	return {
		beschreibung: compile((await response).beschreibung ?? ''),
		spieltermine: compile((await response).spieltermine ?? ''),
		bilder,
		camarillaUebersicht: response
	};
}) satisfies PageServerLoad;
