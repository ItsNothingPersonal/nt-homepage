<script>
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<div class="max-w-screen-md">
	{@render children?.()}
</div>
