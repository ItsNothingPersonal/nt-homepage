<script lang="ts">
	import LoadingMessage from '$lib/components/LoadingMessage/LoadingMessage.svelte';

	let { data } = $props();
</script>

<h1 class="h1 mb-4 text-center font-bold">
	Hinweis zu Verfassungsfeindlichen Organisationen und deren Propagandamaterial
</h1>

<p
	class={`[&>p]::text-2xl w-full text-gray-900 dark:text-white [&>h2]:text-4xl [&>h2]:font-bold [&>h3]:text-3xl [&>h3]:font-bold [&>p]:mb-2 [&>p]:text-justify [&>p]:first-letter:text-2xl ` +
		`[&>p>a]:underline [&>p>a]:decoration-dotted [&>p>a]:underline-offset-4`}
>
	{#await data.paragraph86und86a}
		<LoadingMessage>Lade Informationen zu Paragraph 86 und 86a</LoadingMessage>
	{:then paragraph86und86a}
		{@html paragraph86und86a?.code}
	{/await}
</p>
