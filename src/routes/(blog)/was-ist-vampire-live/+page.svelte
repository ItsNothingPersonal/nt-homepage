<script lang="ts">
	import { Heading, P } from 'flowbite-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Heading tag="h1" class="mb-4">
	{data.wasIstVampireLive?.ueberschrift}
</Heading>
<P class="text-justify">{@html data.wasIstVampireLive?.erklaerung}</P>
