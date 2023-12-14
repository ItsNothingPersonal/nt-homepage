<script lang="ts">
	import ImageCarousel from '$lib/components/imageCarousel.svelte';
	import { isNullOrUndefined } from '$lib/util';

	export let data;

	let images = data.bilder?.map((e) => {
		return `${import.meta.env.VITE_DIRECTUS_URL}/assets/${
			e.directus_files_id
		}?fit=cover&width=384&height=384&format=auto`;
	});
	let innerWidth: number = 0;
</script>

<svelte:window bind:innerWidth />

<h1 class="h1 mb-2 text-center font-bold">{data.clan?.name}</h1>
<h2 class="h2 mb-4 text-center">{data.clan?.nickname}</h2>

<div class="container">
	{#if !isNullOrUndefined(images) && images.length > 0}
		<ImageCarousel size={innerWidth > 640 ? 'w-96' : 'w-fit'} {images} floatLeft={true} />
	{/if}
	<p class="[&>p]::text-2xl [&>p]:mb-2 [&>p]:text-justify [&>p]:first-letter:text-2xl">
		{@html data.beschreibung?.code}
		{#if data.beschreibung?.code !== '\n\n'}
			<a
				href="https://whitewolf.fandom.com/de/wiki/Vampire:_Die_Maskerade_1999"
				class="text-sm underline decoration-dotted underline-offset-4"
			>
				Quelle: Vampire - Die Maskerade (1999), 3. Edition, Feder & Schwert
			</a>
		{/if}
	</p>
</div>
