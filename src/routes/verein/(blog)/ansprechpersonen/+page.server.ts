import { vereinAnsprechpersonen } from '$lib/types/zod/vereinAnsprechpersonen';
import { directus } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const vorstand = directus.items('verein_ansprechpersonen').readByQuery({
		limit: -1,
		fields: ['*', 'rolle.name'],
		filter: {
			rolle: {
				name: {
					_in: ['Erster Vorstand', 'Zweiter Vorstand', 'Schatzmeister']
				}
			}
		},
		sort: ['id']
	});

	const projektleiter = directus.items('verein_ansprechpersonen').readByQuery({
		limit: -1,
		fields: ['*', 'rolle.name'],
		filter: {
			rolle: {
				name: {
					_starts_with: 'Projektleiter'
				}
			}
		},
		sort: ['id']
	});

	const andere = directus.items('verein_ansprechpersonen').readByQuery({
		limit: -1,
		fields: ['*', 'rolle.name'],
		filter: {
			rolle: {
				name: {
					_in: ['Webmaster', 'Social-Media-Beauftragte', 'Zeugwart', 'Discord-Admin']
				}
			}
		},
		sort: ['id']
	});

	return {
		vorstand: vereinAnsprechpersonen.array().parse((await vorstand).data),
		projektleiter: vereinAnsprechpersonen.array().parse((await projektleiter).data),
		andere: vereinAnsprechpersonen.array().parse((await andere).data)
	};
}) satisfies PageServerLoad;
