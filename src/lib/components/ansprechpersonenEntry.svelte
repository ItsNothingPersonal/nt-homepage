<script lang="ts">
	import type { VereinAnsprechpersonen } from '$lib/types/zod/vereinAnsprechpersonen';
	import { A, Heading, Hr, P } from 'flowbite-svelte';
	import { getImageUrl } from 'services/directus';

	export let personen: VereinAnsprechpersonen[];
	export let titel: string;
	export let beschreibung: string | undefined = undefined;
</script>

{#if personen.length > 0}
	<Heading tag="h3" class="mb-1">{titel}</Heading>
	{#if beschreibung}
		<P class="text-justify">{beschreibung}</P>
	{/if}
	<Hr height="h-px" />
	<div class="flex flex-col md:grid md:grid-cols-3 md:grid-rows-1 mt-2 mb-2">
		{#each personen as person}
			<div class="flex flex-col items-center mb-2 last:mb-0">
				<P weight="semibold">{person.name}</P>
				<P>{person.rolle.name}</P>
				{#if person.bild}
					<img
						alt={`Bild von ${person.name}`}
						src={getImageUrl(person.bild, 192, 192, 'contain', 'auto')}
						class="my-1"
					/>
				{/if}
				<A href={`mailto:${person.email}`}>{person.email ?? ''}</A>
			</div>
		{/each}
	</div>
	<Hr height="h-px" />
	<slot name="footer" />
{/if}
