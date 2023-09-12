<script lang="ts">
	import type { ImageInformation } from '$lib/types/imageInformation';
	import { isNullOrUndefined } from '$lib/util';
	import { Heading, P } from 'flowbite-svelte';
	import GoogleCalendar from './googleCalendar.svelte';
	import ImageCarousel from './imageCarousel.svelte';
	import SocialButton from './socialButton.svelte';

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

<div class="flex flex-col-reverse md:container md:inline-block">
	{#if !isNullOrUndefined(images) && images.length > 0}
		<ImageCarousel {images} style="small" floatLeft={true} />
	{/if}

	<div class="flex flex-col">
		<P uppercase class="[&>p]::text-2xl [&>p]:mb-2 [&>p]:text-justify [&>p]:first-letter:text-2xl">
			{@html beschreibung}
		</P>

		<Heading tag="h2">Spieltermine</Heading>
		<P uppercase class="[&>p]::text-2xl [&>p]:mb-2 [&>p]:text-justify [&>p]:first-letter:text-2xl">
			{@html spieltermine}
		</P>

		<Heading tag="h2">Kontakt</Heading>
		<div class="mb-4">
			<SocialButton icon="email" href={`mailto:${email}`} text="Kontakt zur Spielleitung" />
		</div>
	</div>
</div>

{#if googleCalendarLink}
	<GoogleCalendar src={googleCalendarLink} size={innerWidth >= 768 ? 'normal' : 'small'} />
{/if}
