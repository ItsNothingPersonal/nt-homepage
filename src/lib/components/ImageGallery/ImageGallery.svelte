<script lang="ts">
	import { ScreenSize } from '$lib/types/sceenSize';
	import type { FileInformation } from '$lib/types/zod/fileInformation';
	import type { FolderInformation } from '$lib/types/zod/folderInformation';
	import { getOriginalFile, isString } from '$lib/util';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import { Image } from '@unpic/svelte';
	import { writable } from 'svelte/store';
	import ButtonGroup from '../ButtonGroup/ButtonGroup.svelte';
	import {
		getSpielabendFilterSubMenu,
		modalComponentImage,
		splitArrayIntoParts
	} from './imageGalleryUtils';

	export let images: FileInformation[];
	export let folders: FolderInformation[] = [];

	let rowA: FileInformation[] = [];
	let rowB: FileInformation[] = [];
	let rowC: FileInformation[] = [];
	let rowD: FileInformation[] = [];
	let width = 0;

	const modalStore = getModalStore();
	const galleryFilter = writable('.*');

	$: {
		const filteredFolder = folders.filter((e) => e.name.match($galleryFilter));

		const result = splitArrayIntoParts(
			images.filter((e) =>
				filteredFolder
					.map((e) => e.id)
					.includes(isString(e.folder) ? e.folder : e.folder?.name ?? '')
			),
			4
		);

		rowA = result[0];
		rowB = result[1];
		rowC = result[2];
		rowD = result[3];
	}
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
	rounded={'!rounded-none'}
/>

<section class="grid grid-cols-2 gap-2 md:grid-cols-4">
	<div class="grid gap-4">
		{#each rowA as rowAElement}
			<div
				on:click={() =>
					modalComponentImage(modalStore, getOriginalFile(rowAElement.id), rowAElement.description)}
				on:keyup={() =>
					modalComponentImage(modalStore, getOriginalFile(rowAElement.id), rowAElement.description)}
				role="button"
				tabindex="0"
			>
				<Image
					src={getOriginalFile(rowAElement.id)}
					layout="fullWidth"
					alt={rowAElement.description ?? ''}
					class="rounded-lg"
					cdn="directus"
				/>
			</div>
		{/each}
	</div>
	<div class="grid gap-4">
		{#each rowB as rowBElement}
			<div
				on:click={() =>
					modalComponentImage(modalStore, getOriginalFile(rowBElement.id), rowBElement.description)}
				on:keyup={() =>
					modalComponentImage(modalStore, getOriginalFile(rowBElement.id), rowBElement.description)}
				role="button"
				tabindex="0"
			>
				<Image
					src={getOriginalFile(rowBElement.id)}
					layout="fullWidth"
					alt={rowBElement.description ?? ''}
					class="rounded-lg"
					cdn="directus"
				/>
			</div>
		{/each}
	</div>
	<div class="grid gap-4">
		{#each rowC as rowCElement}
			<div
				on:click={() =>
					modalComponentImage(modalStore, getOriginalFile(rowCElement.id), rowCElement.description)}
				on:keyup={() =>
					modalComponentImage(modalStore, getOriginalFile(rowCElement.id), rowCElement.description)}
				role="button"
				tabindex="0"
			>
				<Image
					src={getOriginalFile(rowCElement.id)}
					layout="fullWidth"
					alt={rowCElement.description ?? ''}
					class="rounded-lg"
					cdn="directus"
				/>
			</div>
		{/each}
	</div>
	<div class="grid gap-4">
		{#each rowD as rowDElement}
			<div
				on:click={() =>
					modalComponentImage(modalStore, getOriginalFile(rowDElement.id), rowDElement.description)}
				on:keyup={() =>
					modalComponentImage(modalStore, getOriginalFile(rowDElement.id), rowDElement.description)}
				role="button"
				tabindex="0"
			>
				<Image
					src={getOriginalFile(rowDElement.id)}
					layout="fullWidth"
					alt={rowDElement.description ?? ''}
					class="rounded-lg"
					cdn="directus"
				/>
			</div>
		{/each}
	</div>
</section>
