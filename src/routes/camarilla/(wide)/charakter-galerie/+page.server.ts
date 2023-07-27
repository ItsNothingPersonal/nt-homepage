import { camarillaCharaktere } from '$lib/types/zod/camarillaCharaktere';
import { readItems } from '@directus/sdk';
import { client } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const charaktere = client.request(
		readItems('camarilla_charaktere', {
			fields: [
				'*',
				{ blutlinie: ['name'] },
				{ clan: ['name'] },
				{ charakter_status: ['name'] },
				{ offizier: ['name'] },
				{ zusatzfunktion: ['name'] },
				{ sekte: ['name'] }
			]
		})
	);

	return {
		charaktere: camarillaCharaktere.array().parse(await charaktere)
	};
}) satisfies PageServerLoad;
