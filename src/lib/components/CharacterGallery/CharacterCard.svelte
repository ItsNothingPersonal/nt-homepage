<script lang="ts">
	import { PUBLIC_DIRECTUS_URL } from '$env/static/public';
	import type { CamarillaAemterName } from '$lib/types/camarillaAemterName';
	import type { CharakterStatusName } from '$lib/types/charakterStatusName';
	import type { SabbatCharakterStatusName } from '$lib/types/sabbatCharakterStatusName';
	import type { SabbatAemterName } from '$lib/types/sabbatOffizier';
	import type { Blutlinie } from '$lib/types/zod/blutlinie';
	import type { Clan } from '$lib/types/zod/clan';

	interface Props {
		characterName: string;
		aemterName?: CamarillaAemterName | SabbatAemterName | undefined;
		clan: Clan | undefined | null;
		blutlinie: Blutlinie | undefined | null;
		status?: CharakterStatusName | SabbatCharakterStatusName | undefined;
		beschreibung?: string | undefined;
		bild: string;
		letzteWorte?: string | undefined | null;
	}

	let {
		characterName,
		aemterName = undefined,
		clan,
		blutlinie,
		status = undefined,
		beschreibung = undefined,
		bild,
		letzteWorte = undefined
	}: Props = $props();

	let width: number = $state(0);
	let height: number = $state(0);
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />
<div class="bg-light-50 dark:bg-dark-700 card w-full max-w-sm shadow-md dark:shadow-gray-800">
	<header class="card-header p-0">
		<img
			src={`${PUBLIC_DIRECTUS_URL}/assets/${bild}?fit=contain&width=384&height=384&quality=80&format=auto`}
			alt="Charakterbild von {characterName}"
			class="rounded-t-3xl"
		/>
	</header>
	<section class="p-4 pb-6">
		<h3 class="h3 mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			{characterName}
		</h3>

		{#if aemterName}
			<p class="mb-3 text-center font-normal leading-tight text-gray-700 dark:text-gray-400">
				{aemterName}
			</p>
		{:else}
			<p class="mb-3 leading-tight"><br /></p>
		{/if}

		<hr />
		<div class="my-2 flex gap-x-4">
			<div class="grid grid-cols-min-content-first gap-x-1">
				<p class="font-normal leading-tight text-gray-700 dark:text-gray-400">Status</p>
				<p class="whitespace-nowrap font-normal leading-tight">{status ?? '-'}</p>
			</div>
			<div class="row-start-2 grid grid-cols-min-content-first gap-x-1 xxl:row-start-1">
				<p class="font-normal leading-tight text-gray-700 dark:text-gray-400">Clan</p>
				<p class="font-normal leading-tight lg:whitespace-nowrap">
					{#if blutlinie?.name}
						{blutlinie.name}
					{:else if clan?.name}
						{clan.name}
					{:else}
						unbekannt
					{/if}
				</p>
			</div>
		</div>
		<hr />

		{#if beschreibung}
			<p class="mt-2">{beschreibung}</p>
		{/if}

		{#if letzteWorte}
			{#if beschreibung}
				<div class="my-2 flex items-center justify-center">
					<hr class="w-1/2" />
				</div>
			{/if}
			<p class="mt-2">{letzteWorte}</p>
		{/if}

		{#if !beschreibung && !letzteWorte}
			<br />
		{/if}
	</section>
</div>
