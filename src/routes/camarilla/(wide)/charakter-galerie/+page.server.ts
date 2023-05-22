import { camarillaCharaktere } from '$lib/types/zod/camarillaCharaktere';
import { directus } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const charaktere = directus.items('camarilla_charaktere').readByQuery({
		limit: -1,
		fields: [
			'*',
			'clan.name',
			'charakter_status.name',
			'offizier.name',
			'zusatzfunktion.name',
			'sekte.name'
		]
	});

	return {
		charaktere: camarillaCharaktere.array().parse((await charaktere).data)
	};
}) satisfies PageServerLoad;
