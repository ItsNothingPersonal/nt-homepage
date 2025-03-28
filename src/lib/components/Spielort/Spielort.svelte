<script lang="ts">
	import type { CamarillaSpielortFiles } from '$lib/types/zod/camarillaSpielortFiles';
	import type { SabbatSpielortFiles } from '$lib/types/zod/sabbatSpielortFiles';
	import type { Spielort } from '$lib/types/zod/spielort';
	import type { Wh40kSpielortFiles } from '$lib/types/zod/wh40kSpielortFiles';
	import { getImageUrl, isNullOrUndefined } from '$lib/util';
	import ImageCarousel from '../ImageCarousel/ImageCarousel.svelte';
	import LoadingMessage from '../LoadingMessage/LoadingMessage.svelte';

	interface Props {
		bilder: Promise<Wh40kSpielortFiles[] | SabbatSpielortFiles[] | CamarillaSpielortFiles[]>;
		spielort: Promise<Spielort>;
	}

	let { bilder, spielort }: Props = $props();

	let innerWidth: number = $state(0);
</script>

<svelte:window bind:innerWidth />

<h1 class="h1 mb-4 text-center font-bold">Spielort</h1>

<div class="flex flex-col items-center">
	{#await spielort}
		<LoadingMessage>Lade Spielort-Informationen</LoadingMessage>
	{:then spielort}
		<h2 class="h2 mb-2">Anschrift</h2>
		<div class="card dark:bg-surface-800 preset-outlined-primary-500 mb-4 rounded-lg p-4">
			<div class="flex flex-col items-center justify-center">
				<p>{spielort.spielort_name}</p>
				<p>{spielort.spielort_strasse}</p>
				<p>{spielort.spielort_plz} {spielort.spielort_ort}</p>
			</div>
		</div>

		<h3 class="h3 mb-2">Google Maps</h3>
		<iframe
			title="Spielort Karte"
			src={spielort.spielort_karte}
			style={`border:0; width: 100%;`}
			allowfullscreen={true}
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
			height="300px"
		></iframe>
	{/await}

	{#await bilder}
		<LoadingMessage>Lade Spielort-Bilder</LoadingMessage>
	{:then bilder}
		<h3 class="h3 mt-4 mb-2">Bildergalerie</h3>

		<ImageCarousel
			images={bilder
				?.filter((e) => !isNullOrUndefined(e.directus_files_id))
				.map((e) => getImageUrl(e.directus_files_id, 768, 512))}
			size={innerWidth > 640 ? 'w-[768px]' : 'w-fit'}
		/>
	{/await}
</div>
