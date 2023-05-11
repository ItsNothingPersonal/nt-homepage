import { compile } from 'mdsvex';
import { directus } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const sabbat_uebersicht = await directus.items('sabbat_uebersicht').readByQuery({ limit: 1 });
	const data = sabbat_uebersicht.data?.length !== 1 ? undefined : sabbat_uebersicht.data[0];

	const beschreibungCompiled = data?.beschreibung ? await compile(data.beschreibung) : undefined;
	const spieltermineCompiled = data?.spieltermine ? await compile(data.spieltermine) : undefined;
	const email = data?.email;
	const discord = data?.discord;

	const sabbatBilder = await directus.items('sabbat_uebersicht_files').readByQuery({
		filter: {
			sabbat_uebersicht_id: {
				_eq: data?.id
			}
		}
	});

	return {
		beschreibung: beschreibungCompiled,
		spieltermine: spieltermineCompiled,
		email: email,
		discord: discord,
		bilder: sabbatBilder.data
	};
}) satisfies PageServerLoad;
