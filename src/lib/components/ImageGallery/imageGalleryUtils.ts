import type { SubMenuConfig } from '$lib/types/subMenuConfig';
import type { FileInformation } from '$lib/types/zod/fileInformation';
import type { FolderInformation } from '$lib/types/zod/folderInformation';
import { get, type Writable } from 'svelte/store';

export function splitArrayIntoParts(array: FileInformation[], parts: number) {
	const result: FileInformation[][] = [];

	for (let i = 0; i < parts; i++) {
		const start = Math.floor((i * array.length) / parts);
		const end = Math.floor(((i + 1) * array.length) / parts);
		result.push(array.slice(start, end));
	}

	return result;
}

export function swapGalleryFilter(galleryFilter: Writable<string>, filter: string) {
	if (get(galleryFilter).match(filter)) {
		galleryFilter.set('.*');
	} else {
		galleryFilter.set(filter);
	}
}

export function getSpielabendFilterSubMenu(
	spielabendFilter: Writable<string>,
	folders: FolderInformation[]
): SubMenuConfig[] {
	return folders
		.map((e) => {
			return {
				label: e.name,
				onClick: () => swapGalleryFilter(spielabendFilter, e.name)
			};
		})
		.sort((a, b) => a.label.localeCompare(b.label));
}
