<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	// Stores
	import { getModalStore } from '@skeletonlabs/skeleton';
	import { Image, Source } from '@unpic/svelte';

	// Props
	/** Exposes parent props to this component. */
	export let parent: SvelteComponent;

	const modalStore = getModalStore();

	const cButton = 'fixed top-4 right-4 z-50 font-bold shadow-xl';

	const cImage = 'max-w-[90%] max-h-[90vh] rounded-container-token overflow-hidden shadow-xl';
</script>

{#if $modalStore[0] && $modalStore[0].image}
	<!-- Button -->
	<button class="variant-filled btn-icon {cButton}" on:click={parent.onClose}>×</button>
	<!-- Image -->
	<picture>
		<Source src={$modalStore[0].image} type="image/webp" layout="fullWidth" cdn="directus" />
		<Image
			src={$modalStore[0].image}
			layout="fullWidth"
			alt={$modalStore[0].meta.alt ?? ''}
			class={cImage}
			cdn="directus"
			background="auto"
		/>
	</picture>
{/if}
