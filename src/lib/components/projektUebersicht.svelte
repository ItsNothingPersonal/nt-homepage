<script lang="ts">
	import type { ImageInformation } from '$lib/types/imageInformation';
	import { isNullOrUndefined } from '$lib/util';
	import { A, Heading, P } from 'flowbite-svelte';
	import GoogleCalendar from './googleCalendar.svelte';
	import ImageCarousel from './imageCarousel.svelte';

	export let titel: string;
	export let beschreibung: string;
	export let spieltermine: string;
	export let email: string;
	export let images: ImageInformation[] | undefined = undefined;
	export let googleCalendarLink: string | undefined | null = undefined;

	let innerWidth: number;
</script>

<svelte:window bind:innerWidth />
<Heading tag="h1" class="mb-4">{titel}</Heading>

<div class="flex flex-col-reverse md:inline-block md:container">
	{#if !isNullOrUndefined(images) && images.length > 0}
		<ImageCarousel {images} style="small" floatLeft={true} />
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
		<div class="grid grid-cols-min-content-first grid-rows-1 gap-x-2 mb-4">
			<P whitespace="pre">E-Mail</P>
			<A href={`mailto:${email}`}>{email}</A>
		</div>
	</div>
</div>

{#if googleCalendarLink}
	<GoogleCalendar src={googleCalendarLink} size={innerWidth >= 768 ? 'normal' : 'small'} />
{/if}
