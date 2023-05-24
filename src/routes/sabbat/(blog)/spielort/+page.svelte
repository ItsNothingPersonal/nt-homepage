<script lang="ts">
	import Spielort from '$lib/components/spielort.svelte';
	import { getImageUrl } from 'services/directus';
	import type { PageData } from './$types';

	export let data: PageData;

	let images = data.bilder?.map((e) => {
		return {
			id: e.sabbat_spielort_id,
			imgurl: getImageUrl(e.directus_files_id)
		};
	});
</script>

<Spielort
	name={data.spielort?.spielort_name ?? ''}
	strasse={data.spielort?.spielort_strasse ?? ''}
	plz={data.spielort?.spielort_plz ?? ''}
	ort={data.spielort?.spielort_ort ?? ''}
	bilder={images}
	karte={data.spielort?.spielort_karte ?? ''}
/>
