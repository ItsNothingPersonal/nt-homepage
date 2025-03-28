<script lang="ts">
	import { ScreenSize } from '$lib/types/sceenSize';
	import type { FileInformation } from '$lib/types/zod/fileInformation';
	import type { FolderInformation } from '$lib/types/zod/folderInformation';
	import { isString } from '$lib/util';
	import { writable } from 'svelte/store';
	import ButtonGroup from '../ButtonGroup/ButtonGroup.svelte';
	import ImageModal from '../ImageModal/ImageModal.svelte';
	import { getSpielabendFilterSubMenu, splitArrayIntoParts } from './imageGalleryUtils';

	interface Props {
		images: FileInformation[];
		folders?: FolderInformation[];
	}

	let { images, folders = [] }: Props = $props();

	let rowA: { id: string; description: string | null }[] = $state([]);
	let rowB: { id: string; description: string | null }[] = $state([]);
	let rowC: { id: string; description: string | null }[] = $state([]);
	let rowD: { id: string; description: string | null }[] = $state([]);
	let width = $state(0);

	const galleryFilter = writable('.*');

	$effect(() => {
		const filteredFolder = folders.filter((e) => e.name.match($galleryFilter));

		const result = splitArrayIntoParts(
			images.filter((e) =>
				filteredFolder
					.map((e) => e.id)
					.includes(isString(e.folder) ? e.folder : (e.folder?.name ?? ''))
			),
			4
		);

		rowA = result[0].map((e) => {
			return {
				id: e.id,
				description: e.description
			};
		});
		rowB = result[1].map((e) => {
			return {
				id: e.id,
				description: e.description
			};
		});
		rowC = result[2].map((e) => {
			return {
				id: e.id,
				description: e.description
			};
		});
		rowD = result[3].map((e) => {
			return {
				id: e.id,
				description: e.description
			};
		});
	});
</script>

<svelte:window bind:innerWidth={width} />

<ButtonGroup
	config={[
		{
			label: 'Filter',
			indicator: $galleryFilter !== '.*',
			subMenu: getSpielabendFilterSubMenu(galleryFilter, folders),
			store: galleryFilter
		}
	]}
	smallSwitch={width < ScreenSize.SM}
	rounded={'rounded-none!'}
/>

<section class="grid grid-cols-2 md:grid-cols-4">
	<div class="flex flex-col">
		{#each rowA as rowAElement, index}
			<ImageModal
				id={rowAElement.id}
				description={rowAElement.description}
				loading={index < 2 ? 'eager' : 'lazy'}
			/>
		{/each}
	</div>
	<div class="flex flex-col">
		{#each rowB as rowBElement, index}
			<ImageModal
				id={rowBElement.id}
				description={rowBElement.description}
				loading={index < 2 ? 'eager' : 'lazy'}
			/>
		{/each}
	</div>
	<div class="flex flex-col">
		{#each rowC as rowCElement, index}
			<ImageModal
				id={rowCElement.id}
				description={rowCElement.description}
				loading={index < 2 ? 'eager' : 'lazy'}
			/>
		{/each}
	</div>
	<div class="flex flex-col">
		{#each rowD as rowDElement, index}
			<ImageModal
				id={rowDElement.id}
				description={rowDElement.description}
				loading={index < 2 ? 'eager' : 'lazy'}
			/>
		{/each}
	</div>
</section>
