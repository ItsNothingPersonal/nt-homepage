import { clan } from '$lib/types/zod/clan';
import { wasSindClans } from '$lib/types/zod/wasSindClans';
import { compile } from 'mdsvex';
import { directus } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const clansResponse = directus.items('clans').readByQuery({ limit: -1 });
	const data = wasSindClans
		.array()
		.parse((await directus.items('was_sind_clans').readByQuery({ limit: 1 })).data);

	const beschreibungCompiled = data.length !== 1 ? undefined : await compile(data[0].beschreibung);

	return {
		clans: clan.array().parse((await clansResponse).data),
		beschreibung: beschreibungCompiled?.code
	};
}) satisfies PageServerLoad;
