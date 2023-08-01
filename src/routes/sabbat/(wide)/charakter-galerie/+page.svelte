<script lang="ts">
	import CharacterCard from '$lib/components/characterCard.svelte';
	import Indicator from '$lib/components/indicator.svelte';
	import type { SabbatPacks } from '$lib/types/zod/sabbatPacks';
	import { getDownloadUrl, isNullOrUndefined } from '$lib/util';
	import {
		Button,
		ButtonGroup,
		Card,
		Chevron,
		Dropdown,
		DropdownItem,
		Heading,
		Img,
		P
	} from 'flowbite-svelte';
	import { writable, type Writable } from 'svelte/store';
	import type { PageData } from './$types';

	export let data: PageData;
	const { packs, charaktere } = data;
	let packFilter = writable('.*');
	let offizierFilter = writable('');
	let einzelgaengerFilter: Writable<boolean> = writable(false);
	let selektiertesPack = writable<SabbatPacks | undefined>();

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

{#if !isNullOrUndefined($selektiertesPack?.beschreibung) || !isNullOrUndefined($selektiertesPack?.logo)}
	<div class="flex items-center justify-center gap-x-2 mb-4">
		<Card class="w-full" size="lg" padding="xl">
			<div
				class={$selektiertesPack?.beschreibung ? 'container' : 'flex items-center justify-center'}
			>
				{#if $selektiertesPack?.logo}
					<Img
						src={getDownloadUrl($selektiertesPack.logo)}
						alt={`Logo des Packs ${$selektiertesPack.name}`}
						class={`rounded-lg  mr-2 mb-2 max-h-56  ${
							$selektiertesPack.beschreibung ? 'float-left shadow-lg dark:shadow-gray-800' : ''
						}`}
					/>
				{/if}
				{#if $selektiertesPack?.beschreibung}
					<P justify class="first-letter:text-2xl">
						{$selektiertesPack.beschreibung}
					</P>
				{/if}
			</div>
		</Card>
	</div>
{/if}

<div class="grid grid-cols-1 md:grid-cols-4 grid-rows-5 gap-2">
	{#each gefilterteCharaktere as charakter}
		<CharacterCard
			characterName={charakter.name}
			clan={charakter.clan}
			blutlinie={charakter.blutlinie}
			aemterName={charakter.offizier?.name}
			status={charakter.charakter_status?.name}
			beschreibung={charakter.beschreibung ?? ''}
			bild={charakter.bild}
		/>
	{/each}
</div>
