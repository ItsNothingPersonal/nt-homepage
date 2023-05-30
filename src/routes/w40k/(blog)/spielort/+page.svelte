<script lang="ts">
	import Spielort from '$lib/components/spielort.svelte';
	import { getImageUrl } from '$lib/util';
	import type { PageData } from './$types';

	export let data: PageData;

	let images = data.bilder?.map((e) => {
		return {
			id: e.w40k_spielort_id,
			imgurl: getImageUrl(e.directus_files_id, 768, 512, 'cover')
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
