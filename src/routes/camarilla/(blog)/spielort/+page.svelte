<script lang="ts">
	import Spielort from '$lib/components/Spielort/Spielort.svelte';

	export let data;
</script>

<Spielort spielort={data.spielort} bilder={data.bilder} />
