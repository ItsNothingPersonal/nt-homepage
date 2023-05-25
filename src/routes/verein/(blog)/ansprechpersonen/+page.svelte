<script lang="ts">
	import AnsprechpersonenEntry from '$lib/components/ansprechpersonenEntry.svelte';
	import { Heading } from 'flowbite-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Heading tag="h2" class="mb-2">Ansprechpersonen</Heading>

<AnsprechpersonenEntry
	personen={data.vorstand}
	titel="Vorstand"
	beschreibung="Der Vorstand des Nächtlichen Theaters wird alle 4 Jahre neu gewählt und besteht aus drei Personen."
/>

<AnsprechpersonenEntry
	personen={data.projektleiter}
	titel="Projektleiter"
	beschreibung="Die Projektleiter werden alle 2 Jahre neu von der Mitgliederversammlung gewählt und organisieren ihre jeweiligen Projekte eigenverantwortlich."
/>

<AnsprechpersonenEntry
	personen={data.andere}
	titel="Andere Ansprechpersonen"
	beschreibung="Außerdem gibt es noch folgende weitere Ansprechpersonen für spezielle Anliegen."
/>
