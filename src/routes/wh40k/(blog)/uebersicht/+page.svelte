<script lang="ts">
	import ProjektUebersicht from '$lib/components/Projekt/ProjektUebersicht.svelte';

	export let data;
</script>

<ProjektUebersicht
	titel="Warhammer 40K"
	beschreibung={data.beschreibung}
	spieltermine={data.spieltermine}
	projektUbersicht={data.wh40kUebersicht}
	images={data.bilder}
/>
