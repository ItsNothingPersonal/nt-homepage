<script lang="ts">
	import ProjektUebersicht from '$lib/components/Projekt/ProjektUebersicht.svelte';

	let { data } = $props();
</script>

<ProjektUebersicht
	titel="Vampire Live - Anarchen"
	beschreibung={data.beschreibung}
	spieltermine={data.spieltermine}
	projektUbersicht={data.camarillaUebersicht}
	images={data.bilder}
/>
