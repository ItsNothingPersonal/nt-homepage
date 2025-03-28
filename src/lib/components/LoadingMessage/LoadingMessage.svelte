<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<p class="leading-tight font-normal">
	{@render children()}
</p>
