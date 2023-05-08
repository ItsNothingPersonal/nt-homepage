import { directus } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const charaktere = await directus.items('camarilla_charaktere').readByQuery({
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
		charaktere: charaktere.data ?? []
	};
}) satisfies PageServerLoad;
