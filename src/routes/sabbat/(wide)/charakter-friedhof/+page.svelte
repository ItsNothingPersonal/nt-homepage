<script lang="ts">
	import ButtonGroup from '$lib/components/ButtonGroup/ButtonGroup.svelte';
	import CharacterGallery from '$lib/components/CharacterGallery/CharacterGallery.svelte';
	import LoadingMessage from '$lib/components/LoadingMessage/LoadingMessage.svelte';
	import type { SubMenuConfig } from '$lib/types/subMenuConfig';
	import { sabbatCharakter } from '$lib/types/zod/sabbatCharakter';
	import { type SabbatPack } from '$lib/types/zod/sabbatPacks';
	import { onMount } from 'svelte';
	import { get, writable, type Writable } from 'svelte/store';
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
	const jahrFilter = writable('.*');

	let width = $state(0);

	let jahrSubMenu: SubMenuConfig[] = $state([]);
	const uniqueYearsSet = new Set<number>();

	async function getJahrSubMenu(jahrFilter: Writable<string>) {
		const parsed = sabbatCharakter.array().parse(await data.charaktere);
		parsed.map((e) => {
			if (e.abgelegt_am) {
				uniqueYearsSet.add(e.abgelegt_am.getFullYear());
			}
		});

		const result = Array.from(uniqueYearsSet).map((e) => {
			return {
				label: e.toString(),
				onClick: () => swapJahrFilter(jahrFilter, e.toString())
			};
		});

		jahrSubMenu = result;
	}

	function swapJahrFilter(jahrFilter: Writable<string>, filter: string) {
		if (get(jahrFilter).match(filter)) {
			jahrFilter.set('.*');
		} else {
			jahrFilter.set(filter);
		}
	}

	onMount(async () => {
		await getJahrSubMenu(jahrFilter);
	});
</script>

<svelte:window bind:innerWidth={width} />

<h1 class="h1 mb-4 text-center font-bold">Charakter-Friedhof</h1>
{#await data.charaktere}
	<LoadingMessage>Lade Charakter-Galerie</LoadingMessage>
{:then charaktere}
	{#await data.packs}
		<LoadingMessage>Lade Charakter-Friedhof-Filter</LoadingMessage>
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
				},
				{
					label: 'Jahr',
					indicator: $jahrFilter !== '.*',
					subMenu: jahrSubMenu,
					store: jahrFilter
				}
			]}
			rounded="rounded-none!"
		/>
	{/await}

	<CharacterGallery
		leaders={getLeader(charaktere, $jahrFilter)}
		officers={getOfficers(charaktere, $jahrFilter)}
		noFilterActive={$packFilter === '.*' &&
			$einzelgaengerFilter === false &&
			$offizierFilter === ''}
		charaktere={getGefilterteCharaktere(
			charaktere,
			$einzelgaengerFilter,
			$packFilter,
			$offizierFilter,
			$jahrFilter
		)}
		setting="Sabbat"
		selektiertesPack={getPackInformation(charaktere, $selektiertesPack, $jahrFilter)}
	/>
{/await}
