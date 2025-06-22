<script lang="ts">
	import ImageGallery from '$lib/components/ImageGallery/ImageGallery.svelte';

	let { data } = $props();
</script>

<h1 class="h1 mb-4 text-center font-bold">Galerie</h1>
<ImageGallery images={data.images} folders={data.imageFolders} />
