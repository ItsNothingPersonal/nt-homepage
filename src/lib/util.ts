import { directus } from 'services/directus';
import { folderInformation } from './types/zod/folderInformation';

export function isNullOrUndefined<T>(obj: T | null | undefined): obj is null | undefined {
	return typeof obj === 'undefined' || obj === null;
}

export async function getFolderByName(name: string): Promise<string | undefined> {
	const folderResponse = directus.folders.readByQuery({
		filter: { name: { _eq: name } }
	});

	const folderIds = folderInformation
		.array()
		.parse((await folderResponse).data)
		.map((e) => e.id);

	if (folderIds.length !== 1) {
		return undefined;
	}
	return folderIds[0];
}

export function getImageUrl(
	filesId: string,
	width = 768,
	height = 512,
	fit: 'cover' | 'contain' | 'inside' | 'outside' = 'contain',
	format: 'auto' | 'jpg' | 'png' | 'webp' | 'tiff' = 'auto'
) {
	return `${
		import.meta.env.VITE_DIRECTUS_URL
	}/assets/${filesId}?format=${format}&width=${width}&height=${height}&fit=${fit}`;
}

export function getDownloadUrl(filesId: string) {
	return `${import.meta.env.VITE_DIRECTUS_URL}/assets/${filesId}`;
}
