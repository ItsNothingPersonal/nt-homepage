<script lang="ts">
	import type { AnarchenUebersichtFiles } from '$lib/types/zod/anarchenUebersichtFiles';
	import type { CamarillaUebersichtFiles } from '$lib/types/zod/camarillaUebersichtFiles';
	import type { ProjektUebersicht } from '$lib/types/zod/projektUebersicht';
	import type { SabbatUebersichtFiles } from '$lib/types/zod/sabbatUebersichtFiles';
	import { getImageUrl, isNullOrUndefined } from '$lib/util';
	import GoogleCalendar from '../Google/GoogleCalendar.svelte';
	import ImageCarousel from '../ImageCarousel/ImageCarousel.svelte';
	import LoadingMessage from '../LoadingMessage/LoadingMessage.svelte';
	import SocialButton from '../Socials/socialButton.svelte';

	interface Props {
		titel: string;
		projektUbersicht: Promise<ProjektUebersicht>;
		beschreibung: string;
		spieltermine: string;
		images?:
			| Promise<AnarchenUebersichtFiles[] | SabbatUebersichtFiles[] | CamarillaUebersichtFiles[]>
			| undefined;
	}

	let { titel, projektUbersicht, beschreibung, spieltermine, images = undefined }: Props = $props();

	let innerWidth: number = $state(0);
</script>

<svelte:window bind:innerWidth />
<h1 class="h1 mb-4 text-center font-bold">{titel}</h1>

{#await projektUbersicht}
	<LoadingMessage>Lade Projektinformationen</LoadingMessage>
{:then projekt}
	<div class="flex flex-col-reverse md:container md:inline-block">
		{#await images}
			<LoadingMessage>Lade Bilder</LoadingMessage>
		{:then images}
			{#if !isNullOrUndefined(images) && images.length > 0}
				<ImageCarousel
					size={innerWidth > 640 ? 'w-96' : 'w-fit'}
					images={images
						?.filter((e) => !isNullOrUndefined(e.directus_files_id))
						.map((e) => getImageUrl(e.directus_files_id, 384))}
					floatLeft={true}
				/>
			{/if}
		{/await}

		<div class="flex flex-col">
			<p class="[&>p]::text-2xl [&>p]:mb-2 [&>p]:text-justify [&>p]:first-letter:text-2xl">
				{#await beschreibung}
					<LoadingMessage>Formatiere Projektbeschreibung</LoadingMessage>
				{:then beschreibung}
					{@html beschreibung}
				{/await}
			</p>

			<h2 class="h2 mb-2 text-center">Spieltermine</h2>
			<p class="[&>p]::text-2xl [&>p]:mb-2 [&>p]:text-justify [&>p]:first-letter:text-2xl">
				{#await spieltermine}
					<LoadingMessage>Formatiere Spieltermine</LoadingMessage>
				{:then spieltermine}
					{@html spieltermine}
				{/await}
			</p>

			<h2 class="h2 mb-2 text-center">Kontakt</h2>
			<div class="mb-4 flex justify-center">
				<SocialButton
					icon="email"
					href={`mailto:${projekt.email}`}
					text="Kontakt zur Projektleitung"
				/>
			</div>
		</div>
	</div>

	{#if projekt.google_calendar_link}
		<GoogleCalendar
			src={projekt.google_calendar_link}
			size={innerWidth >= 640 ? 'normal' : 'small'}
		/>
	{/if}
{/await}
