<script lang="ts">
	import CharacterCard from '$lib/components/characterCard.svelte';
	import { Heading } from 'flowbite-svelte';
	import type { CamarillaCharaktere } from '../../../services/directus';
	import type { PageData } from './$types';

	export let data: PageData;
	const charaktere = data.charaktere as unknown as CamarillaCharaktere[];
</script>

<Heading tag="h1" class="mb-4">Charaktergalerie</Heading>

<div class="grid grid-cols-1 md:grid-cols-5 grid-rows-5 gap-2">
	{#each charaktere as charakter}
		<CharacterCard
			characterName={charakter.name}
			clan={charakter.clan}
			offizier={charakter.offizier?.name}
			status={charakter.charakter_status.name}
			beschreibung={charakter.beschreibung}
			bild={charakter.bild}
		/>
	{/each}
</div>
