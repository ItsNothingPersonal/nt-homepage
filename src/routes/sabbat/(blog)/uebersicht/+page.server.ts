import { readItems, readSingleton } from '@directus/sdk';
import { compile } from 'mdsvex';
import { client } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const response = client.request(readSingleton('sabbat_uebersicht'));
	const bilder = client.request(readItems('sabbat_uebersicht_files'));

	return {
		beschreibung: compile((await response).beschreibung ?? ''),
		spieltermine: compile((await response).spieltermine ?? ''),
		email: (await response).email,
		bilder
	};
}) satisfies PageServerLoad;
