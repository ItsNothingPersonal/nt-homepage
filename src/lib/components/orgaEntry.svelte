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
<div class="grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 mt-2 mb-2">
	{#each personen as person}
		<div class="grid grid-cols-1 grid-rows-min-content-first">
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
