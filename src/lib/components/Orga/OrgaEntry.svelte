<script lang="ts">
	import type { Orga } from '$lib/types/zod/orga';
	import { getImageUrl } from '$lib/util';
	import type { Snippet } from 'svelte';
	import LoadingMessage from '../LoadingMessage/LoadingMessage.svelte';

	interface Props {
		title: 'Spielleitung' | 'Erzähler';
		personen: Promise<OrgaOhneRolle[]>;
		beschreibung?: Snippet;
		footer?: Snippet;
	}

	let { title, personen, beschreibung, footer }: Props = $props();

	type OrgaOhneRolle = Omit<Orga, 'rolle'>;
</script>

{#await personen}
	<LoadingMessage>Lade Orga-Mitglieder</LoadingMessage>
{:then personen}
	{#if personen.length > 0}
		<h2 class="h2 mb-2 text-center">{title}</h2>

		{@render beschreibung?.()}
		<hr class="my-2" />
		<div class="mt-2 mb-2 flex flex-col md:grid md:grid-cols-2 md:grid-rows-1">
			{#each personen as person (person.name)}
				<div class="mb-2 flex flex-col items-center last:mb-0">
					<p class="font-semibold">
						{`${person.name}${person.projektleiter ? ' (Projektleiter)' : ''}`}
					</p>
					{#if person.bild}
						<img
							alt={`Bild der Spielleitung ${person.name}`}
							src={getImageUrl(person.bild, 192, 192, 'contain', 'auto')}
							class="rounded-lg shadow-lg dark:shadow-gray-800"
						/>
					{/if}
				</div>
			{/each}
		</div>
		<hr class="my-2" />
		{@render footer?.()}
	{/if}
{/await}
