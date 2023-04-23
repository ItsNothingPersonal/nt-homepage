import { compile } from 'mdsvex';
import { directus } from '../../../services/directus';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const clan = await directus.items('clans').readOne(params.clanId);
	const clanBeschreibung = await compile(clan?.beschreibung ?? '');
	const clansBilder = await directus.items('clans_files').readByQuery({
		filter: {
			clans_id: {
				_eq: clan?.id
			}
		}
	});

	return { clan: clan, beschreibung: clanBeschreibung, bilder: clansBilder?.data };
}) satisfies PageServerLoad;
