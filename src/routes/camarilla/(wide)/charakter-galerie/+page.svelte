<script lang="ts">
	import CharacterGallery from '$lib/components/characterGallery.svelte';
	import Indicator from '$lib/components/indicator.svelte';
	import { CamarillaAemterName } from '$lib/types/camarillaAemterName';
	import { ClanName } from '$lib/types/clanName';
	import { SektenName } from '$lib/types/sektenName';
	import type { CamarillaCharaktere } from '$lib/types/zod/camarillaCharaktere';
	import { isNullOrUndefined } from '$lib/util';
	import { Button, ButtonGroup, Chevron, Dropdown, DropdownItem, Heading } from 'flowbite-svelte';
	import { writable } from 'svelte/store';
	import type { PageData } from './$types';

	export let data: PageData;
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

	let clans = [...Object.keys(ClanName), 'Lasombra antitribu'];
	let sectFilter = writable('.*');
	let offizierFilter = writable('');
	let clanFilter = writable('.*');

	function swapSectFilter(filter: SektenName) {
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

<Heading tag="h1" class="mb-4">Charakter-Galerie</Heading>
<div class="mb-4">
	<ButtonGroup class="inline-flex rounded-lg shadow-sm bg-light-50 dark:bg-dark-700">
		<Button
			on:click={() => swapSectFilter(SektenName.Camarilla)}
			class="relative bg-light-50 dark:bg-dark-700"
		>
			Camarilla
			{#if $sectFilter === SektenName.Camarilla}
				<Indicator />
			{/if}
		</Button>
		<Button
			on:click={() => swapSectFilter(SektenName.Anarchen)}
			class="relative bg-light-50 dark:bg-dark-700"
		>
			Anarchen
			{#if $sectFilter === SektenName.Anarchen}
				<Indicator />
			{/if}
		</Button>
		<Button
			on:click={() => swapOffizierFilter('true')}
			class="relative bg-light-50 dark:bg-dark-700"
		>
			Offiziere
			{#if $offizierFilter.length > 0}
				<Indicator />
			{/if}
		</Button>
		<Button class="relative bg-light-50">
			<Chevron>Clans</Chevron>
			{#if $clanFilter !== '.*'}
				<Indicator />
			{/if}
		</Button>
		<Dropdown containerClass="divide-y w-44 z-20 bg-light-50 dark:bg-dark-700">
			{#each clans as clan}
				<DropdownItem on:click={() => swapClanFilter(clan)}>{clan}</DropdownItem>
			{/each}
		</Dropdown>
	</ButtonGroup>
</div>

<CharacterGallery
	{leaders}
	{officers}
	{noFilterActive}
	charaktere={gefilterteCharaktere}
	setting="Camarilla"
/>
