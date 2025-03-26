<script lang="ts">
	import ButtonGroup from '$lib/components/ButtonGroup/ButtonGroup.svelte';
	import CharacterGallery from '$lib/components/CharacterGallery/CharacterGallery.svelte';
	import LoadingMessage from '$lib/components/LoadingMessage/LoadingMessage.svelte';
	import { ScreenSize } from '$lib/types/sceenSize';
	import { SektenName } from '$lib/types/sektenName';
	import type { SubMenuConfig } from '$lib/types/subMenuConfig';
	import { camarillaCharakter } from '$lib/types/zod/camarillaCharaktere';
	import { onMount } from 'svelte';
	import { get, writable, type Writable } from 'svelte/store';
	import {
		getClanSubMenu,
		getGefilterteCharaktere,
		getLeader,
		getOfficers,
		swapOffizierFilter,
		swapSectFilter
	} from '../charakterUtil';

	let { data } = $props();

	const sectFilter = writable('.*');
	const offizierFilter = writable('');
	const clanFilter = writable('.*');
	const jahrFilter = writable('.*');

	let width = $state(0);

	let jahrSubMenu: SubMenuConfig[] = $state([]);
	const uniqueYearsSet = new Set<number>();

	async function getJahrSubMenu(jahrFilter: Writable<string>) {
		const parsed = camarillaCharakter.array().parse(await data.charaktere);
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
	<LoadingMessage>Lade Charakter-Friedhof</LoadingMessage>
{:then charaktere}
	<ButtonGroup
		config={[
			{
				label: SektenName.Camarilla,
				onClick: () => swapSectFilter(sectFilter, SektenName.Camarilla),
				indicator: $sectFilter === SektenName.Camarilla,
				store: sectFilter
			},
			{
				label: SektenName.Unabhängig,
				onClick: () => swapSectFilter(sectFilter, SektenName.Unabhängig),
				indicator: $sectFilter === SektenName.Unabhängig,
				store: sectFilter
			},
			{
				label: 'Offiziere',
				onClick: () => swapOffizierFilter(offizierFilter, 'true'),
				indicator: $offizierFilter.length > 0,
				store: offizierFilter
			},
			{
				label: 'Clans',
				indicator: $clanFilter !== '.*',
				subMenu: getClanSubMenu(clanFilter, charaktere),
				store: clanFilter
			},
			{
				label: 'Jahr',
				indicator: $jahrFilter !== '.*',
				subMenu: jahrSubMenu,
				store: jahrFilter
			}
		]}
		smallSwitch={width < ScreenSize.SM}
		rounded={'rounded-none!'}
	/>

	<CharacterGallery
		leaders={getLeader(charaktere, $sectFilter, $jahrFilter)}
		officers={getOfficers(charaktere, $sectFilter, $jahrFilter)}
		noFilterActive={$clanFilter === '.*' && $offizierFilter === ''}
		charaktere={getGefilterteCharaktere(
			charaktere,
			$sectFilter,
			$clanFilter,
			$offizierFilter,
			$jahrFilter
		)}
		setting="Camarilla"
	/>
{/await}
