<script>
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<div class="max-w-(--breakpoint-md)">
	{@render children?.()}
</div>
