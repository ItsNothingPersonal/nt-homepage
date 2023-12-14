<script lang="ts">
	import ButtonGroup from '$lib/components/ButtonGroup/ButtonGroup.svelte';
	import CharacterGallery from '$lib/components/characterGallery.svelte';
	import { SabbatCharakterStatusName } from '$lib/types/sabbatCharakterStatusName';
	import { SabbatAemterName } from '$lib/types/sabbatOffizier';
	import { ScreenSize } from '$lib/types/sceenSize';
	import type { SubMenuConfig } from '$lib/types/subMenuConfig';
	import type { PackInformation } from '$lib/types/zod/packInformation';
	import type { SabbatCharakter } from '$lib/types/zod/sabbatCharakter';
	import type { SabbatPacks } from '$lib/types/zod/sabbatPacks';
	import { isNullOrUndefined } from '$lib/util';
	import { onMount } from 'svelte';
	import { writable, type Writable } from 'svelte/store';

	export let data;
	const { packs, charaktere } = data;

	$: leaders = getLeader();
	$: officers = getOfficers() ?? [];
	$: selektiertesPackInfo = getPackInformation($selektiertesPack);
	$: gefilterteCharaktere = charaktere.filter((c) =>
		!noFilterActive
			? (($einzelgaengerFilter === true && (c.pack === null || c.pack === undefined)) ||
					($packFilter === '.*' && $einzelgaengerFilter === false) ||
					($einzelgaengerFilter === false &&
						c.pack?.name.match($packFilter) &&
						(c.charakter_status?.name === SabbatCharakterStatusName.TrueSabbat ||
							c.charakter_status?.name === SabbatCharakterStatusName.FalseSabbat))) &&
			  ($offizierFilter.length > 0 ? !isNullOrUndefined(c.offizier) : true)
			: isNullOrUndefined(c.offizier)
	);
	$: noFilterActive =
		$packFilter === '.*' && $einzelgaengerFilter === false && $offizierFilter === '';

	let packFilter = writable('.*');
	let offizierFilter = writable('');
	let einzelgaengerFilter: Writable<boolean> = writable(false);
	let selektiertesPack = writable<SabbatPacks | undefined>();
	let width: number = 0;
	let packSubMenu: SubMenuConfig[];

	onMount(() => {
		packSubMenu = packs.map((e) => {
			return {
				label: e.name,
				onClick: () => swapPackFilter(e.name)
			};
		});
	});

	function swapPackFilter(filter: string) {
		if ($packFilter.match(filter)) {
			packFilter.set('.*');
			selektiertesPack.set(undefined);
		} else {
			einzelgaengerFilter.set(false);
			packFilter.set(filter);
			selektiertesPack.set(data.packs.find((p) => p.name === $packFilter));
		}
	}

	function swapOffizierFilter(filter: string) {
		if ($offizierFilter.match(filter)) {
			offizierFilter.set('');
		} else {
			offizierFilter.set(filter);
		}
	}

	function swapFilterEinzelgaenger() {
		if ($einzelgaengerFilter === true) {
			einzelgaengerFilter.set(false);
			selektiertesPack.set(undefined);
		} else {
			packFilter.set('.*');
			einzelgaengerFilter.set(true);
			selektiertesPack.set(undefined);
		}
	}

	function getLeader(): SabbatCharakter[] {
		return charaktere.filter((e) => e.offizier?.name === SabbatAemterName.Erzbischof);
	}

	function getOfficers(): SabbatCharakter[] | undefined {
		return charaktere.filter(
			(e) => !isNullOrUndefined(e.offizier) && e.offizier.name !== SabbatAemterName.Erzbischof
		);
	}

	function getPackLeaders(name: string | undefined): SabbatCharakter[] {
		return getPackByName(name).filter(
			(e) =>
				e.charakter_status?.name === SabbatCharakterStatusName.Ductus ||
				e.charakter_status?.name === SabbatCharakterStatusName.Priester
		);
	}

	function getPackByName(name: string | undefined): SabbatCharakter[] {
		return charaktere.filter((e) => e.pack?.name === name);
	}

	function getPackInformation(
		selektiertesPack: SabbatPacks | undefined
	): PackInformation | undefined {
		if (selektiertesPack) {
			return {
				pack: selektiertesPack,
				leaders: getPackLeaders(selektiertesPack?.name)
			};
		}
		return undefined;
	}
</script>

<svelte:window bind:innerWidth={width} />

<h1 class="h1 mb-4 text-center font-bold">Charakter-Galerie</h1>
<div class="mb-4">
	<ButtonGroup
		config={[
			{
				label: 'Einzelgänger',
				onClick: swapFilterEinzelgaenger,
				indicator: $einzelgaengerFilter === true
			},
			{
				label: 'Packs',
				indicator: $packFilter !== '.*',
				subMenu: packSubMenu
			},
			{
				label: 'Offiziere',
				onClick: () => swapOffizierFilter('true'),
				indicator: $offizierFilter.length > 0
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
	setting="Sabbat"
	selektiertesPack={selektiertesPackInfo}
/>
