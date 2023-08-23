<script lang="ts">
	import CharacterCard from '$lib/components/characterCard.svelte';
	import Indicator from '$lib/components/indicator.svelte';
	import { SabbatCharakterStatusName } from '$lib/types/sabbatCharakterStatusName';
	import { SabbatAemterName } from '$lib/types/sabbatOffizier';
	import type { SabbatCharakter } from '$lib/types/zod/sabbatCharakter';
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
	const leader = getLeader();
	const officers = getOfficers();
	let packFilter = writable('.*');
	let offizierFilter = writable('');
	let einzelgaengerFilter: Writable<boolean> = writable(false);
	let selektiertesPack = writable<SabbatPacks | undefined>();

	$: gefilterteCharaktere = charaktere.filter((c) =>
		!noFilterActive
			? (($einzelgaengerFilter === true && (c.pack === null || c.pack === undefined)) ||
					($packFilter === '.*' && $einzelgaengerFilter === false) ||
					($einzelgaengerFilter === false &&
						c.pack?.name.match($packFilter) &&
						c.charakter_status?.name === SabbatCharakterStatusName.TrueSabbat)) &&
			  ($offizierFilter.length > 0 ? !isNullOrUndefined(c.offizier) : true)
			: isNullOrUndefined(c.offizier)
	);

	$: noFilterActive =
		$packFilter === '.*' && $einzelgaengerFilter === false && $offizierFilter === '';

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

	function getLeader(): SabbatCharakter | undefined {
		return charaktere.find((e) => e.offizier?.name === SabbatAemterName.Erzbischof);
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

{#if !isNullOrUndefined($selektiertesPack?.beschreibung) || !isNullOrUndefined($selektiertesPack?.logo)}
	<div class="flex items-center justify-center gap-x-2 mb-4">
		<Card class="text-left w-full bg-light-50 dark:bg-dark-700" size="lg" padding="xl">
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

{#if leader && noFilterActive}
	<Heading tag="h2" class="mb-2">Erzbischof</Heading>
	<div class="flex justify-center mb-4">
		<CharacterCard
			characterName={leader.name}
			clan={leader.clan}
			blutlinie={leader.blutlinie}
			aemterName={leader.offizier?.name}
			status={leader.charakter_status?.name}
			beschreibung={leader.beschreibung ?? ''}
			bild={leader.bild}
		/>
	</div>
{/if}

{#if officers && noFilterActive}
	<Heading tag="h2" class="mb-2">Offiziere</Heading>
	<div
		class="grid grid-cols-1 md:grid-cols-2 gal-sm:grid-cols-3 gal:grid-cols-4 auto-rows-auto gap-2 mb-4 justify-items-center"
	>
		{#each officers as charakter}
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
{/if}

{#if $selektiertesPack && $offizierFilter === '' && getPackLeaders($selektiertesPack.name).length > 0}
	<Heading tag="h2" class="mb-2">Anführer</Heading>
	<div class="flex flex-col md:flex-row mb-4 gap-2 items-center justify-center">
		{#each getPackLeaders($selektiertesPack.name) as charakter}
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
{/if}

{#if noFilterActive || ($selektiertesPack && $offizierFilter === '' && gefilterteCharaktere.length > 0)}
	<Heading tag="h2" class="mb-2">True Sabbat</Heading>
{/if}

{#if gefilterteCharaktere.length >= 4}
	<div
		class="grid grid-cols-1 md:grid-cols-2 gal-sm:grid-cols-3 gal:grid-cols-4 auto-rows-auto gap-2 justify-items-center"
	>
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
{:else}
	<div class="flex h-max w-full justify-center">
		<div class="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row mb-4 gap-2">
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
	</div>
{/if}
