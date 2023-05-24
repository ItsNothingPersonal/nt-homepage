import { spielort } from '$lib/types/zod/spielort';
import { w40KSpielortFiles } from '$lib/types/zod/w40kSpielortFiles';
import { directus } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const response = spielort
		.array()
		.parse((await directus.items('w40k_spielort').readByQuery({ limit: 1 })).data);

	const data = response.length === 1 ? response[0] : undefined;

	const spielortBilder = directus.items('w40k_spielort_files').readByQuery({
		filter: {
			w40k_spielort_id: {
				_eq: data?.id ?? -1
			}
		}
	});

	return {
		spielort: data,
		bilder: w40KSpielortFiles.array().parse((await spielortBilder).data)
	};
}) satisfies PageServerLoad;
