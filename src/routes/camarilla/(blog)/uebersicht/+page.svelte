<script lang="ts">
	import ProjektUebersicht from '$lib/components/projektUebersicht.svelte';
	import { getImageUrl } from '$lib/util';
	import type { PageData } from './$types';

	export let data: PageData;

	let images = data.bilder?.map((e) => {
		return {
			id: e.camarilla_uebersicht_id,
			imgurl: getImageUrl(e.directus_files_id)
		};
	});
</script>

<ProjektUebersicht
	titel="Vampire Live - Camarilla"
	beschreibung={data.beschreibung?.code ?? ''}
	spieltermine={data.spieltermine?.code ?? ''}
	email={data.camarillaUebersicht.email}
	{images}
	googleCalendarLink={data.camarillaUebersicht.google_calendar_link}
/>
