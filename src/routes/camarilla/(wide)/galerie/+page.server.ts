import { CAMARILLA_GALLERY_FOLDER } from '$env/static/private';
import { fileInformation } from '$lib/types/zod/fileInformation';
import { folderInformation } from '$lib/types/zod/folderInformation';
import { readFiles, readFolders } from '@directus/sdk';
import { client } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const imageFoldersRAW = await client.request(
		readFolders({
			filter: { parent: { _eq: CAMARILLA_GALLERY_FOLDER } },
			deep: true
		})
	);
	const imageFolders = folderInformation.array().parse(imageFoldersRAW);

	const imagePromises = imageFolders.map(async (folder) => {
		return client.request(
			readFiles({
				filter: { folder: { id: { _eq: folder.id } } }
			})
		);
	});

	const imageResults = await Promise.all(imagePromises);
	const images = fileInformation.array().parse(imageResults.flat());

	return { images, imageFolders };
}) satisfies PageServerLoad;
