<script lang="ts">
	import { Heading, Img, P } from 'flowbite-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="mx-auto px-4 text-center items-center flex flex-col">
	<Heading tag="h1" class="mb-4">Die 13 großen Vampir-Clans</Heading>

	<P class="mb-4 border-2 border-gray-600 shadow-md p-2 max-w-screen-xl">
		{@html data.beschreibung}
	</P>

	<div class="grid grid-cols-2 md:grid-cols-7 grid-rows-7 md:grid-rows-2 gap-4 max-w-fit">
		{#each data.clans as clan}
			<div class="flex flex-col items-center max-h-80 max-w-80">
				<Img
					src={`${import.meta.env.VITE_DIRECTUS_URL}/assets/${clan.logo}?fit=inside&width=300&height=300&format=webp`}
					alt={`logo of clan ${clan.name}`}
					class="object-cover w-full h-full "
				/>
				<P weight="bold" size="lg">{clan.name}</P>
			</div>
		{/each}
	</div>
</div>
