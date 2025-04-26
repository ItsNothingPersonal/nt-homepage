import { fileInformation } from '$lib/types/zod/fileInformation';
import { readFiles } from '@directus/sdk';
import { client } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const folderResponse = client.request(
		readFiles({
			filter: { folder: { name: { _eq: 'Verein Downloads' } } }
		})
	);

	return { folderResponse: fileInformation.array().parse(await folderResponse) };
}) satisfies PageServerLoad;
