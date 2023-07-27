<script lang="ts">
	import ProjektUebersicht from '$lib/components/projektUebersicht.svelte';
	import { getImageUrl } from '$lib/util';
	import type { PageData } from './$types';

	export let data: PageData;

	let images = data.bilder?.map((e) => {
		return {
			id: e.sabbat_uebersicht_id,
			imgurl: getImageUrl(e.directus_files_id)
		};
	});
</script>

<ProjektUebersicht
	titel="Vampire Live - Sabbat"
	beschreibung={data.beschreibung?.code ?? ''}
	spieltermine={data.spieltermine?.code ?? ''}
	email={data.email}
	{images}
/>
