<script lang="ts">
	import type { Orga } from '$lib/types/zod/orga';
	import { getImageUrl } from '$lib/util';

	export let title: 'Spielleitung' | 'Erzähler';
	export let personen: OrgaOhneRolle[];

	type OrgaOhneRolle = Omit<Orga, 'rolle'>;
</script>

{#if personen.length > 0}
	<h2 class="h2 mb-2 text-center">{title}</h2>

	<slot name="beschreibung" />
	<hr class="my-2" />
	<div class="mb-2 mt-2 flex flex-col md:grid md:grid-cols-2 md:grid-rows-1">
		{#each personen as person}
			<div class="mb-2 flex flex-col items-center last:mb-0">
				<p class="font-semibold">
					{person.name}
					{#if person.projektleiter}
						{` (Projektleiter)`}
					{/if}
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
	<slot name="footer" />
{/if}
