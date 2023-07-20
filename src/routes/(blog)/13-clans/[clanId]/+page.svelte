<script lang="ts">
	import { isNullOrUndefined } from '$lib/util';
	import { A, Carousel, Heading, P } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let showThumbs = false;
	let showCaptions = false;
	let showIndicators = false;
	let beschreibung = '';

	let images = data.bilder?.map((e) => {
		return {
			id: e.clans_id,
			imgurl: `${import.meta.env.VITE_DIRECTUS_URL}/assets/${
				e.directus_files_id
			}?fit=cover&width=384&height=384&format=auto`
		};
	});

	onMount(() => {
		beschreibung = data.beschreibung?.code ?? '';
	});
</script>

<Heading tag="h1" class="mb-2">{data.clan?.name}</Heading>
<Heading tag="h2" class="mb-4">{data.clan?.nickname}</Heading>

<div class="container">
	{#if !isNullOrUndefined(images) && images.length > 0}
		<div class={`float-left max-w-sm md:mr-2 mb-2`}>
			<Carousel {images} {showThumbs} {showCaptions} {showIndicators} loop duration={5000} />
		</div>
	{/if}
	<P uppercase class="[&>p]:first-letter:text-2xl [&>p]::text-2xl [&>p]:text-justify [&>p]:mb-2">
		{@html beschreibung}
		<A href="https://whitewolf.fandom.com/de/wiki/Vampire:_Die_Maskerade_1999" aClass="text-sm">
			Quelle: Vampire - Die Maskerade (1999), 3. Edition, Feder & Schwert
		</A>
	</P>
</div>
