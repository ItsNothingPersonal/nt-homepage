<script lang="ts">
	import type { VereinAnsprechpersonen } from '$lib/types/zod/vereinAnsprechpersonen';
	import { getImageUrl } from '$lib/util';
	import type { Snippet } from 'svelte';
	import LoadingMessage from '../LoadingMessage/LoadingMessage.svelte';

	interface Props {
		personen: Promise<VereinAnsprechpersonen[]>;
		titel: string;
		beschreibung?: string | undefined;
		footer?: Snippet;
	}

	let { personen, titel, beschreibung = undefined, footer }: Props = $props();
</script>

{#await personen}
	<LoadingMessage>Lade Lersonen: {titel}</LoadingMessage>
{:then personen}
	{#if personen.length > 0}
		<h3 class="h3 mb-1 text-center">{titel}</h3>
		{#if beschreibung}
			<p class="text-justify">{beschreibung}</p>
		{/if}
		<hr class="my-1" />
		<div class="mb-2 mt-2 flex flex-col md:grid md:grid-cols-3 md:grid-rows-1">
			{#each personen as person}
				<div class="mb-2 flex flex-col items-center last:mb-0">
					<p class="font-semibold">{person.name}</p>
					<p>{person.rolle.name}</p>
					{#if person.bild}
						<img
							alt={`Bild von ${person.name}`}
							src={getImageUrl(person.bild, 192, 192, 'contain', 'auto')}
							class="my-1 rounded-lg shadow-lg dark:shadow-gray-800"
						/>
					{/if}
					{#if person.email}
						<a
							class="anchor no-underline"
							href={`mailto:${person.email}`}
							aria-label="E-Mail-Adresse für {person.name}">{person.email ?? ''}</a
						>
					{/if}
				</div>
			{/each}
		</div>
		<hr clasS="my-1" />
		{#if footer}
			{@render footer()}
		{/if}
	{/if}
{/await}
