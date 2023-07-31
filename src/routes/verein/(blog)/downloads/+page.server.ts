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

	const downloadInformation = fileInformation
		.array()
		.parse(await folderResponse)
		.map((e) => {
			return {
				id: e.id,
				name: e.filename_download,
				size: e.filesize ? parseInt(e.filesize) / 1024 ** 2 : 0
			};
		});

	return { downloadInformation };
}) satisfies PageServerLoad;
