<script lang="ts">
	import { Heading, P } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let erklaerung = '';

	onMount(() => {
		erklaerung = data.wasIstVampireLive?.erklaerung ?? '';
	});
</script>

<Heading tag="h1" class="mb-4">
	{data.wasIstVampireLive?.ueberschrift}
</Heading>
<P class="text-justify">{@html erklaerung}</P>
