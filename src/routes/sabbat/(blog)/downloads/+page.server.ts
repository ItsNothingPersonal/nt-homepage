import { readFiles } from '@directus/sdk';
import { client } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const folderResponse = client.request(
		readFiles({
			filter: { folder: { name: { _eq: 'Sabbat Downloads' } } }
		})
	);

	return { folderResponse };
}) satisfies PageServerLoad;
