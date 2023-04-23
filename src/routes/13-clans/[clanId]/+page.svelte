<script lang="ts">
	import { isNullOrUndefined } from '$lib/util';
	import { A, Carousel, Heading, P } from 'flowbite-svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let showThumbs = false;
	let showCaptions = false;
	let showIndicators = false;

	let images = data.bilder?.map((e) => {
		return {
			id: e.clans_id,
			imgurl: `${import.meta.env.VITE_DIRECTUS_URL}/assets/${e.directus_files_id}?format=webp`
		};
	});
</script>

<div class="text-center items-center flex flex-col max-w-screen-2xl">
	<Heading tag="h1" class="mb-2">{data.clan?.name}</Heading>
	<Heading tag="h2" class="mb-4">{data.clan?.nickname}</Heading>

	<div class="flex flex-col-reverse md:grid md:grid-rows-1 md:grid-cols-4 gap-4">
		{#if !isNullOrUndefined(images) && images.length > 0}
			<div
				class={`mt-2 ${
					isNullOrUndefined(data.clan?.beschreibung) ? 'row-start-2' : 'row-start-1'
				} md:row-start-1`}
			>
				<Carousel {images} {showThumbs} {showCaptions} {showIndicators} loop duration={3000} />
			</div>
		{/if}
		{#if !isNullOrUndefined(data.clan) && !isNullOrUndefined(data.clan.beschreibung) && data.clan.beschreibung.length > 1}
			<P
				uppercase
				class={`[&>p]:first-letter:text-2xl [&>p]::text-2xl [&>p]:text-justify [&>p]:mb-2 ${
					!isNullOrUndefined(images) && images.length > 0 ? 'md:col-span-3' : 'md:col-span-4'
				}`}
			>
				{@html data.beschreibung?.code}
				<A href="https://whitewolf.fandom.com/de/wiki/Vampire:_Die_Maskerade_1999" aClass="text-sm">
					Quelle: Vampire - Die Maskerade (1999), 3. Edition, Feder & Schwert
				</A>
			</P>
		{/if}
	</div>
</div>
