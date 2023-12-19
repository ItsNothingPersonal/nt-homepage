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
			],
			sort: ['offizier', 'charakter_status'],
			filter: { status: { _eq: 'archived' } }
		})
	);

	return {
		charaktere
	};
}) satisfies PageServerLoad;
