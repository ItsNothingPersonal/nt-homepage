<script lang="ts">
	import { A, Carousel, Heading, P } from 'flowbite-svelte';
	import { getImageUrl } from 'services/directus';
	import type { PageData } from './$types';

	export let data: PageData;

	let showThumbs = false;
	let showCaptions = false;
	let showIndicators = false;
	let images = data.bilder?.map((e) => {
		return {
			id: e.sabbat_uebersicht_id,
			imgurl: getImageUrl(e.directus_files_id)
		};
	});
</script>

<Heading tag="h1" class="mb-4">Vampire Live - Sabbat</Heading>

<div class="flex flex-col-reverse md:grid md:grid-rows-1 md:grid-cols-3 gap-4">
	<Carousel
		images={images ?? []}
		{showThumbs}
		{showCaptions}
		{showIndicators}
		loop
		duration={3000}
	/>
	<div class="text-left col-span-2">
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
		</div>
	</div>
</div>
