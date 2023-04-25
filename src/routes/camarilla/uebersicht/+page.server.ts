import { compile } from 'mdsvex';
import { directus } from '../../../services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const camarilla_uebersicht = await directus
		.items('camarilla_uebersicht')
		.readByQuery({ limit: 1 });
	const data = camarilla_uebersicht.data?.length !== 1 ? undefined : camarilla_uebersicht.data[0];

	const beschreibungCompiled = data?.beschreibung ? await compile(data.beschreibung) : undefined;
	const spieltermineCompiled = data?.spieltermine ? await compile(data.spieltermine) : undefined;
	const email = data?.email;
	const discord = data?.discord;

	const camarillaBilder = await directus.items('camarilla_uebersicht_files').readByQuery({
		filter: {
			camarilla_uebersicht_id: {
				_eq: data?.id
			}
		}
	});

	return {
		beschreibung: beschreibungCompiled,
		spieltermine: spieltermineCompiled,
		email: email,
		discord: discord,
		bilder: camarillaBilder.data
	};
}) satisfies PageServerLoad;
