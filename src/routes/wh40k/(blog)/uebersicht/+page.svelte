<script lang="ts">
	import ProjektUebersicht from '$lib/components/projektUebersicht.svelte';
	import { getImageUrl, isNullOrUndefined } from '$lib/util';
	import type { PageData } from './$types';

	export let data: PageData;

	const images = data.bilder
		?.filter((e) => !isNullOrUndefined(e.directus_files_id))
		.map((e) => getImageUrl(e.directus_files_id, 384));
</script>

<ProjektUebersicht
	titel="Warhammer 40K"
	beschreibung={data.beschreibung?.code ?? ''}
	spieltermine={data.spieltermine?.code ?? ''}
	email={data.wh40kUebersicht.email}
	{images}
	googleCalendarLink={data.wh40kUebersicht.google_calendar_link}
/>
