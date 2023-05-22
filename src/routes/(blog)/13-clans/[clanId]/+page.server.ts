import { clan } from '$lib/types/zod/clan';
import { clansFiles } from '$lib/types/zod/clansFiles';
import { compile } from 'mdsvex';
import { directus } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const data = clan.parse(await directus.items('clans').readOne(params.clanId));

	const clanBeschreibung = await compile(data.beschreibung ?? '');
	const clansBilder = directus.items('clans_files').readByQuery({
		filter: {
			clans_id: {
				_eq: data.id
			}
		}
	});

	return {
		clan: data,
		beschreibung: clanBeschreibung,
		bilder: clansFiles.array().parse((await clansBilder).data)
	};
}) satisfies PageServerLoad;
