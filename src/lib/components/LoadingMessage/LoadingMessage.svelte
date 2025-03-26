<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<p class="font-normal leading-tight">
	{@render children()}
</p>
