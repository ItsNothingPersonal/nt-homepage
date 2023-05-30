import { vereinDatenschutz } from '$lib/types/zod/vereindatenschutz';
import { compile } from 'mdsvex';
import { directus } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const response = vereinDatenschutz
		.array()
		.parse((await directus.items('verein_datenschutz').readByQuery({ limit: 1 })).data);

	const data = response.length !== 1 ? undefined : response[0];

	const datenverarbeitungCompiled = data?.datenverarbeitung_und_uebermittlung
		? await compile(data.datenverarbeitung_und_uebermittlung)
		: undefined;
	const datenschutzerklaerungCompiled = data?.datenschutzerklaerung
		? await compile(data.datenschutzerklaerung)
		: undefined;

	return {
		datenschutzerklaerung: datenschutzerklaerungCompiled,
		datenverarbeitung: datenverarbeitungCompiled
	};
}) satisfies PageServerLoad;
