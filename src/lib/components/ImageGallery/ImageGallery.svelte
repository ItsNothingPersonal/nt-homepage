<script lang="ts">
	import { run } from 'svelte/legacy';

	import { PUBLIC_DIRECTUS_URL } from '$env/static/public';
	import { ScreenSize } from '$lib/types/sceenSize';
	import type { FileInformation } from '$lib/types/zod/fileInformation';
	import type { FolderInformation } from '$lib/types/zod/folderInformation';
	import { isString } from '$lib/util';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import { Image, Source } from '@unpic/svelte';
	import { writable } from 'svelte/store';
	import ButtonGroup from '../ButtonGroup/ButtonGroup.svelte';
	import {
		getSpielabendFilterSubMenu,
		modalComponentImage,
		splitArrayIntoParts
	} from './imageGalleryUtils';

	interface Props {
		images: FileInformation[];
		folders?: FolderInformation[];
	}

	let { images, folders = [] }: Props = $props();

	let rowA: { url: string; description: string | null }[] = $state([]);
	let rowB: { url: string; description: string | null }[] = $state([]);
	let rowC: { url: string; description: string | null }[] = $state([]);
	let rowD: { url: string; description: string | null }[] = $state([]);
	let width = $state(0);

	const modalStore = getModalStore();
	const galleryFilter = writable('.*');

	run(() => {
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
				url: `${PUBLIC_DIRECTUS_URL}/assets/${e.id}`,
				description: e.description
			};
		});
		rowB = result[1].map((e) => {
			return {
				url: `${PUBLIC_DIRECTUS_URL}/assets/${e.id}`,
				description: e.description
			};
		});
		rowC = result[2].map((e) => {
			return {
				url: `${PUBLIC_DIRECTUS_URL}/assets/${e.id}`,
				description: e.description
			};
		});
		rowD = result[3].map((e) => {
			return {
				url: `${PUBLIC_DIRECTUS_URL}/assets/${e.id}`,
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

<section class="grid grid-cols-2 gap-2 md:grid-cols-4">
	<div class="flex flex-col gap-4">
		{#each rowA as rowAElement, aElementIndex}
			<div
				onclick={() => modalComponentImage(modalStore, rowAElement.url, rowAElement.description)}
				onkeyup={() => modalComponentImage(modalStore, rowAElement.url, rowAElement.description)}
				role="button"
				tabindex="0"
			>
				<picture>
					<Source src={rowAElement.url} type="image/webp" layout="fullWidth" cdn="directus" />
					<Image
						src={rowAElement.url}
						layout="fullWidth"
						alt={rowAElement.description ?? ''}
						class="rounded-lg"
						cdn="directus"
						loading={aElementIndex < 2 ? 'eager' : 'lazy'}
						background="auto"
					/>
				</picture>
			</div>
		{/each}
	</div>
	<div class="flex flex-col gap-4">
		{#each rowB as rowBElement, bElementIndex}
			<div
				onclick={() => modalComponentImage(modalStore, rowBElement.url, rowBElement.description)}
				onkeyup={() => modalComponentImage(modalStore, rowBElement.url, rowBElement.description)}
				role="button"
				tabindex="0"
			>
				<picture>
					<Source src={rowBElement.url} type="image/webp" layout="fullWidth" cdn="directus" />
					<Image
						src={rowBElement.url}
						layout="fullWidth"
						alt={rowBElement.description ?? ''}
						class="rounded-lg"
						cdn="directus"
						loading={bElementIndex < 2 ? 'eager' : 'lazy'}
						background="auto"
					/>
				</picture>
			</div>
		{/each}
	</div>
	<div class="flex flex-col gap-4">
		{#each rowC as rowCElement, cElementIndex}
			<div
				onclick={() => modalComponentImage(modalStore, rowCElement.url, rowCElement.description)}
				onkeyup={() => modalComponentImage(modalStore, rowCElement.url, rowCElement.description)}
				role="button"
				tabindex="0"
			>
				<picture>
					<Source src={rowCElement.url} type="image/webp" layout="fullWidth" cdn="directus" />
					<Image
						src={rowCElement.url}
						layout="fullWidth"
						alt={rowCElement.description ?? ''}
						class="rounded-lg"
						cdn="directus"
						loading={cElementIndex < 2 ? 'eager' : 'lazy'}
						background="auto"
					/>
				</picture>
			</div>
		{/each}
	</div>
	<div class="flex flex-col gap-4">
		{#each rowD as rowDElement, dElementIndex}
			<div
				onclick={() => modalComponentImage(modalStore, rowDElement.url, rowDElement.description)}
				onkeyup={() => modalComponentImage(modalStore, rowDElement.url, rowDElement.description)}
				role="button"
				tabindex="0"
			>
				<picture>
					<Source src={rowDElement.url} type="image/webp" layout="fullWidth" cdn="directus" />
					<Image
						src={rowDElement.url}
						layout="fullWidth"
						alt={rowDElement.description ?? ''}
						class="rounded-lg"
						cdn="directus"
						loading={dElementIndex < 2 ? 'eager' : 'lazy'}
						background="auto"
					/>
				</picture>
			</div>
		{/each}
	</div>
</section>
