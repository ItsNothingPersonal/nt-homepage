<script lang="ts">
	import ClanIconRow from '$lib/components/clanIconRow.svelte';
	import { Heading, P } from 'flowbite-svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	$: camarilla = data.clans.filter((e) => e.sekte.match('Camarilla'));
	$: sabbat = data.clans.filter((e) => e.sekte.match('Sabbat'));
	$: allianz = data.clans.filter((e) => e.sekte.match('Allianz'));
	$: unabhaengig = data.clans.filter((e) => e.sekte.match('Unabhängig'));
</script>

<div class="text-center items-center flex flex-col">
	<Heading tag="h1" class="mb-4">Die 13 großen Vampir-Clans</Heading>

	<P class="mb-4 border-2 border-gray-600 shadow-md p-2 max-w-screen-xl">
		{@html data.beschreibung}
	</P>

	<ClanIconRow clans={camarilla} heading="Die Clans der Camarilla" />
	<ClanIconRow clans={sabbat} heading="Die Clans des Sabbat" />
	<ClanIconRow clans={allianz} heading="Die Clans der Allianz" />
	<ClanIconRow clans={unabhaengig} heading="Die unabhängigen Clans" />
</div>
