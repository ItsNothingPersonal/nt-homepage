<script lang="ts">
	import type { CamarillaOffizier } from '$lib/types/camarillaOffizier';
	import type { CharakterStatusName } from '$lib/types/charakterStatusName';
	import { Card, DropdownDivider, P } from 'flowbite-svelte';
	import type { Clans } from '../../services/directus';

	export let characterName: string;
	export let offizier: CamarillaOffizier | undefined = undefined;
	export let clan: Clans;
	export let status: CharakterStatusName | undefined = undefined;
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

	{#if offizier}
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">{offizier}</p>
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
	<P>{beschreibung}</P>
</Card>
