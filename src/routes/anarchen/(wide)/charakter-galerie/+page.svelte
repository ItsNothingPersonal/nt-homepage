<script lang="ts">
	import ButtonGroup from '$lib/components/ButtonGroup/ButtonGroup.svelte';
	import CharacterGallery from '$lib/components/CharacterGallery/CharacterGallery.svelte';
	import LoadingMessage from '$lib/components/LoadingMessage/LoadingMessage.svelte';
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

	let { data } = $props();

	const sectFilter = writable('.*');
	const offizierFilter = writable('');
	const clanFilter: Writable<string | null> = writable('.*');

	let width = $state(0);
</script>

<svelte:window bind:innerWidth={width} />

<h1 class="h1 mb-4 text-center font-bold">Charakter-Galerie</h1>
{#await data.charaktere}
	<LoadingMessage>Lade Charakter-Galerie</LoadingMessage>
{:then charaktere}
	<ButtonGroup
		config={[
			{
				label: SektenName.Anarchen,
				onClick: () => swapSectFilter(sectFilter, SektenName.Anarchen),
				indicator: $sectFilter === SektenName.Anarchen,
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
		rounded="rounded-none!"
	/>

	<CharacterGallery
		leaders={getLeader(charaktere, $sectFilter)}
		officers={getOfficers(charaktere, $sectFilter)}
		noFilterActive={$clanFilter === '.*' && $offizierFilter === ''}
		charaktere={getGefilterteCharaktere(charaktere, $sectFilter, $clanFilter, $offizierFilter)}
		setting="Anarchen"
	/>
{/await}
