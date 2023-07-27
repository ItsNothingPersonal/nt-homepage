export function isNullOrUndefined<T>(obj: T | null | undefined): obj is null | undefined {
	return typeof obj === 'undefined' || obj === null;
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
