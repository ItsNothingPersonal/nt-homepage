<script lang="ts">
	import { Heading, Hr, P } from 'flowbite-svelte';
	import { getImageUrl, type Orga } from 'services/directus';

	export let title: 'Spielleitung' | 'Erzähler';
	export let personen: OrgaOhneRolle[];

	type OrgaOhneRolle = Omit<Orga, 'rolle'>;
</script>

{#if personen.length > 0}
	<Heading tag="h2" class="mb-2">{title}</Heading>

	<slot name="beschreibung" />
	<Hr height="h-px" />
	<div class="flex flex-col md:grid md:grid-cols-2 md:grid-rows-1 mt-2 mb-2">
		{#each personen as person}
			<div class="flex flex-col items-center mb-2 last:mb-0">
				<P weight="semibold">{person.name}</P>
				{#if person.bild}
					<img
						alt={`Bild der Spielleitung ${person.name}`}
						src={getImageUrl(person.bild, 192, 192, 'contain', 'auto')}
					/>
				{/if}
			</div>
		{/each}
	</div>
	<Hr height="h-px" />
	<slot name="footer" />
{/if}
