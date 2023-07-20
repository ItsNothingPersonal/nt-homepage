<script lang="ts">
	import { ScreenSize } from '$lib/types/sceenSize';
	import { SektenName } from '$lib/types/sektenName';
	import { A, Button, ButtonGroup, Heading, Img, P } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import type { PageData } from './$types';

	export let data: PageData;

	let width: number;
	let sectFilter = writable('.*');
	let beschreibungCompiled = '';

	$: clans = data.clans.filter((e) => e.sekte?.match($sectFilter));

	function swapSectFilter(filter: SektenName) {
		if ($sectFilter.match(filter)) {
			sectFilter.set('.*');
		} else {
			sectFilter.set(filter);
		}
	}

	onMount(() => {
		beschreibungCompiled = data.beschreibung?.code ?? '';
	});
</script>

<svelte:window bind:innerWidth={width} />

<Heading tag="h1" class="mb-4">Die 13 großen Vampir-Clans</Heading>

<P class="mb-4 border-2 border-gray-600 shadow-md p-2 text-justify">
	{@html beschreibungCompiled}
</P>

<div class="flex justify-center mb-4">
	<ButtonGroup>
		<Button on:click={() => swapSectFilter(SektenName.Camarilla)}>{SektenName.Camarilla}</Button>
		<Button on:click={() => swapSectFilter(SektenName.Sabbat)}>{SektenName.Sabbat}</Button>
		<Button on:click={() => swapSectFilter(SektenName.Allianz)}>{SektenName.Allianz}</Button>
		<Button on:click={() => swapSectFilter(SektenName.Unabhängig)}>{SektenName.Unabhängig}</Button>
	</ButtonGroup>
</div>

<div class={`grid grid-cols-4 md:grid-cols-5 grid-rows-7 md:grid-rows-1 gap-4`}>
	{#each clans as clan}
		<A href={`/13-clans/${clan.id}`} class="flex flex-col">
			<Img
				src={`${import.meta.env.VITE_DIRECTUS_URL}/assets/${clan.logo}?fit=cover&width=${
					width < ScreenSize.MD ? '80' : '192'
				}&height=${width < ScreenSize.MD ? '80' : '192'}&quality=80&format=auto`}
				alt={`logo of clan ${clan.name}`}
				class="object-cover w-20 h-20 md:w-48 md:h-48 rounded-lg shadow-lg dark:shadow-gray-800"
			/>
			{#if width > ScreenSize.MD}
				<P weight="bold" size="lg">{clan.name}</P>
			{:else}
				<P weight="bold" size="base">{clan.name}</P>
			{/if}
		</A>
	{/each}
</div>
