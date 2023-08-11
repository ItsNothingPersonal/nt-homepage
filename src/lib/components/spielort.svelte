<script lang="ts">
	import type { ImageInformation } from '$lib/types/imageInformation';
	import { isNullOrUndefined } from '$lib/util';
	import { Card, Heading, P } from 'flowbite-svelte';
	import ImageCarousel from './imageCarousel.svelte';

	export let name: string;
	export let strasse: string;
	export let plz: string;
	export let ort: string;
	export let karte: string;
	export let bilder: ImageInformation[];
</script>

<Heading tag="h1" class="mb-4">Spielort</Heading>

<div class="flex flex-col items-center">
	<Heading tag="h2" class="mb-2">Anschrift</Heading>
	<Card class="bg-light-50 dark:bg-dark-700">
		<div class="flex flex-col items-center justify-center">
			<P>{name}</P>
			<P>{strasse}</P>
			<P>{plz} {ort}</P>
		</div>
	</Card>

	<Heading tag="h3" class="mb-2 mt-4">Google Maps</Heading>
	<iframe
		title="Spielort Karte"
		src={karte}
		style={`border:0; width: 100%;`}
		allowfullscreen={true}
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
		height="300px"
	/>

	{#if !isNullOrUndefined(bilder) && bilder?.length > 0}
		<Heading tag="h3" class="mb-2 mt-4">Bildergalerie</Heading>
		<ImageCarousel images={bilder} />
	{/if}
</div>
