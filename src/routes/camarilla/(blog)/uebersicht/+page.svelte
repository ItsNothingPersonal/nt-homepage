<script lang="ts">
	import ProjektUebersicht from '$lib/components/Projekt/ProjektUebersicht.svelte';

	export let data;
</script>

<ProjektUebersicht
	titel="Vampire Live - Camarilla"
	beschreibung={data.beschreibung}
	spieltermine={data.spieltermine}
	projektUbersicht={data.camarillaUebersicht}
	images={data.bilder}
/>
