import { isNullOrUndefined } from '$lib/util';
import { directus } from '../../../services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const spielort = await directus.items('camarilla_spielort').readByQuery({
		limit: 1
	});

	const spielortBilder = await directus.items('camarilla_spielort_files').readByQuery({
		filter: {
			camarilla_spielort_id: {
				_eq: !isNullOrUndefined(spielort?.data) ? spielort.data[0].id : -1
			}
		}
	});

	return {
		spielort: !isNullOrUndefined(spielort.data) ? spielort.data[0] : undefined,
		bilder: spielortBilder?.data
	};
}) satisfies PageServerLoad;
