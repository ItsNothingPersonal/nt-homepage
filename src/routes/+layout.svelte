<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import { DarkMode } from 'flowbite-svelte';
	import '../app.css';
	import Navbar from '../lib/components/navbar.svelte';

	let width: number;
	let height: number;
	let breakPoint: number = 1050;

	$: mobile = width < breakPoint;
	$: quer = width > height;
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />
<div class="px-4 flex flex-col">
	<DarkMode
		btnClass={'text-light-500 dark:text-dark-400 hover:bg-light-100 dark:hover:bg-dark-700 focus:outline-none ' +
			'focus:ring-4 focus:ring-light-200 dark:focus:ring-dark-700 rounded-lg text-lg p-2.5 fixed right-2 top-12 ' +
			'md:top-3 md:right-2 z-50'}
	/>
	<Navbar />
	{#if mobile && quer}
		<main class="mx-auto max-w-screen-2xl text-center mt-4">
			<slot />
		</main>
	{:else}
		<main class="mx-auto max-w-screen-2xl text-center mt-20 sm:mt-24 lg:mt-28 xl:mt-24">
			<slot />
		</main>
	{/if}
</div>

<div class="row-start-2 row-end-3 mt-4">
	<Footer />
</div>
