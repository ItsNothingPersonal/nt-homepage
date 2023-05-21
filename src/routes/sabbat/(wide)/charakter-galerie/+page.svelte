<script lang="ts">
	import CharacterCard from '$lib/components/characterCard.svelte';
	import Indicator from '$lib/components/indicator.svelte';
	import { isNullOrUndefined } from '$lib/util';
	import { Button, ButtonGroup, Chevron, Dropdown, DropdownItem, Heading } from 'flowbite-svelte';
	import type { SabbatCharaktere } from 'services/directus';
	import { writable } from 'svelte/store';
	import type { PageData } from './$types';

	export let data: PageData;
	let packFilter = writable('.*');
	let offizierFilter = writable('');

	$: charaktere = (data.charaktere as unknown as SabbatCharaktere[]).filter(
		(c) =>
			c.pack.name.match($packFilter) &&
			($offizierFilter.length > 0 ? !isNullOrUndefined(c.offizier) : true)
	);

	function swapPackFilter(filter: string) {
		if ($packFilter.match(filter)) {
			packFilter.set('.*');
		} else {
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
</script>

<Heading tag="h1" class="mb-4">Charaktergalerie</Heading>
<div class="mb-4">
	<ButtonGroup>
		<Button class="relative">
			<Chevron>Packs</Chevron>
			{#if $packFilter !== '.*'}
				<Indicator />
			{/if}
		</Button>
		<Dropdown>
			{#each data.packs as pack}
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
	{#each charaktere as charakter}
		<CharacterCard
			characterName={charakter.name}
			clan={charakter.clan}
			offizier={charakter.offizier?.name}
			status={charakter.charakter_status?.name}
			beschreibung={charakter.beschreibung}
			bild={charakter.bild}
		/>
	{/each}
</div>
