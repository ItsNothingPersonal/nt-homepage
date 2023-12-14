<script lang="ts">
	import Spielort from '$lib/components/spielort.svelte';
	import { getImageUrl, isNullOrUndefined } from '$lib/util';
	import type { PageData } from './$types';

	export let data: PageData;

	const images = data.bilder
		?.filter((e) => !isNullOrUndefined(e.directus_files_id))
		.map((e) => getImageUrl(e.directus_files_id, 768, 512, 'inside'));
</script>

<Spielort
	name={data.spielort?.spielort_name ?? ''}
	strasse={data.spielort?.spielort_strasse ?? ''}
	plz={data.spielort?.spielort_plz ?? ''}
	ort={data.spielort?.spielort_ort ?? ''}
	bilder={images}
	karte={data.spielort?.spielort_karte ?? ''}
/>
