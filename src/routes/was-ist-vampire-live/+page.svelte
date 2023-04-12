<script lang="ts">
	import { Heading, P } from 'flowbite-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="mx-auto px-4">
	<Heading tag="h1" class="mb-4">
		{data.wasIstVampireLive?.ueberschrift}
	</Heading>
	<P>{@html data.wasIstVampireLive?.erklaerung}</P>
</div>
