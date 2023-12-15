<script lang="ts">
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	export let images: string[];
	export let timeout: number = 5000;
	export let size: string = 'w-96';
	export let floatLeft = false;

	let additionalCarouselStyles = '';
	const floatLeftStyle = 'float-left md:mr-4';

	onMount(() => {
		if (floatLeft === true) {
			additionalCarouselStyles = floatLeftStyle;
		}
	});

	let elemCarousel: HTMLDivElement;

	function carouselLeft(): void {
		const x =
			elemCarousel.scrollLeft === 0
				? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
				: elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
		elemCarousel.scroll(x, 0);
	}

	async function carouselRight(): Promise<void> {
		const x =
			elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
				? 0 // loop
				: elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
		elemCarousel.scroll(x, 0);

		await new Promise(() => setTimeout(carouselRight, timeout));
	}

	onMount(async () => {
		await new Promise(() => setTimeout(carouselRight, timeout));
	});
</script>

<div
	class="card relative flex items-center overflow-hidden rounded-lg p-2 {size} {additionalCarouselStyles}"
>
	<!-- Button: Left -->
	<button
		type="button"
		class="variant-glass btn-icon absolute left-4 border-2 border-white dark:border-primary-500"
		on:click={carouselLeft}
		aria-label="Button Bild zurück"
	>
		<Icon icon="mdi:arrow-left" />
	</button>
	<!-- Full Images -->
	<div
		bind:this={elemCarousel}
		class="hide-scrollbar flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
	>
		{#each images as image, i}
			<img
				class="snap-center rounded-lg"
				src={image}
				alt={image}
				loading={i == 0 ? 'eager' : 'lazy'}
			/>
		{/each}
	</div>
	<!-- Button: Right -->
	<button
		type="button"
		class="variant-glass btn-icon absolute right-4 border-2 border-white dark:border-primary-500"
		on:click={carouselRight}
		aria-label="Button Bild weiter"
	>
		<Icon icon="mdi:arrow-right" />
	</button>
</div>
