<script>
	import Footer from '$lib/components/footer.svelte';
	import '../app.css';
	import Navbar from '../lib/components/navbar.svelte';
</script>

<div class="px-4 flex flex-col">
	<Navbar />
	<main class="mx-auto max-w-screen-2xl text-center">
		<slot />
	</main>
</div>

<div class="row-start-2 row-end-3 mt-4">
	<Footer />
</div>
