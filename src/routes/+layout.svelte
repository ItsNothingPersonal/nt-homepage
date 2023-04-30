<script>
	import '../app.css';
	import Navbar from '../lib/components/navbar.svelte';
</script>

<Navbar />

<div class="flex px-4">
	<main class="mx-auto max-w-screen-2xl text-center">
		<slot />
	</main>
</div>
