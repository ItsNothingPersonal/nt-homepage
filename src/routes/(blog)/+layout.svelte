<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children?: Snippet } = $props();
</script>

<div class="max-w-(--breakpoint-md)">
	{@render children?.()}
</div>
