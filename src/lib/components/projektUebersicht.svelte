<script lang="ts">
	import { isNullOrUndefined } from '$lib/util';
	import GoogleCalendar from './googleCalendar.svelte';
	import ImageCarousel from './imageCarousel.svelte';
	import SocialButton from './socialButton.svelte';

	export let titel: string;
	export let beschreibung: string;
	export let spieltermine: string;
	export let email: string;
	export let images: string[] | undefined = undefined;
	export let googleCalendarLink: string | undefined | null = undefined;

	let innerWidth: number;
</script>

<svelte:window bind:innerWidth />
<h1 class="h1 mb-4 text-center font-bold">{titel}</h1>

<div class="flex flex-col-reverse md:container md:inline-block">
	{#if !isNullOrUndefined(images) && images.length > 0}
		<ImageCarousel size={innerWidth > 640 ? 'w-96' : 'w-fit'} {images} floatLeft={true} />
	{/if}

	<div class="flex flex-col">
		<p class="[&>p]::text-2xl [&>p]:mb-2 [&>p]:text-justify [&>p]:first-letter:text-2xl">
			{@html beschreibung}
		</p>

		<h2 class="h2 mb-2 text-center">Spieltermine</h2>
		<p class="[&>p]::text-2xl [&>p]:mb-2 [&>p]:text-justify [&>p]:first-letter:text-2xl">
			{@html spieltermine}
		</p>

		<h2 class="h2 mb-2 text-center">Kontakt</h2>
		<div class="mb-4 flex justify-center">
			<SocialButton icon="email" href={`mailto:${email}`} text="Kontakt zur Projektleitung" />
		</div>
	</div>
</div>

{#if googleCalendarLink}
	<GoogleCalendar src={googleCalendarLink} size={innerWidth >= 640 ? 'normal' : 'small'} />
{/if}
