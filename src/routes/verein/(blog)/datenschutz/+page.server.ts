import { readSingleton } from '@directus/sdk';
import { compile } from 'mdsvex';
import { client } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const data = client.request(readSingleton('verein_datenschutz'));

	return {
		datenschutzerklaerung: compile((await data).datenschutzerklaerung),
		datenverarbeitung: compile((await data).datenverarbeitung_und_uebermittlung)
	};
}) satisfies PageServerLoad;
