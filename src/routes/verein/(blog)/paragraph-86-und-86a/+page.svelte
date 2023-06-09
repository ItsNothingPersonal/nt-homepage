<script lang="ts">
	import { Heading, P } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let paragraph86und86a = '';

	onMount(() => {
		paragraph86und86a = data.paragraph86und86aCompiled?.code ?? '';
	});
</script>

<Heading tag="h1" class="mb-4">
	Hinweis zu Verfassungsfeindlichen Organisationen und deren Propagandamaterial
</Heading>
<P
	uppercase
	class={`[&>p]:first-letter:text-2xl [&>p]::text-2xl [&>p]:text-justify [&>p]:mb-2 [&>h2]:text-4xl [&>h2]:font-bold [&>h3]:text-3xl [&>h3]:font-bold text-gray-900 dark:text-white w-full ` +
		`[&>p>a]:underline [&>p>a]:decoration-dotted`}
>
	{@html paragraph86und86a}
</P>
