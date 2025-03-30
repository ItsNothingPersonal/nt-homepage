<script lang="ts">
	import { getOriginalFile } from '$lib/util';
	import { Modal } from '@skeletonlabs/skeleton-svelte';
	import { Image, Source } from '@unpic/svelte';

	interface Props {
		id: string;
		description: string | undefined | null;
		loading: 'eager' | 'lazy';
	}

	let { id, description, loading = 'eager' }: Props = $props();

	let openState = $state(false);
</script>

<Modal
	open={openState}
	onOpenChange={(e) => (openState = e.open)}
	triggerBase="btn preset-tonal p-2"
	contentBase="card bg-surface-100-900 p-2 space-y-4 shadow-xl"
	backdropClasses="backdrop-blur-sm"
>
	{#snippet trigger()}
		<picture>
			<Source src={getOriginalFile(id)} type="image/webp" layout="fullWidth" cdn="directus" />
			<Image
				src={getOriginalFile(id)}
				layout="fullWidth"
				alt={description ?? ''}
				class="rounded-lg"
				cdn="directus"
				background="auto"
				{loading}
			/>
		</picture>
	{/snippet}
	{#snippet content()}
		<button onclick={() => (openState = false)}>
			<img
				class="h-[90vh] max-h-fit w-auto snap-center rounded-lg object-contain"
				src={getOriginalFile(id)}
				alt={description}
				loading="lazy"
			/>
		</button>
	{/snippet}
</Modal>
