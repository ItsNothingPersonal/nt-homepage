import { compile } from 'mdsvex';
import { directus } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const clans = await directus.items('clans').readByQuery({ limit: -1 });
	const beschreibung = await directus.items('was_sind_clans').readByQuery({ limit: 1 });

	const beschreibungCompiled =
		beschreibung.data?.length !== 1 ? undefined : await compile(beschreibung.data[0].beschreibung);

	return {
		clans: clans.data ?? [],
		beschreibung: beschreibung.data?.length !== 1 ? undefined : beschreibungCompiled?.code
	};
}) satisfies PageServerLoad;
