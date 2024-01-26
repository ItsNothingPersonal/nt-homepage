import { fileInformation } from '$lib/types/zod/fileInformation';
import { readFiles, readFolders } from '@directus/sdk';
import { client } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const imageFolders = await client.request(
		readFolders({
			filter: { parent: { _eq: import.meta.env.VITE_WH40K_GALLERY_FOLDER } },
			deep: true
		})
	);

	const imagePromises = imageFolders.map(async (folder) => {
		return client.request(
			readFiles({
				filter: { folder: { id: { _eq: folder.id } } }
			})
		);
	});

	const imageResults = await Promise.all(imagePromises);
	const images = imageResults.flat();

	return { images: fileInformation.array().parse(images) };
}) as PageServerLoad;
