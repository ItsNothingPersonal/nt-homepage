import { directus } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const packs = await directus.items('sabbat_packs').readByQuery({ limit: -1 });

	const charaktere = await directus.items('sabbat_charaktere').readByQuery({
		limit: -1,
		fields: ['*', 'clan.name', 'charakter_status.name', 'offizier.name', 'pack.name']
	});

	return {
		packs: packs.data ?? [],
		charaktere: charaktere.data ?? []
	};
}) satisfies PageServerLoad;
