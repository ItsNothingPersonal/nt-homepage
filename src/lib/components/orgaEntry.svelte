<script lang="ts">
	import { A, Heading, Hr, P } from 'flowbite-svelte';
	import type { Orga } from 'services/directus';

	export let title: 'Spielleitung' | 'Erzähler';
	export let personen: OrgaOhneRolle[];

	type OrgaOhneRolle = Omit<Orga, 'rolle'>;
</script>

<Heading tag="h2" class="mb-2">{title}</Heading>

<slot name="beschreibung" />
<Hr height="h-px" />
<div class="flex flex-col md:grid md:grid-cols-2 md:grid-rows-1 mt-2 mb-2">
	{#each personen as person}
		<div class="flex flex-col items-center mb-2 last:mb-0">
			<P weight="semibold">{person.name}</P>
			<img
				alt={`Bild der Spielleitung ${person.name}`}
				src={`${import.meta.env.VITE_DIRECTUS_URL}/assets/${
					person.bild
				}?fit=cover&width=192&height=192&quality=80&format=auto`}
			/>
			<A href={`mailto:${person.email}`}>{person.email ?? ''}</A>
		</div>
	{/each}
</div>
<Hr height="h-px" />
<slot name="footer" />
