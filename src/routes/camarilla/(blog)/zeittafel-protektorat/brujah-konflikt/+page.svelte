<script lang="ts">
	import Zeittafel from '$lib/components/Zeittafel/Zeittafel.svelte';

	export let data;
</script>

<h1 class="h1 mb-4 text-center font-bold">Die Geschichte des Brujah-Konflikts</h1>
<Zeittafel events={data.zeittafel} />
