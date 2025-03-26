<script lang="ts">
	import AnsprechpersonenEntry from '$lib/components/Ansprechperson/AnsprechpersonenEntry.svelte';

	let { data } = $props();
</script>

<h2 class="h2 mb-2 mt-4 flex justify-center font-bold">Ansprechpersonen</h2>

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
