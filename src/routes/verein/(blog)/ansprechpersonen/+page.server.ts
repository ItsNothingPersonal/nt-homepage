import { vereinAnsprechpersonen } from '$lib/types/zod/vereinAnsprechpersonen';
import { readItems } from '@directus/sdk';
import { client } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const vorstand = client.request(
		readItems('verein_ansprechpersonen', {
			fields: ['*', { rolle: ['name'] }],
			filter: {
				rolle: { name: { _in: ['Erster Vorstand', 'Zweiter Vorstand', 'Schatzmeister'] } }
			},
			sort: ['id']
		})
	);

	const projektleiter = client.request(
		readItems('verein_ansprechpersonen', {
			fields: ['*', { rolle: ['name'] }],
			filter: {
				rolle: { name: { _starts_with: 'Projektleiter' } }
			},
			sort: ['id']
		})
	);

	const andere = client.request(
		readItems('verein_ansprechpersonen', {
			fields: ['*', { rolle: ['name'] }],
			filter: {
				rolle: {
					name: {
						_in: ['Webmaster', 'Social-Media-Beauftragte', 'Zeugwart', 'Discord-Admin']
					}
				}
			},
			sort: ['id']
		})
	);

	return {
		vorstand: vereinAnsprechpersonen.array().parse(await vorstand),
		projektleiter: vereinAnsprechpersonen.array().parse(await projektleiter),
		andere: vereinAnsprechpersonen.array().parse(await andere)
	};
}) satisfies PageServerLoad;
