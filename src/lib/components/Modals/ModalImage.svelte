<script lang="ts">
	import { getModalStore } from '@skeletonlabs/skeleton';
	import { Image, Source } from '@unpic/svelte';
	import type { SvelteComponent } from 'svelte';

	export let parent: SvelteComponent;

	const modalStore = getModalStore();
</script>

{#if $modalStore[0] && $modalStore[0].image}
	<!-- Button -->
	<button
		class="variant-filled btn-icon fixed right-4 top-4 z-50 font-bold shadow-xl"
		on:click={parent.onClose}>×</button
	>
	<!-- Image -->
	<picture
		class="flex max-h-[90vh] max-w-[90%] justify-center overflow-hidden shadow-xl rounded-container-token"
	>
		<Source src={$modalStore[0].image} type="image/webp" layout="fullWidth" cdn="directus" />
		<Image
			src={$modalStore[0].image}
			layout="fullWidth"
			alt={$modalStore[0].meta.alt ?? ''}
			cdn="directus"
			background="auto"
		/>
	</picture>
{/if}
