import { directus } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const spielleitung = await directus.items('camarilla_orga').readByQuery({
		limit: -1,
		fields: ['*', 'rolle.name'],
		filter: { rolle: { name: 'Spielleitung' } }
	});

	const erzaehler = await directus.items('camarilla_orga').readByQuery({
		limit: -1,
		fields: ['*', 'rolle.name'],
		filter: { rolle: { name: 'Erzähler' } }
	});

	return { spielleitung: spielleitung.data ?? [], erzaehler: erzaehler.data ?? [] };
}) satisfies PageServerLoad;
