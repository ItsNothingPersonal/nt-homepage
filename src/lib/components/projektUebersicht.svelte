<script lang="ts">
	import type { ImageInformation } from '$lib/types/imageInformation';
	import { isNullOrUndefined } from '$lib/util';
	import { A, Carousel, Heading, P } from 'flowbite-svelte';

	export let titel: string;
	export let beschreibung: string;
	export let spieltermine: string;
	export let email: string;
	export let images: ImageInformation[] | undefined = undefined;
	export let showThumbs = false;
	export let showCaptions = false;
	export let showIndicators = false;
</script>

<Heading tag="h1" class="mb-4">{titel}</Heading>

<div class="flex flex-col-reverse md:inline-block md:container">
	{#if !isNullOrUndefined(images) && images.length > 0}
		<div class={`float-left max-w-sm md:mr-2 mb-2`}>
			<Carousel {images} {showThumbs} {showCaptions} {showIndicators} loop duration={3000} />
		</div>
	{/if}

	<div class="flex flex-col">
		<P uppercase class="[&>p]:first-letter:text-2xl [&>p]::text-2xl [&>p]:text-justify [&>p]:mb-2">
			{@html beschreibung}
		</P>

		<Heading tag="h2">Spieltermine</Heading>
		<P uppercase class="[&>p]:first-letter:text-2xl [&>p]::text-2xl [&>p]:text-justify [&>p]:mb-2">
			{@html spieltermine}
		</P>

		<Heading tag="h2">Kontakt</Heading>
		<div class="grid grid-cols-min-content-first grid-rows-2 gap-x-2">
			<P>E-Mail</P>
			<A href={`mailto:${email}`}>{email}</A>
		</div>
	</div>
</div>
