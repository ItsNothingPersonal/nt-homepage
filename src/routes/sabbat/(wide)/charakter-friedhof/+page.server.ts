import { readItems } from '@directus/sdk';
import { client } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const packs = client.request(readItems('sabbat_packs'));
	const charaktere = client.request(
		readItems('sabbat_charaktere', {
			fields: [
				'*',
				{ offizier: ['name'] },
				{ blutlinie: ['name'] },
				{ pack: ['name'] },
				{ charakter_status: ['name'] },
				{ clan: ['name'] }
			],
			sort: ['offizier', '-charakter_status'],
			filter: { status: { _eq: 'archived' } }
		})
	);

	return {
		packs,
		charaktere
	};
}) satisfies PageServerLoad;
