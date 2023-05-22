import { sabbatSpielortFiles } from '$lib/types/zod/sabbatSpielortFiles';
import { spielort } from '$lib/types/zod/spielort';
import { directus } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const response = spielort
		.array()
		.parse((await directus.items('sabbat_spielort').readByQuery({ limit: 1 })).data);

	const data = response.length === 1 ? response[0] : undefined;

	const spielortBilder = directus.items('sabbat_spielort_files').readByQuery({
		filter: {
			sabbat_spielort_id: {
				_eq: data?.id ?? -1
			}
		}
	});

	return {
		spielort: data,
		bilder: sabbatSpielortFiles.array().parse((await spielortBilder).data)
	};
}) satisfies PageServerLoad;
