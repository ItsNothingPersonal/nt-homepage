<script lang="ts">
	import { Carousel } from 'flowbite-svelte';
	import { onMount } from 'svelte';

	export let images: unknown[];
	export let showThumbs: boolean | undefined = false;
	export let showCaptions: boolean | undefined = false;
	export let showIndicators: boolean | undefined = false;
	export let duration: number | undefined = 5000;
	export let style: 'small' | 'normal' = 'normal';
	export let floatLeft = false;

	let additionalCarouselStyles = '';
	let floatLeftStyle = 'float-left md:mr-2';

	onMount(() => {
		if (style === 'small') {
			additionalCarouselStyles = '[&>div]:max-w-sm [&>div]:h-56 md:[&>div]:h-64';
		}
		if (floatLeft === true) {
			additionalCarouselStyles += ` ${floatLeftStyle}`;
		}
	});
</script>

<div
	class="overflow-hidden relative rounded-lg shadow-lg dark:shadow-gray-800 mb-2 {additionalCarouselStyles}"
>
	<Carousel {images} {showThumbs} {showCaptions} {showIndicators} {duration} loop />
</div>
