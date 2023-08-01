import { sabbatCharakter } from '$lib/types/zod/sabbatCharakter';
import { sabbatPacks } from '$lib/types/zod/sabbatPacks';
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
			sort: ['offizier', '-charakter_status']
		})
	);

	return {
		packs: sabbatPacks.array().parse(await packs),
		charaktere: sabbatCharakter.array().parse(await charaktere)
	};
}) satisfies PageServerLoad;
