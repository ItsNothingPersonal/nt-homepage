<script lang="ts">
	import CharacterCard from '$lib/components/characterCard.svelte';
	import Indicator from '$lib/components/indicator.svelte';
	import { ClanName } from '$lib/types/clanName';
	import { SektenName } from '$lib/types/sektenName';
	import { isNullOrUndefined } from '$lib/util';
	import { Button, ButtonGroup, Chevron, Dropdown, DropdownItem, Heading } from 'flowbite-svelte';
	import { writable } from 'svelte/store';
	import type { PageData } from './$types';

	export let data: PageData;
	const { charaktere } = data;

	let clans = Object.keys(ClanName);

	let sectFilter = writable('.*');
	let offizierFilter = writable('');
	let clanFilter = writable('.*');

	$: gefilterteCharaktere = charaktere.filter(
		(c) =>
			c.sekte.name.match($sectFilter) &&
			($offizierFilter.length > 0 ? !isNullOrUndefined(c.offizier) : true) &&
			c.clan.name.match($clanFilter)
	);

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

<div class="grid grid-cols-1 md:grid-cols-5 grid-rows-5 gap-2">
	{#each gefilterteCharaktere as charakter}
		<CharacterCard
			characterName={charakter.name}
			clan={charakter.clan}
			blutlinie={charakter.blutlinie}
			aemterName={charakter.offizier?.name}
			status={charakter.charakter_status?.name}
			beschreibung={charakter.beschreibung}
			bild={charakter.bild}
		/>
	{/each}
</div>
