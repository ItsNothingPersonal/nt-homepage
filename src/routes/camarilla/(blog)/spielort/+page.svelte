<script lang="ts">
	import { ScreenSize } from '$lib/types/sceenSize';
	import { isNullOrUndefined } from '$lib/util';
	import { Carousel, Heading, P } from 'flowbite-svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let showThumbs = false;
	let showCaptions = false;
	let showIndicators = false;
	let width = 0;
	let breakPoint: number = ScreenSize.MD;

	let images = data.bilder?.map((e) => {
		return {
			id: e.camarilla_spielort_id,
			imgurl: `${import.meta.env.VITE_DIRECTUS_URL}/assets/${e.directus_files_id}?format=webp`
		};
	});
</script>

<svelte:window bind:innerWidth={width} />

<Heading tag="h1" class="mb-4">Spielort</Heading>

<div class="flex flex-col">
	<div class="grid-cols-min-content-first mb-4 text-left">
		<Heading tag="h2" class="mb-2">Anschrift</Heading>
		<Heading tag="h3">Name</Heading>
		<P>{data.spielort?.spielort_name}</P>
		<Heading tag="h3">Straße</Heading>
		<P>{data.spielort?.spielort_strasse}</P>
		<Heading tag="h3">PLZ + Ort</Heading>
		<P>{data.spielort?.spielort_plz} {data.spielort?.spielort_ort}</P>
	</div>
	<Heading tag="h3" class="mb-2">Google Maps</Heading>

	<iframe
		title="Spielort Karte"
		src={data.spielort?.spielort_karte}
		style={`border:0; width: 100%;`}
		allowfullscreen={true}
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
	/>

	{#if !isNullOrUndefined(data.bilder) && data.bilder?.length > 0}
		<Heading tag="h3" class="mb-2 mt-4">Bildergalerie</Heading>
		<Carousel
			images={images ?? []}
			{showThumbs}
			{showCaptions}
			{showIndicators}
			loop
			duration={3000}
		/>
	{/if}
</div>
