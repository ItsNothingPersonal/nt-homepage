import { readItems } from '@directus/sdk';
import { client } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const spielleitung = client.request(
		readItems('sabbat_orga', {
			filter: { rolle: { name: { _eq: 'Spielleitung' } } },
			fields: ['*', { rolle: ['name'] }]
		})
	);

	const erzaehler = client.request(
		readItems('sabbat_orga', {
			filter: { rolle: { name: { _eq: 'Erzähler' } } },
			fields: ['*', { rolle: ['name'] }]
		})
	);

	return {
		spielleitung,
		erzaehler
	};
}) satisfies PageServerLoad;
