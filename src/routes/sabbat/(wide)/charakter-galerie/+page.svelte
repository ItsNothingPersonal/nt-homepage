<script lang="ts">
	import CharacterCard from '$lib/components/characterCard.svelte';
	import Indicator from '$lib/components/indicator.svelte';
	import { isNullOrUndefined } from '$lib/util';
	import { Button, ButtonGroup, Chevron, Dropdown, DropdownItem, Heading } from 'flowbite-svelte';
	import { writable, type Writable } from 'svelte/store';
	import type { PageData } from './$types';

	export let data: PageData;
	const { packs, charaktere } = data;
	let packFilter = writable('.*');
	let offizierFilter = writable('');
	let einzelgaengerFilter: Writable<boolean> = writable(false);

	$: gefilterteCharaktere = charaktere.filter(
		(c) =>
			(($einzelgaengerFilter === true && (c.pack === null || c.pack === undefined)) ||
				($packFilter === '.*' && $einzelgaengerFilter === false) ||
				($einzelgaengerFilter === false && c.pack?.name.match($packFilter))) &&
			($offizierFilter.length > 0 ? !isNullOrUndefined(c.offizier) : true)
	);

	function swapPackFilter(filter: string) {
		if ($packFilter.match(filter)) {
			packFilter.set('.*');
		} else {
			einzelgaengerFilter.set(false);
			packFilter.set(filter);
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
		} else {
			packFilter.set('.*');
			einzelgaengerFilter.set(true);
		}
	}
</script>

<Heading tag="h1" class="mb-4">Charaktergalerie</Heading>
<div class="mb-4">
	<ButtonGroup>
		<Button on:click={() => swapFilterEinzelgaenger()} class="relative">
			Einzelgänger
			{#if $einzelgaengerFilter === true}
				<Indicator />
			{/if}
		</Button>
		<Button class="relative">
			<Chevron>Packs</Chevron>
			{#if $packFilter !== '.*'}
				<Indicator />
			{/if}
		</Button>
		<Dropdown>
			{#each packs as pack}
				<DropdownItem on:click={() => swapPackFilter(pack.name)}>{pack.name}</DropdownItem>
			{/each}
		</Dropdown>
		<Button on:click={() => swapOffizierFilter('true')} class="relative">
			Offiziere
			{#if $offizierFilter.length > 0}
				<Indicator />
			{/if}
		</Button>
	</ButtonGroup>
</div>

<div class="grid grid-cols-1 md:grid-cols-4 grid-rows-5 gap-2">
	{#each gefilterteCharaktere as charakter}
		<CharacterCard
			characterName={charakter.name}
			clan={charakter.clan}
			aemterName={charakter.offizier?.name}
			status={charakter.charakter_status?.name}
			beschreibung={charakter.beschreibung ?? ''}
			bild={charakter.bild}
		/>
	{/each}
</div>
