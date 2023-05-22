import { camarillaUebersichtFiles } from '$lib/types/zod/camarillaUebersichtFiles';
import { projektUebersicht } from '$lib/types/zod/projektUebersicht';
import { compile } from 'mdsvex';
import { directus } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const response = projektUebersicht
		.array()
		.parse((await directus.items('camarilla_uebersicht').readByQuery({ limit: 1 })).data);

	const data = response.length !== 1 ? undefined : response[0];

	const beschreibungCompiled = data?.beschreibung ? await compile(data.beschreibung) : undefined;
	const spieltermineCompiled = data?.spieltermine ? await compile(data.spieltermine) : undefined;

	const camarillaBilder = directus.items('camarilla_uebersicht_files').readByQuery({
		filter: {
			camarilla_uebersicht_id: {
				_eq: data?.id
			}
		}
	});

	return {
		beschreibung: beschreibungCompiled,
		spieltermine: spieltermineCompiled,
		email: data?.email,
		discord: data?.discord,
		bilder: camarillaUebersichtFiles.array().parse((await camarillaBilder).data)
	};
}) satisfies PageServerLoad;
