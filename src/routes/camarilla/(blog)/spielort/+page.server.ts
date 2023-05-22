import { camarillaSpielortFiles } from '$lib/types/zod/camarillaSpielortFiles';
import { spielort } from '$lib/types/zod/spielort';
import { directus } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const response = spielort
		.array()
		.parse((await directus.items('camarilla_spielort').readByQuery({ limit: 1 })).data);

	const data = response.length === 1 ? response[0] : undefined;

	const spielortBilder = directus.items('camarilla_spielort_files').readByQuery({
		filter: {
			camarilla_spielort_id: {
				_eq: data?.id ?? -1
			}
		}
	});

	return {
		spielort: data,
		bilder: camarillaSpielortFiles.array().parse((await spielortBilder).data)
	};
}) satisfies PageServerLoad;
