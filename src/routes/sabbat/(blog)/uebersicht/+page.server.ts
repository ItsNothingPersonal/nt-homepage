import { renderMarkdown } from '$lib/markdownUtil';
import { readItems, readSingleton } from '@directus/sdk';
import { client } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const response = client.request(readSingleton('sabbat_uebersicht'));
	const bilder = client.request(readItems('sabbat_uebersicht_files'));

	return {
		beschreibung: renderMarkdown((await response).beschreibung ?? ''),
		spieltermine: renderMarkdown((await response).spieltermine ?? ''),
		bilder,
		sabbatUebersicht: response
	};
}) satisfies PageServerLoad;
