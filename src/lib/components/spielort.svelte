<script lang="ts">
	import type { ImageInformation } from '$lib/types/imageInformation';
	import { isNullOrUndefined } from '$lib/util';
	import { Carousel, Heading, P } from 'flowbite-svelte';

	export let name: string;
	export let strasse: string;
	export let plz: string;
	export let ort: string;
	export let karte: string;
	export let bilder: ImageInformation[];

	export let showThumbs = false;
	export let showCaptions = false;
	export let showIndicators = false;
</script>

<Heading tag="h1" class="mb-4">Spielort</Heading>

<div class="flex flex-col">
	<div class="grid-cols-min-content-first mb-4 text-left">
		<Heading tag="h2" class="mb-2">Anschrift</Heading>
		<Heading tag="h3">Name</Heading>
		<P>{name}</P>
		<Heading tag="h3">Straße</Heading>
		<P>{strasse}</P>
		<Heading tag="h3">PLZ + Ort</Heading>
		<P>{plz} {ort}</P>
	</div>
	<Heading tag="h3" class="mb-2">Google Maps</Heading>

	<iframe
		title="Spielort Karte"
		src={karte}
		style={`border:0; width: 100%;`}
		allowfullscreen={true}
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
	/>

	{#if !isNullOrUndefined(bilder) && bilder?.length > 0}
		<Heading tag="h3" class="mb-2 mt-4">Bildergalerie</Heading>
		<Carousel images={bilder} {showThumbs} {showCaptions} {showIndicators} loop duration={5000} />
	{/if}
</div>
