<script lang="ts">
	import { isNullOrUndefined } from '$lib/util';
	import ImageCarousel from './imageCarousel.svelte';

	export let name: string;
	export let strasse: string;
	export let plz: string;
	export let ort: string;
	export let karte: string;
	export let bilder: string[];

	let innerWidth: number = 0;
</script>

<svelte:window bind:innerWidth />

<h1 class="h1 mb-4 text-center font-bold">Spielort</h1>

<div class="flex flex-col items-center">
	<h2 class="h2 mb-2">Anschrift</h2>
	<div class="card mb-4 rounded-lg p-2">
		<div class="flex flex-col items-center justify-center">
			<p>{name}</p>
			<p>{strasse}</p>
			<p>{plz} {ort}</p>
		</div>
	</div>

	<h3 class="h3 mb-2">Google Maps</h3>
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
		<h3 class="h3 mb-2 mt-4">Bildergalerie</h3>

		<ImageCarousel images={bilder} size={innerWidth > 640 ? 'w-[768px]' : 'w-fit'} />
	{/if}
</div>
