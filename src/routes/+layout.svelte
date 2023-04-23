<script>
	import { DarkMode } from 'flowbite-svelte';
	import '../app.css';
	import Navbar from '../lib/components/navbar.svelte';

	let darkmodebtn =
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg p-2.5 fixed right-2 top-12  md:top-3 md:right-2 z-50';
</script>

<Navbar />
<DarkMode btnClass={darkmodebtn} />

<div class="flex px-4">
	<main class="mx-auto">
		<slot />
	</main>
</div>
