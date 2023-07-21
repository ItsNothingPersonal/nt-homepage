<script lang="ts">
	import Zeittafel from '$lib/components/zeittafel.svelte';
	import { Heading } from 'flowbite-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Heading tag="h1" class="mb-4">Zeittafel der Diozöse Nürnberg</Heading>
<Zeittafel daten={data.zeittafel} />
