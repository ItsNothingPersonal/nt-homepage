<script lang="ts">
	import type { FileInformation } from '$lib/types/zod/fileInformation';
	import { getImageUrlQuality, getOriginalFile } from '$lib/util';
	import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	export let images: FileInformation[];

	let rowA: FileInformation[] = [];
	let rowB: FileInformation[] = [];
	let rowC: FileInformation[] = [];
	let rowD: FileInformation[] = [];

	const modalStore = getModalStore();

	onMount(() => {
		const result = splitArrayIntoParts(images, 4);

		rowA = result[0];
		rowB = result[1];
		rowC = result[2];
		rowD = result[3];
	});

	function splitArrayIntoParts(array: FileInformation[], parts: number) {
		let result: FileInformation[][] = [];

		for (let i = 0; i < parts; i++) {
			let start = Math.floor((i * array.length) / parts);
			let end = Math.floor(((i + 1) * array.length) / parts);
			result.push(array.slice(start, end));
		}

		return result;
	}

	function modalComponentImage(imageUrl: string, alt: string | undefined | null = ''): void {
		const modal: ModalSettings = {
			type: 'component',
			component: 'image',
			image: imageUrl,
			meta: { alt: alt ?? '' }
		};
		modalStore.trigger(modal);
	}
</script>

<section class="grid grid-cols-2 gap-2 md:grid-cols-4">
	<div class="grid gap-4">
		{#each rowA as rowAElement}
			<div
				on:click={() =>
					modalComponentImage(getOriginalFile(rowAElement.id), rowAElement.description)}
				on:keyup={() =>
					modalComponentImage(getOriginalFile(rowAElement.id), rowAElement.description)}
				role="button"
				tabindex="0"
			>
				<img
					class="h-auto max-w-full rounded-lg"
					src={getImageUrlQuality(rowAElement.id, 75)}
					alt={rowAElement.description ?? ''}
					loading="lazy"
				/>
			</div>
		{/each}
	</div>
	<div class="grid gap-4">
		{#each rowB as rowBElement}
			<div
				on:click={() =>
					modalComponentImage(getOriginalFile(rowBElement.id), rowBElement.description)}
				on:keyup={() =>
					modalComponentImage(getOriginalFile(rowBElement.id), rowBElement.description)}
				role="button"
				tabindex="0"
			>
				<img
					class="h-auto max-w-full rounded-lg"
					src={getImageUrlQuality(rowBElement.id, 75)}
					alt={rowBElement.description ?? ''}
					loading="lazy"
				/>
			</div>
		{/each}
	</div>
	<div class="grid gap-4">
		{#each rowC as rowCElement}
			<div
				on:click={() =>
					modalComponentImage(getOriginalFile(rowCElement.id), rowCElement.description)}
				on:keyup={() =>
					modalComponentImage(getOriginalFile(rowCElement.id), rowCElement.description)}
				role="button"
				tabindex="0"
			>
				<img
					class="h-auto max-w-full rounded-lg"
					src={getImageUrlQuality(rowCElement.id, 75)}
					alt={rowCElement.description ?? ''}
					loading="lazy"
				/>
			</div>
		{/each}
	</div>
	<div class="grid gap-4">
		{#each rowD as rowDElement}
			<div
				on:click={() =>
					modalComponentImage(getOriginalFile(rowDElement.id), rowDElement.description)}
				on:keyup={() =>
					modalComponentImage(getOriginalFile(rowDElement.id), rowDElement.description)}
				role="button"
				tabindex="0"
			>
				<img
					class="h-auto max-w-full rounded-lg"
					src={getImageUrlQuality(rowDElement.id, 75)}
					alt={rowDElement.description ?? ''}
					loading="lazy"
				/>
			</div>
		{/each}
	</div>
</section>
