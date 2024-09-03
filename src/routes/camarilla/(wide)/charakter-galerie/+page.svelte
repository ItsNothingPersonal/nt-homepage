<script lang="ts">
	import ButtonGroup from '$lib/components/ButtonGroup/ButtonGroup.svelte';
	import CharacterGallery from '$lib/components/CharacterGallery/CharacterGallery.svelte';
	import LoadingMessage from '$lib/components/LoadingMessage/LoadingMessage.svelte';
	import { ScreenSize } from '$lib/types/sceenSize.js';
	import { SektenName } from '$lib/types/sektenName';
	import { writable, type Writable } from 'svelte/store';
	import {
		getClanSubMenu,
		getGefilterteCharaktere,
		getLeader,
		getOfficers,
		swapOffizierFilter,
		swapSectFilter
	} from '../charakterUtil.js';

	export let data;

	const sectFilter = writable('.*');
	const offizierFilter = writable('');
	const clanFilter: Writable<string | null> = writable('.*');

	let width = 0;
</script>

<svelte:window bind:innerWidth={width} />

<h1 class="h1 mb-4 text-center font-bold">Charakter-Galerie</h1>
{#await data.charaktere}
	<LoadingMessage>Lade Charakter-Galerie</LoadingMessage>
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
			}
		]}
		smallSwitch={width < ScreenSize.SM}
		rounded={'!rounded-none'}
	/>

	<CharacterGallery
		leaders={getLeader(charaktere, $sectFilter)}
		officers={getOfficers(charaktere, $sectFilter)}
		noFilterActive={$clanFilter === '.*' && $offizierFilter === ''}
		charaktere={getGefilterteCharaktere(charaktere, $sectFilter, $clanFilter, $offizierFilter)}
		setting="Camarilla"
	/>
{/await}
