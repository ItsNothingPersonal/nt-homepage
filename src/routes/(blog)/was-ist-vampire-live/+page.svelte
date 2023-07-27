<script lang="ts">
	import { Heading, P } from 'flowbite-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Heading tag="h1" class="mb-4">
	{data.ueberschrift}
</Heading>
<P
	uppercase
	class="[&>p]:first-letter:text-2xl [&>p]:text-justify [&>p]:mb-2 [&>ul>li>a]:underline [&>ul>li>a]:decoration-dotted [&>ul]:list-disc [&>ul]:list-inside"
>
	{@html data.erklaerung?.code}
</P>
