<script lang="ts">
	import ButtonGroup from '$lib/components/ButtonGroup/ButtonGroup.svelte';
	import CharacterGallery from '$lib/components/characterGallery.svelte';
	import { CamarillaAemterName } from '$lib/types/camarillaAemterName';
	import { ClanName } from '$lib/types/clanName';
	import { ScreenSize } from '$lib/types/sceenSize.js';
	import { SektenName } from '$lib/types/sektenName';
	import type { SubMenuConfig } from '$lib/types/subMenuConfig.js';
	import type { CamarillaCharaktere } from '$lib/types/zod/camarillaCharaktere';
	import { isNullOrUndefined } from '$lib/util';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	export let data;
	const { charaktere } = data;

	$: leaders = getLeader()?.filter((e) => e.sekte.name.match($sectFilter)) ?? [];
	$: officers = getOfficers($sectFilter) ?? [];
	$: gefilterteCharaktere = filterStandardMembers(
		charaktere,
		$sectFilter,
		$clanFilter,
		$offizierFilter
	);
	$: noFilterActive = $clanFilter === '.*' && $offizierFilter === '';

	let sectFilter = writable('.*');
	let offizierFilter = writable('');
	let clanFilter = writable('.*');
	let width: number = 0;
	let clanSubMenu: SubMenuConfig[];

	onMount(() => {
		clanSubMenu = [...Object.keys(ClanName), 'Lasombra antitribu'].map((e) => {
			return {
				label: e,
				onClick: () => swapClanFilter(e)
			};
		});
	});

	function swapSectFilter(filter: string) {
		if ($sectFilter.match(filter)) {
			sectFilter.set('.*');
		} else {
			sectFilter.set(filter);
		}
	}

	function swapOffizierFilter(filter: string) {
		if ($offizierFilter.match(filter)) {
			offizierFilter.set('');
		} else {
			offizierFilter.set(filter);
		}
	}

	function swapClanFilter(filter: string) {
		if ($clanFilter.match(filter)) {
			clanFilter.set('.*');
		} else {
			clanFilter.set(filter);
		}
	}

	function getOfficers(sectFilter: string): CamarillaCharaktere[] | undefined {
		return charaktere.filter(
			(e) =>
				!isNullOrUndefined(e.offizier) &&
				e.offizier.name !== CamarillaAemterName.Prinz &&
				e.offizier.name !== CamarillaAemterName.Baron &&
				e.sekte.name.match(sectFilter)
		);
	}

	function getLeader(): CamarillaCharaktere[] | undefined {
		return charaktere.filter(
			(e) =>
				e.offizier?.name === CamarillaAemterName.Baron ||
				e.offizier?.name === CamarillaAemterName.Prinz
		);
	}

	function filterStandardMembers(
		characterPool: CamarillaCharaktere[],
		sectFilter: string,
		clanFilter: string,
		offizierFilter: string
	) {
		return characterPool.filter(
			(c) =>
				(sectFilter !== '.*' ? c.sekte.name.match(sectFilter) : true) &&
				(clanFilter === '.*'
					? offizierFilter === ''
						? isNullOrUndefined(c.offizier)
						: c.offizier
					: c.clan?.name.match(clanFilter) || c.blutlinie?.name.match(clanFilter)) &&
				(offizierFilter === '' ? true : c.offizier)
		);
	}
</script>

<svelte:window bind:innerWidth={width} />

<h1 class="h1 mb-4 text-center font-bold">Charakter-Galerie</h1>
<div class="mb-4">
	<ButtonGroup
		config={[
			{
				label: SektenName.Camarilla,
				onClick: swapSectFilter,
				indicator: $sectFilter === SektenName.Camarilla
			},
			{
				label: SektenName.Anarchen,
				onClick: swapSectFilter,
				indicator: $sectFilter === SektenName.Anarchen
			},
			{
				label: 'Offiziere',
				onClick: () => swapOffizierFilter('true'),
				indicator: $offizierFilter.length > 0
			},
			{
				label: 'Clans',
				indicator: $clanFilter !== '.*',
				subMenu: clanSubMenu
			}
		]}
		smallSwitch={width < ScreenSize.SM}
		rounded={'!rounded-none'}
	/>
</div>

<CharacterGallery
	{leaders}
	{officers}
	{noFilterActive}
	charaktere={gefilterteCharaktere}
	setting="Camarilla"
/>
