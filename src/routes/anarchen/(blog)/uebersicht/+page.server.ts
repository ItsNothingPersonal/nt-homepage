import { renderMarkdown } from '$lib/markdownUtil';
import { readItems, readSingleton } from '@directus/sdk';
import { client } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const response = client.request(readSingleton('anarchen_uebersicht'));
	const bilder = client.request(readItems('anarchen_uebersicht_files'));

	return {
		beschreibung: renderMarkdown((await response).beschreibung ?? ''),
		spieltermine: renderMarkdown((await response).spieltermine ?? ''),
		bilder,
		camarillaUebersicht: response
	};
}) satisfies PageServerLoad;
