<script lang="ts">
	import { A, Carousel, Heading, P } from 'flowbite-svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let showThumbs = false;
	let showCaptions = false;
	let showIndicators = false;
	let images = data.bilder?.map((e) => {
		return {
			id: e.camarilla_uebersicht_id,
			imgurl: `${import.meta.env.VITE_DIRECTUS_URL}/assets/${e.directus_files_id}?format=webp`
		};
	});
</script>

<Heading tag="h1" class="mb-4">Vampire Live - Camarilla</Heading>

<div class="flex flex-col-reverse md:grid md:grid-rows-1 md:grid-cols-4 gap-4">
	<div class="mt-2 row-start-1 md:row-start-1">
		<Carousel
			images={images ?? []}
			{showThumbs}
			{showCaptions}
			{showIndicators}
			loop
			duration={3000}
		/>
	</div>
	<div class="text-left md:col-span-3">
		<P uppercase class="[&>p]:first-letter:text-2xl [&>p]::text-2xl [&>p]:text-justify [&>p]:mb-2">
			{@html data.beschreibung?.code}
		</P>

		<Heading tag="h2">Spieltermine</Heading>
		<P uppercase class="[&>p]:first-letter:text-2xl [&>p]::text-2xl [&>p]:text-justify [&>p]:mb-2">
			{@html data.spieltermine?.code}
		</P>

		<Heading tag="h2">Kontakt</Heading>
		<div class="grid grid-cols-min-content-first grid-rows-2 gap-x-2">
			<P>E-Mail</P>
			<A href={`mailto:${data.email}`}>{data.email}</A>
			<P>Discord</P>
			<A href={`${data.discord}`}>Nächtliches Theater Discord</A>
		</div>
	</div>
</div>
