<script lang="ts">
	import ButtonGroup from '$lib/components/ButtonGroup/ButtonGroup.svelte';
	import LoadingMessage from '$lib/components/LoadingMessage/LoadingMessage.svelte';
	import { ScreenSize } from '$lib/types/sceenSize';
	import { SektenName } from '$lib/types/sektenName';
	import { writable } from 'svelte/store';

	export let data;

	let width: number;
	let sectFilter = writable('.*');

	function swapSectFilter(filter: string) {
		if ($sectFilter.match(filter)) {
			sectFilter.set('.*');
		} else {
			sectFilter.set(filter);
		}
	}
</script>

<svelte:window bind:innerWidth={width} />

<h1 class="h1 mb-4 text-center font-bold">Die 13 großen Vampir-Clans</h1>

{#await data.beschreibung}
	<LoadingMessage>Lade Setting Beschreibung</LoadingMessage>
{:then beschreibung}
	<p class="card mb-4 rounded-sm p-4 text-justify shadow-md">
		{@html beschreibung?.code}
	</p>
{/await}

<ButtonGroup
	config={[
		{
			label: SektenName.Camarilla,
			indicator: $sectFilter === SektenName.Camarilla
		},
		{
			label: SektenName.Sabbat,
			indicator: $sectFilter === SektenName.Sabbat
		},
		{
			label: SektenName.Allianz,
			indicator: $sectFilter === SektenName.Allianz
		},
		{
			label: SektenName.Unabhängig,
			indicator: $sectFilter === SektenName.Unabhängig
		}
	]}
	defaultOnClick={swapSectFilter}
	smallSwitch={width < ScreenSize.SM}
/>

<div class={`grid-rows-7 grid grid-cols-4 gap-4 text-center md:grid-cols-5  md:grid-rows-1`}>
	{#await data.clans}
		<LoadingMessage>Lade Clans</LoadingMessage>
	{:then clans}
		{#each clans.filter((e) => e.sekte?.match($sectFilter)) as clan}
			<a href={`/13-clans/${clan.id}`} class="flex flex-col">
				<img
					src={`${import.meta.env.VITE_DIRECTUS_URL}/assets/${clan.logo}?fit=cover&width=${
						width < ScreenSize.MD ? '80' : '192'
					}&height=${width < ScreenSize.MD ? '80' : '192'}&quality=80&format=auto`}
					alt={`logo of clan ${clan.name}`}
					class="h-20 w-20 rounded-lg object-cover shadow-lg dark:shadow-gray-800 md:h-48 md:w-48"
				/>
				{#if width > ScreenSize.MD}
					<p
						class="anchor line text-lg font-bold no-underline decoration-dotted underline-offset-4 hover:underline"
					>
						{clan.name}
					</p>
				{:else}
					<p class="anchor text-sm no-underline">{clan.name}</p>
				{/if}
			</a>
		{/each}
	{/await}
</div>
