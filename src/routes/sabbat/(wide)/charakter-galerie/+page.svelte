<script lang="ts">
	import ButtonGroup from '$lib/components/ButtonGroup/ButtonGroup.svelte';
	import CharacterGallery from '$lib/components/CharacterGallery/CharacterGallery.svelte';
	import LoadingMessage from '$lib/components/LoadingMessage/LoadingMessage.svelte';
	import { ScreenSize } from '$lib/types/sceenSize';
	import { type SabbatPack } from '$lib/types/zod/sabbatPacks';
	import { writable, type Writable } from 'svelte/store';
	import {
		getGefilterteCharaktere,
		getLeader,
		getOfficers,
		getPackInformation,
		getPackSubMenu,
		swapFilterEinzelgaenger,
		swapOffizierFilter
	} from '../charakterUtil';

	let { data } = $props();

	const packFilter = writable('.*');
	const offizierFilter = writable('');
	const einzelgaengerFilter: Writable<boolean> = writable(false);
	const selektiertesPack = writable<SabbatPack | undefined>();

	let width = $state(0);
</script>

<svelte:window bind:innerWidth={width} />

<h1 class="h1 mb-4 text-center font-bold">Charakter-Galerie</h1>
{#await data.charaktere}
	<LoadingMessage>Lade Charakter-Galerie</LoadingMessage>
{:then charaktere}
	{#await data.packs}
		<LoadingMessage>Lade Charakter-Galerie-Filter</LoadingMessage>
	{:then packs}
		<ButtonGroup
			config={[
				{
					label: 'Einzelgänger',
					onClick: () => swapFilterEinzelgaenger(packFilter, selektiertesPack, einzelgaengerFilter),
					indicator: $einzelgaengerFilter === true,
					store: einzelgaengerFilter
				},
				{
					label: 'Packs',
					indicator: $packFilter !== '.*',
					subMenu: getPackSubMenu(
						packFilter,
						selektiertesPack,
						einzelgaengerFilter,
						packs,
						charaktere
					),
					store: packFilter
				},
				{
					label: 'Offiziere',
					onClick: () => swapOffizierFilter(offizierFilter, 'true'),
					indicator: $offizierFilter.length > 0,
					store: offizierFilter
				}
			]}
			smallSwitch={width < ScreenSize.SM}
			rounded={'rounded-none!'}
		/>
	{/await}

	<CharacterGallery
		leaders={getLeader(charaktere)}
		officers={getOfficers(charaktere)}
		noFilterActive={$packFilter === '.*' &&
			$einzelgaengerFilter === false &&
			$offizierFilter === ''}
		charaktere={getGefilterteCharaktere(
			charaktere,
			$einzelgaengerFilter,
			$packFilter,
			$offizierFilter
		)}
		setting="Sabbat"
		selektiertesPack={getPackInformation(charaktere, $selektiertesPack)}
	/>
{/await}
