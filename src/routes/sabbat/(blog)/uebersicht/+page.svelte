<script lang="ts">
	import ProjektUebersicht from '$lib/components/projektUebersicht.svelte';
	import { getImageUrl, isNullOrUndefined } from '$lib/util';

	export let data;

	const images = data.bilder
		?.filter((e) => !isNullOrUndefined(e.directus_files_id))
		.map((e) => getImageUrl(e.directus_files_id, 384));
</script>

<ProjektUebersicht
	titel="Vampire Live - Sabbat"
	beschreibung={data.beschreibung?.code ?? ''}
	spieltermine={data.spieltermine?.code ?? ''}
	email={data.sabbatUebersicht.email}
	{images}
	googleCalendarLink={data.sabbatUebersicht.google_calendar_link}
/>
