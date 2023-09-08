<script lang="ts">
	import type { CamarillaCharaktere } from '$lib/types/zod/camarillaCharaktere';
	import type { PackInformation } from '$lib/types/zod/packInformation';
	import type { SabbatCharakter } from '$lib/types/zod/sabbatCharakter';
	import { getDownloadUrl, isNullOrUndefined } from '$lib/util';
	import { Card, Heading, Img, P } from 'flowbite-svelte';
	import CharacterCard from './characterCard.svelte';

	export let leaders: CamarillaCharaktere[] | SabbatCharakter[] | undefined;
	export let officers: CamarillaCharaktere[] | SabbatCharakter[];
	export let charaktere: CamarillaCharaktere[] | SabbatCharakter[];
	export let noFilterActive: boolean;
	export let setting: 'Camarilla' | 'Sabbat';
	export let selektiertesPack: PackInformation | undefined = undefined;
</script>

{#if !isNullOrUndefined(selektiertesPack?.pack?.beschreibung) || !isNullOrUndefined(selektiertesPack?.pack.logo)}
	<div class="flex items-center justify-center gap-x-2 mb-4">
		<Card class="text-left w-full bg-light-50 dark:bg-dark-700" size="lg" padding="xl">
			<div
				class={selektiertesPack?.pack.beschreibung
					? 'container'
					: 'flex items-center justify-center'}
			>
				{#if selektiertesPack?.pack.logo}
					<Img
						src={getDownloadUrl(selektiertesPack?.pack.logo)}
						alt={`Logo des Packs ${selektiertesPack?.pack.name}`}
						class={`rounded-lg  mr-2 mb-2 max-h-56  ${
							selektiertesPack?.pack.beschreibung ? 'float-left shadow-lg dark:shadow-gray-800' : ''
						}`}
					/>
				{/if}
				{#if selektiertesPack?.pack.beschreibung}
					<P justify class="first-letter:text-2xl">
						{selektiertesPack?.pack.beschreibung}
					</P>
				{/if}
			</div>
		</Card>
	</div>
{/if}

{#if leaders && noFilterActive}
	<Heading tag="h2" class="mb-2">Anführer</Heading>
	<div class="flex justify-center">
		{#if leaders.length === 1}
			<CharacterCard
				characterName={leaders[0].name}
				clan={leaders[0].clan}
				blutlinie={leaders[0].blutlinie}
				aemterName={leaders[0].offizier?.name}
				status={leaders[0].charakter_status?.name}
				beschreibung={leaders[0].beschreibung ?? ''}
				bild={leaders[0].bild}
			/>
		{:else}
			<div class="grid grid-cols-1 md:grid-cols-2 auto-rows-auto gap-2 mb-4 justify-items-center">
				{#each leaders as singleLeader}
					<CharacterCard
						characterName={singleLeader.name}
						clan={singleLeader.clan}
						blutlinie={singleLeader.blutlinie}
						aemterName={singleLeader.offizier?.name}
						status={singleLeader.charakter_status?.name}
						beschreibung={singleLeader.beschreibung ?? ''}
						bild={singleLeader.bild}
					/>
				{/each}
			</div>
		{/if}
	</div>
{/if}

{#if officers && noFilterActive}
	<Heading tag="h2" class="mb-2 mt-4">Offiziere</Heading>
	{#if officers.length >= 4}
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
	{:else}
		<div class="flex gap-2 mb-4 justify-center">
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
{/if}

{#if selektiertesPack && selektiertesPack.leaders.length > 0}
	<Heading tag="h2" class="mb-2">Anführer</Heading>
	<div class="flex flex-col md:flex-row mb-4 gap-2 justify-center">
		{#each selektiertesPack.leaders as charakter}
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

{#if noFilterActive || (selektiertesPack && charaktere.length > 0)}
	<Heading tag="h2" class="mb-2">
		{setting === 'Camarilla' ? 'Domänenmitglieder' : 'Sabbatis'}
	</Heading>
{/if}
{#if charaktere.length >= 4}
	<div
		class="grid grid-cols-1 md:grid-cols-2 gal-sm:grid-cols-3 gal:grid-cols-4 auto-rows-auto gap-2 justify-items-center"
	>
		{#each charaktere as charakter}
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
			{#each charaktere as charakter}
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
