import { ScreenSize } from './types/sceenSize';

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

export function getImageUrlQuality(
	filesId: string,
	quality = 100,
	format: 'auto' | 'jpg' | 'png' | 'webp' | 'tiff' = 'auto'
) {
	return `${
		import.meta.env.VITE_DIRECTUS_URL
	}/assets/${filesId}?format=${format}&quality=${quality}`;
}

export function getOriginalFile(filesId: string) {
	return `${import.meta.env.VITE_DIRECTUS_URL}/assets/${filesId}`;
}

export function getDownloadUrl(filesId: string) {
	return `${import.meta.env.VITE_DIRECTUS_URL}/assets/${filesId}`;
}

export function getFormattedDay(date: Date | undefined): string {
	return date ? ('0' + date.getDate()).slice(-2) : '';
}

export function getFormattedMonth(date: Date | undefined): string {
	return date ? ('0' + (date.getMonth() + 1)).slice(-2) : '';
}

export function isString(input: unknown): input is string {
	return typeof input === 'string';
}

export function isMobile(innerWidth: number): boolean {
	return innerWidth < ScreenSize.XL;
}

export function isPotraitMode(width: number, height: number): boolean {
	return height > width;
}

export function isLandscapeMode(width: number, height: number): boolean {
	return height < width;
}

export function titleCaseWord(word: string): string {
	if (!word) return word;
	return word[0].toUpperCase() + word.substring(1).toLowerCase();
}
