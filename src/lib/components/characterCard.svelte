<script lang="ts">
	import type { CamarillaAemterName } from '$lib/types/camarillaAemterName';
	import type { CharakterStatusName } from '$lib/types/charakterStatusName';
	import type { SabbatCharakterStatusName } from '$lib/types/sabbatCharakterStatusName';
	import type { SabbatAemterName } from '$lib/types/sabbatOffizier';
	import type { Clan } from '$lib/types/zod/clan';
	import { Card, DropdownDivider, P } from 'flowbite-svelte';

	export let characterName: string;
	export let aemterName: CamarillaAemterName | SabbatAemterName | undefined = undefined;
	export let clan: Clan;
	export let status: CharakterStatusName | SabbatCharakterStatusName | undefined = undefined;
	export let beschreibung: string;
	export let bild: string;
</script>

<Card
	img={`${
		import.meta.env.VITE_DIRECTUS_URL
	}/assets/${bild}?fit=cover&width=192&height=192&quality=80&format=auto`}
>
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
		{characterName}
	</h5>

	{#if aemterName}
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">{aemterName}</p>
	{:else}
		<p class="mb-3 leading-tight"><br /></p>
	{/if}

	<DropdownDivider />
	<div clasS="grid grid-cols-2 grid-rows-1 items-center gap-2">
		<div class="grid grid-cols-min-content-first gap-x-2">
			<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Clan</p>
			<P class="mb-3 font-normal leading-tight">{clan.name}</P>
		</div>
		<div class="grid grid-cols-min-content-first gap-x-2">
			<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Status</p>
			<P class="mb-3 font-normal leading-tight">{status ?? '-'}</P>
		</div>
	</div>
	<DropdownDivider />
	<P>{beschreibung ?? ''}</P>
</Card>
