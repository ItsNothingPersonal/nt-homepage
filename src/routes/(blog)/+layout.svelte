<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children?: Snippet } = $props();
</script>

<div class="max-w-screen-md">
	{@render children?.()}
</div>
