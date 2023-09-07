<script lang="ts">
	import CharacterGallery from '$lib/components/characterGallery.svelte';
	import Indicator from '$lib/components/indicator.svelte';
	import { SabbatCharakterStatusName } from '$lib/types/sabbatCharakterStatusName';
	import { SabbatAemterName } from '$lib/types/sabbatOffizier';
	import type { PackInformation } from '$lib/types/zod/packInformation';
	import type { SabbatCharakter } from '$lib/types/zod/sabbatCharakter';
	import type { SabbatPacks } from '$lib/types/zod/sabbatPacks';
	import { isNullOrUndefined } from '$lib/util';
	import { Button, ButtonGroup, Chevron, Dropdown, DropdownItem, Heading } from 'flowbite-svelte';
	import { writable, type Writable } from 'svelte/store';
	import type { PageData } from './$types';

	export let data: PageData;
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

<Heading tag="h1" class="mb-4">Charakter-Galerie</Heading>
<div class="mb-4">
	<ButtonGroup class="inline-flex rounded-lg shadow-sm bg-light-50 dark:bg-dark-700">
		<Button
			on:click={() => swapFilterEinzelgaenger()}
			class="relative bg-light-50 dark:bg-dark-700"
		>
			Einzelgänger
			{#if $einzelgaengerFilter === true}
				<Indicator />
			{/if}
		</Button>
		<Button class="relative bg-light-50 dark:bg-dark-700">
			<Chevron>Packs</Chevron>
			{#if $packFilter !== '.*'}
				<Indicator />
			{/if}
		</Button>
		<Dropdown containerClass="divide-y z-20 bg-light-50 dark:bg-dark-700">
			{#each packs as pack}
				<DropdownItem on:click={() => swapPackFilter(pack.name)}>{pack.name}</DropdownItem>
			{/each}
		</Dropdown>
		<Button
			on:click={() => swapOffizierFilter('true')}
			class="relative bg-light-50 dark:bg-dark-700"
		>
			Offiziere
			{#if $offizierFilter.length > 0}
				<Indicator />
			{/if}
		</Button>
	</ButtonGroup>
</div>

<CharacterGallery
	{leaders}
	{officers}
	{noFilterActive}
	charaktere={gefilterteCharaktere}
	setting="Sabbat"
	selektiertesPack={selektiertesPackInfo}
/>
