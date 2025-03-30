import { renderMarkdown } from '$lib/markdownUtil';
import { readSingleton } from '@directus/sdk';
import { client } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const data = client.request(readSingleton('verein_datenschutz'));

	return {
		datenschutzerklaerung: renderMarkdown((await data).datenschutzerklaerung),
		datenverarbeitung: renderMarkdown((await data).datenverarbeitung_und_uebermittlung)
	};
}) satisfies PageServerLoad;
