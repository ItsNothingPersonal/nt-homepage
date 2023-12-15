<script lang="ts">
	import ButtonGroup from '$lib/components/ButtonGroup/ButtonGroup.svelte';
	import CharacterGallery from '$lib/components/CharacterGallery/CharacterGallery.svelte';
	import LoadingMessage from '$lib/components/LoadingMessage/LoadingMessage.svelte';
	import { SabbatCharakterStatusName } from '$lib/types/sabbatCharakterStatusName';
	import { SabbatAemterName } from '$lib/types/sabbatOffizier';
	import { ScreenSize } from '$lib/types/sceenSize';
	import type { SubMenuConfig } from '$lib/types/subMenuConfig';
	import type { PackInformation } from '$lib/types/zod/packInformation';
	import type { SabbatCharakter } from '$lib/types/zod/sabbatCharakter';
	import { type SabbatPacks } from '$lib/types/zod/sabbatPacks';
	import { isNullOrUndefined } from '$lib/util';
	import { writable, type Writable } from 'svelte/store';

	export let data;

	let packFilter = writable('.*');
	let offizierFilter = writable('');
	let einzelgaengerFilter: Writable<boolean> = writable(false);
	let selektiertesPack = writable<SabbatPacks | undefined>();
	let width: number = 0;

	function getPackSubMenu(packs: SabbatPacks[]): SubMenuConfig[] {
		return packs.map((e) => {
			return {
				label: e.name,
				onClick: () => swapPackFilter(packs, e.name)
			};
		});
	}

	function swapPackFilter(packs: SabbatPacks[], filter: string) {
		if ($packFilter.match(filter)) {
			packFilter.set('.*');
			selektiertesPack.set(undefined);
		} else {
			einzelgaengerFilter.set(false);
			packFilter.set(filter);
			selektiertesPack.set(packs.find((p) => p.name === $packFilter));
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

	function getLeader(charaktere: SabbatCharakter[]): SabbatCharakter[] {
		return charaktere.filter((e) => e.offizier?.name === SabbatAemterName.Erzbischof);
	}

	function getOfficers(charaktere: SabbatCharakter[]): SabbatCharakter[] {
		return charaktere.filter(
			(e) => !isNullOrUndefined(e.offizier) && e.offizier.name !== SabbatAemterName.Erzbischof
		);
	}

	function getPackLeaders(
		charaktere: SabbatCharakter[],
		name: string | undefined
	): SabbatCharakter[] {
		return getPackByName(charaktere, name).filter(
			(e) =>
				e.charakter_status?.name === SabbatCharakterStatusName.Ductus ||
				e.charakter_status?.name === SabbatCharakterStatusName.Priester
		);
	}

	function getPackByName(
		charaktere: SabbatCharakter[],
		name: string | undefined
	): SabbatCharakter[] {
		return charaktere.filter((e) => e.pack?.name === name);
	}

	function getPackInformation(
		charaktere: SabbatCharakter[],
		selektiertesPack: SabbatPacks | undefined
	): PackInformation | undefined {
		if (selektiertesPack) {
			return {
				pack: selektiertesPack,
				leaders: getPackLeaders(charaktere, selektiertesPack?.name)
			};
		}
		return undefined;
	}

	function getGefilterteCharaktere(
		charaktere: SabbatCharakter[],
		einzelgaengerFilter: boolean,
		packFilter: string,
		offizierFilter: string
	): SabbatCharakter[] {
		return charaktere.filter((c) =>
			!(packFilter === '.*' && einzelgaengerFilter === false && offizierFilter === '')
				? ((einzelgaengerFilter === true && (c.pack === null || c.pack === undefined)) ||
						(packFilter === '.*' && einzelgaengerFilter === false) ||
						(einzelgaengerFilter === false &&
							c.pack?.name.match(packFilter) &&
							(c.charakter_status?.name === SabbatCharakterStatusName.TrueSabbat ||
								c.charakter_status?.name === SabbatCharakterStatusName.FalseSabbat))) &&
					(offizierFilter.length > 0 ? !isNullOrUndefined(c.offizier) : true)
				: isNullOrUndefined(c.offizier)
		);
	}
</script>

<svelte:window bind:innerWidth={width} />

<h1 class="h1 mb-4 text-center font-bold">Charakter-Galerie</h1>
{#await data.packs}
	<LoadingMessage>Lade Charakter-Galerie-Filter</LoadingMessage>
{:then packs}
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
				subMenu: getPackSubMenu(packs)
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
{/await}

{#await data.charaktere}
	<LoadingMessage>Lade Charakter-Galerie</LoadingMessage>
{:then charaktere}
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
