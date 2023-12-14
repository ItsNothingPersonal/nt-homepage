<script lang="ts">
	export let data;
</script>

<h1 class="h1 mb-4 text-center font-bold">
	Hinweis zu Verfassungsfeindlichen Organisationen und deren Propagandamaterial
</h1>
<p
	class={`[&>p]::text-2xl w-full text-gray-900 dark:text-white [&>h2]:text-4xl [&>h2]:font-bold [&>h3]:text-3xl [&>h3]:font-bold [&>p]:mb-2 [&>p]:text-justify [&>p]:first-letter:text-2xl ` +
		`[&>p>a]:underline [&>p>a]:decoration-dotted [&>p>a]:underline-offset-4`}
>
	{@html data.paragraph86und86a?.code}
</p>
