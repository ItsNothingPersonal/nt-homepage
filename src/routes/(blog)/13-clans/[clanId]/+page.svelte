<script lang="ts">
	import { PUBLIC_DIRECTUS_URL } from '$env/static/public';
	import ImageCarousel from '$lib/components/ImageCarousel/ImageCarousel.svelte';
	import LoadingMessage from '$lib/components/LoadingMessage/LoadingMessage.svelte';
	import { isNullOrUndefined } from '$lib/util.js';

	let { data } = $props();

	let innerWidth: number = $state(0);
</script>

<svelte:window bind:innerWidth />

{#await data.clan}
	<LoadingMessage>Lade Clan</LoadingMessage>
{:then clan}
	<h1 class="h1 mb-2 text-center font-bold">{clan.name}</h1>
	<h2 class="h2 mb-4 text-center">{clan?.nickname}</h2>
{/await}

<div class="container">
	{#await data.bilder}
		<LoadingMessage>Lade Clan-Bilder</LoadingMessage>
	{:then bilder}
		{#if !isNullOrUndefined(bilder) && bilder.length > 0}
			<ImageCarousel
				size={innerWidth > 640 ? 'w-96' : 'w-fit'}
				images={bilder.map((e) => {
					return `${PUBLIC_DIRECTUS_URL}/assets/${e.directus_files_id}?fit=cover&width=384&height=384&format=auto`;
				})}
				floatLeft={true}
			/>
		{/if}
	{/await}

	{#await data.beschreibung}
		<LoadingMessage>Lade Clan-Beschreibung</LoadingMessage>
	{:then beschreibung}
		<p class="[&>p]::text-2xl [&>p]:mb-2 [&>p]:text-justify [&>p]:first-letter:text-2xl">
			{@html beschreibung?.code}
			{#if beschreibung?.code !== '\n\n'}
				<a
					href="https://whitewolf.fandom.com/de/wiki/Vampire:_Die_Maskerade_1999"
					class="text-sm underline decoration-dotted underline-offset-4"
				>
					Quelle: Vampire - Die Maskerade (1999), 3. Edition, Feder & Schwert
				</a>
			{/if}
		</p>
	{/await}
</div>
