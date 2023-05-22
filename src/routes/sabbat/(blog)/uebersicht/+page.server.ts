import { projektUebersicht } from '$lib/types/zod/projektUebersicht';
import { sabbatUebersichtFiles } from '$lib/types/zod/sabbatUebersichtFiles';
import { compile } from 'mdsvex';
import { directus } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const response = projektUebersicht
		.array()
		.parse((await directus.items('sabbat_uebersicht').readByQuery({ limit: 1 })).data);

	const data = response.length !== 1 ? undefined : response[0];

	const beschreibungCompiled = data?.beschreibung ? await compile(data.beschreibung) : undefined;
	const spieltermineCompiled = data?.spieltermine ? await compile(data.spieltermine) : undefined;

	const sabbatBilder = directus.items('sabbat_uebersicht_files').readByQuery({
		filter: {
			sabbat_uebersicht_id: {
				_eq: data?.id
			}
		}
	});

	return {
		beschreibung: beschreibungCompiled,
		spieltermine: spieltermineCompiled,
		email: data?.email,
		discord: data?.discord,
		bilder: sabbatUebersichtFiles.array().parse((await sabbatBilder).data)
	};
}) satisfies PageServerLoad;
