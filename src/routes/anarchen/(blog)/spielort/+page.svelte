<script lang="ts">
	import Spielort from '$lib/components/Spielort/Spielort.svelte';

	let { data } = $props();
</script>

<Spielort spielort={data.spielort} bilder={data.bilder} />
