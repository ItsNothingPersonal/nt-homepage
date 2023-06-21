import { fileInformation } from '$lib/types/zod/fileInformation';
import { getFolderByName } from '$lib/util';
import { directus } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const fileResponse = directus.files.readByQuery({
		filter: { folder: { _eq: await getFolderByName('Verein Downloads') } }
	});

	const downloadInformation = fileInformation
		.array()
		.parse((await fileResponse).data)
		.map((e) => {
			return { id: e.id, name: e.filename_download, size: parseInt(e.filesize) / 1024 ** 2 };
		});

	return { downloadInformation };
}) satisfies PageServerLoad;
