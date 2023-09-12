<script lang="ts">
	import type { CamarillaAemterName } from '$lib/types/camarillaAemterName';
	import type { CharakterStatusName } from '$lib/types/charakterStatusName';
	import type { SabbatCharakterStatusName } from '$lib/types/sabbatCharakterStatusName';
	import type { SabbatAemterName } from '$lib/types/sabbatOffizier';
	import type { Blutlinie } from '$lib/types/zod/blutlinie';
	import type { Clan } from '$lib/types/zod/clan';
	import { Card, DropdownDivider, P } from 'flowbite-svelte';

	export let characterName: string;
	export let aemterName: CamarillaAemterName | SabbatAemterName | undefined = undefined;
	export let clan: Clan | undefined | null;
	export let blutlinie: Blutlinie | undefined | null;
	export let status: CharakterStatusName | SabbatCharakterStatusName | undefined = undefined;
	export let beschreibung: string;
	export let bild: string;

	let width: number;
	let height: number;
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />
<Card
	img={`${
		import.meta.env.VITE_DIRECTUS_URL
	}/assets/${bild}?fit=cover&width=380&height=380&quality=80&format=auto`}
	class="w-full bg-light-50 shadow-md dark:bg-dark-700 dark:shadow-gray-800"
>
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
		{characterName}
	</h5>

	{#if aemterName}
		<p class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400">{aemterName}</p>
	{:else}
		<p class="mb-3 leading-tight"><br /></p>
	{/if}

	<DropdownDivider />
	<div class="flex gap-x-4">
		<div class="grid grid-cols-min-content-first gap-x-1">
			<p class="font-normal leading-tight text-gray-700 dark:text-gray-400">Status</p>
			<P class="whitespace-nowrap font-normal leading-tight">{status ?? '-'}</P>
		</div>
		<div class="row-start-2 grid grid-cols-min-content-first gap-x-1 xxl:row-start-1">
			<p class="font-normal leading-tight text-gray-700 dark:text-gray-400">Clan</p>
			<P class="font-normal leading-tight lg:whitespace-nowrap">
				{#if blutlinie?.name}
					{blutlinie.name}
				{:else if clan?.name}
					{clan.name}
				{:else}
					unbekannt
				{/if}
			</P>
		</div>
	</div>
	<DropdownDivider />
	{#if beschreibung.trim().length > 0}
		<P>{beschreibung}</P>
	{:else}
		<br />
	{/if}
</Card>
