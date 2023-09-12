<script lang="ts">
	import Indicator from '$lib/components/indicator.svelte';
	import { ScreenSize } from '$lib/types/sceenSize';
	import { SektenName } from '$lib/types/sektenName';
	import { A, Button, ButtonGroup, Heading, Img, P } from 'flowbite-svelte';
	import { writable } from 'svelte/store';
	import type { PageData } from './$types';

	export let data: PageData;

	let width: number;
	let sectFilter = writable('.*');

	$: clans = data.clans.filter((e) => e.sekte?.match($sectFilter));

	function swapSectFilter(filter: SektenName) {
		if ($sectFilter.match(filter)) {
			sectFilter.set('.*');
		} else {
			sectFilter.set(filter);
		}
	}
</script>

<svelte:window bind:innerWidth={width} />

<Heading tag="h1" class="mb-4">Die 13 großen Vampir-Clans</Heading>

<P class="mb-4 border-2 border-gray-600 p-2 text-justify shadow-md">
	{@html data.beschreibung?.code}
</P>

<div class="mb-4 flex justify-center">
	<ButtonGroup divClass="inline-flex rounded-lg shadow-sm bg-light-50 dark:bg-dark-700">
		<Button on:click={() => swapSectFilter(SektenName.Camarilla)} class="relative">
			{SektenName.Camarilla}
			{#if $sectFilter === SektenName.Camarilla}
				<Indicator />
			{/if}
		</Button>
		<Button on:click={() => swapSectFilter(SektenName.Sabbat)} class="relative">
			{SektenName.Sabbat}
			{#if $sectFilter === SektenName.Sabbat}
				<Indicator />
			{/if}
		</Button>
		<Button on:click={() => swapSectFilter(SektenName.Allianz)} class="relative">
			{SektenName.Allianz}
			{#if $sectFilter === SektenName.Allianz}
				<Indicator />
			{/if}
		</Button>
		<Button on:click={() => swapSectFilter(SektenName.Unabhängig)} class="relative">
			{SektenName.Unabhängig}
			{#if $sectFilter === SektenName.Unabhängig}
				<Indicator />
			{/if}
		</Button>
	</ButtonGroup>
</div>

<div class={`grid-rows-7 grid grid-cols-4 gap-4 md:grid-cols-5 md:grid-rows-1`}>
	{#each clans as clan}
		<A href={`/13-clans/${clan.id}`} class="flex flex-col">
			<Img
				src={`${import.meta.env.VITE_DIRECTUS_URL}/assets/${clan.logo}?fit=cover&width=${
					width < ScreenSize.MD ? '80' : '192'
				}&height=${width < ScreenSize.MD ? '80' : '192'}&quality=80&format=auto`}
				alt={`logo of clan ${clan.name}`}
				class="h-20 w-20 rounded-lg object-cover shadow-lg dark:shadow-gray-800 md:h-48 md:w-48"
			/>
			{#if width > ScreenSize.MD}
				<P weight="bold" size="lg">{clan.name}</P>
			{:else}
				<P weight="bold" size="base">{clan.name}</P>
			{/if}
		</A>
	{/each}
</div>
