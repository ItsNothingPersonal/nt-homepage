<script lang="ts">
	import Zeittafel from '$lib/components/Zeittafel/Zeittafel.svelte';

	let { data } = $props();
</script>

<h1 class="h1 mb-4 text-center font-bold">Zeittafel der Diozöse Nürnberg</h1>
<Zeittafel events={data.zeittafel} />
