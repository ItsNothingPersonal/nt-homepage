<script lang="ts">
	import type { AnarchenCharakter } from '$lib/types/zod/anarchenCharaktere';
	import type { CamarillaCharakter } from '$lib/types/zod/camarillaCharaktere';
	import type { PackInformation } from '$lib/types/zod/packInformation';
	import type { SabbatCharakter } from '$lib/types/zod/sabbatCharakter';
	import { getDownloadUrl, isNullOrUndefined } from '$lib/util';
	import CharacterCard from './CharacterCard.svelte';

	interface Props {
		leaders: CamarillaCharakter[] | SabbatCharakter[] | AnarchenCharakter[];
		officers: CamarillaCharakter[] | SabbatCharakter[] | AnarchenCharakter[];
		charaktere: CamarillaCharakter[] | SabbatCharakter[] | AnarchenCharakter[];
		noFilterActive: boolean;
		setting: 'Camarilla' | 'Sabbat' | 'Anarchen';
		selektiertesPack?: PackInformation | undefined;
	}

	let {
		leaders,
		officers,
		charaktere,
		noFilterActive,
		setting,
		selektiertesPack = undefined
	}: Props = $props();
</script>

{#if !isNullOrUndefined(selektiertesPack?.pack?.beschreibung) || !isNullOrUndefined(selektiertesPack?.pack.logo)}
	<div class="mb-4 flex items-center justify-center gap-x-2">
		<div
			class="bg-light-50 dark:bg-dark-700 card w-full max-w-2xl p-4 text-left shadow-lg dark:shadow-gray-800"
		>
			<div
				class={selektiertesPack?.pack.beschreibung
					? 'container'
					: 'flex items-center justify-center'}
			>
				{#if selektiertesPack?.pack.logo}
					<img
						src={getDownloadUrl(selektiertesPack?.pack.logo)}
						alt={`Logo des Packs ${selektiertesPack?.pack.name}`}
						class={`mr-4  mb-2 max-h-56 rounded-lg  ${
							selektiertesPack?.pack.beschreibung ? 'float-left shadow-lg dark:shadow-gray-800' : ''
						}`}
					/>
				{/if}
				{#if selektiertesPack?.pack.beschreibung}
					<p class="text-justify first-letter:text-2xl">
						{selektiertesPack?.pack.beschreibung}
					</p>
				{/if}
			</div>
		</div>
	</div>
{/if}

{#if leaders.length > 0 && noFilterActive}
	<h2 class="h2 mt-4 mb-2 flex justify-center font-bold">Anführer</h2>
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
				letzteWorte={leaders[0].letzte_worte}
			/>
		{:else}
			<div class="mb-4 grid auto-rows-auto grid-cols-1 justify-items-center gap-2 md:grid-cols-2">
				{#each leaders as singleLeader (singleLeader.name)}
					<CharacterCard
						characterName={singleLeader.name}
						clan={singleLeader.clan}
						blutlinie={singleLeader.blutlinie}
						aemterName={singleLeader.offizier?.name}
						status={singleLeader.charakter_status?.name}
						beschreibung={singleLeader.beschreibung ?? ''}
						bild={singleLeader.bild}
						letzteWorte={singleLeader.letzte_worte}
					/>
				{/each}
			</div>
		{/if}
	</div>
{/if}

{#if officers.length > 0 && noFilterActive}
	<h2 class="h2 mt-4 mb-2 flex justify-center font-bold">Offiziere</h2>
	{#if officers.length >= 4}
		<div
			class="gal-sm:grid-cols-3 gal:grid-cols-4 mb-4 grid auto-rows-auto grid-cols-1 justify-items-center gap-2 md:grid-cols-2"
		>
			{#each officers as charakter (charakter.name)}
				<CharacterCard
					characterName={charakter.name}
					clan={charakter.clan}
					blutlinie={charakter.blutlinie}
					aemterName={charakter.offizier?.name}
					status={charakter.charakter_status?.name}
					beschreibung={charakter.beschreibung ?? ''}
					bild={charakter.bild}
					letzteWorte={charakter.letzte_worte}
				/>
			{/each}
		</div>
	{:else}
		<div class="mb-4 flex flex-wrap justify-center gap-2">
			{#each officers as charakter (charakter.name)}
				<CharacterCard
					characterName={charakter.name}
					clan={charakter.clan}
					blutlinie={charakter.blutlinie}
					aemterName={charakter.offizier?.name}
					status={charakter.charakter_status?.name}
					beschreibung={charakter.beschreibung ?? ''}
					bild={charakter.bild}
					letzteWorte={charakter.letzte_worte}
				/>
			{/each}
		</div>
	{/if}
{/if}

{#if selektiertesPack && selektiertesPack.leaders.length > 0}
	<h2 class="h2 mb-2 flex justify-center font-bold">Anführer</h2>
	<div class="mb-4 flex flex-col justify-center gap-2 md:flex-row">
		{#each selektiertesPack.leaders as charakter (charakter.name)}
			<CharacterCard
				characterName={charakter.name}
				clan={charakter.clan}
				blutlinie={charakter.blutlinie}
				aemterName={charakter.offizier?.name}
				status={charakter.charakter_status?.name}
				beschreibung={charakter.beschreibung ?? ''}
				bild={charakter.bild}
				letzteWorte={charakter.letzte_worte}
			/>
		{/each}
	</div>
{/if}

{#if charaktere.length > 0 && (noFilterActive || selektiertesPack)}
	<h2 class="h2 mb-2 flex justify-center font-bold">
		{setting === 'Camarilla' ? 'Domänenmitglieder' : setting === 'Sabbat' ? 'Sabbatis' : 'Anarchen'}
	</h2>
{/if}
{#if charaktere.length >= 4}
	<div
		class="gal-sm:grid-cols-3 gal:grid-cols-4 mb-10 grid auto-rows-auto grid-cols-1 justify-items-center gap-2 md:grid-cols-2"
	>
		{#each charaktere as charakter (charakter.name)}
			<CharacterCard
				characterName={charakter.name}
				clan={charakter.clan}
				blutlinie={charakter.blutlinie}
				aemterName={charakter.offizier?.name}
				status={charakter.charakter_status?.name}
				beschreibung={charakter.beschreibung ?? ''}
				bild={charakter.bild}
				letzteWorte={charakter.letzte_worte}
			/>
		{/each}
	</div>
{:else}
	<div class="mb-10 flex h-max w-full justify-center">
		<div class="mb-4 flex flex-col gap-2 md:grid md:grid-cols-2 lg:flex lg:flex-row">
			{#each charaktere as charakter (charakter.name)}
				<CharacterCard
					characterName={charakter.name}
					clan={charakter.clan}
					blutlinie={charakter.blutlinie}
					aemterName={charakter.offizier?.name}
					status={charakter.charakter_status?.name}
					beschreibung={charakter.beschreibung ?? ''}
					bild={charakter.bild}
					letzteWorte={charakter.letzte_worte}
				/>
			{/each}
		</div>
	</div>
{/if}
