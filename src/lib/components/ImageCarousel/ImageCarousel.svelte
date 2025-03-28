<script lang="ts">
	import Icon from '@iconify/svelte';
	import { onDestroy, onMount } from 'svelte';

	interface Props {
		images: string[];
		timeout?: number;
		size?: string;
		floatLeft?: boolean;
	}

	let { images, timeout = 5000, size = 'w-96', floatLeft = false }: Props = $props();

	let additionalCarouselStyles = $state('');
	let elemCarousel: HTMLDivElement | undefined = $state();
	let timeoutId: NodeJS.Timeout;

	const floatLeftStyle = 'float-left md:mr-4';

	onMount(() => {
		if (floatLeft === true) {
			additionalCarouselStyles = floatLeftStyle;
		}

		timeoutId = setTimeout(carouselRight, timeout);
	});

	onDestroy(() => {
		clearTimeout(timeoutId);
	});

	function carouselLeft(): void {
		if (!elemCarousel) return;

		const x =
			elemCarousel.scrollLeft === 0
				? elemCarousel.clientWidth * elemCarousel.childElementCount
				: elemCarousel.scrollLeft - elemCarousel.clientWidth;
		elemCarousel.scroll(x, 0);
	}

	async function carouselRight(): Promise<void> {
		if (!elemCarousel) return;

		const x =
			elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
				? 0
				: elemCarousel.scrollLeft + elemCarousel.clientWidth;
		elemCarousel.scroll(x, 0);

		clearTimeout(timeoutId);
		timeoutId = setTimeout(carouselRight, timeout);
	}
</script>

<div
	class="card relative flex items-center overflow-hidden rounded-lg p-2 {size} {additionalCarouselStyles}"
>
	<!-- Button: Left -->
	<button
		type="button"
		class="preset-tonal btn-icon dark:border-primary-500 absolute left-4 border-2 border-white"
		onclick={carouselLeft}
		aria-label="Button Bild zurück"
	>
		<Icon icon="mdi:arrow-left" />
	</button>
	<!-- Full Images -->
	<div bind:this={elemCarousel} class="flex snap-x snap-mandatory overflow-x-hidden scroll-smooth">
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
		class="preset-tonal btn-icon dark:border-primary-500 absolute right-4 border-2 border-white"
		onclick={carouselRight}
		aria-label="Button Bild weiter"
	>
		<Icon icon="mdi:arrow-right" />
	</button>
</div>
