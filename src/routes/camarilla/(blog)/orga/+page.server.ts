import { orga } from '$lib/types/zod/orga';
import { directus } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const spielleitung = directus.items('camarilla_orga').readByQuery({
		limit: -1,
		fields: ['*', 'rolle.name'],
		filter: { rolle: { name: 'Spielleitung' } }
	});

	const erzaehler = directus.items('camarilla_orga').readByQuery({
		limit: -1,
		fields: ['*', 'rolle.name'],
		filter: { rolle: { name: 'Erzähler' } }
	});

	return {
		spielleitung: orga.array().parse((await spielleitung).data),
		erzaehler: orga.array().parse((await erzaehler).data)
	};
}) satisfies PageServerLoad;
