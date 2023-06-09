import { projektUebersicht } from '$lib/types/zod/projektUebersicht';
import { w40KUebersichtFiles } from '$lib/types/zod/w40KUebersichtFiles';
import { compile } from 'mdsvex';
import { directus } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const response = projektUebersicht
		.array()
		.parse((await directus.items('w40k_uebersicht').readByQuery({ limit: 1 })).data);

	const data = response.length !== 1 ? undefined : response[0];

	const w40kBilder = directus.items('w40k_uebersicht_files').readByQuery({
		filter: {
			w40k_uebersicht_id: {
				_eq: data?.id
			}
		}
	});

	return {
		beschreibung: compile(data?.beschreibung ?? ''),
		spieltermine: compile(data?.spieltermine ?? ''),
		email: data?.email,
		discord: data?.discord,
		bilder: w40KUebersichtFiles.array().parse((await w40kBilder).data)
	};
}) satisfies PageServerLoad;
