import { sabbatCharakter } from '$lib/types/zod/sabbatCharakter';
import { sabbatPacks } from '$lib/types/zod/sabbatPacks';
import { directus } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const packs = directus.items('sabbat_packs').readByQuery({ limit: -1 });

	const charaktere = directus.items('sabbat_charaktere').readByQuery({
		limit: -1,
		fields: ['*', 'clan.name', 'charakter_status.name', 'offizier.name', 'pack.name']
	});

	return {
		packs: sabbatPacks.array().parse((await packs).data),
		charaktere: sabbatCharakter.array().parse((await charaktere).data)
	};
}) satisfies PageServerLoad;
