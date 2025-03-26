<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="w-full text-5xl font-extrabold text-gray-900 dark:text-white">
	<h1>{page.status}: {page.error?.message}</h1>
</div>
