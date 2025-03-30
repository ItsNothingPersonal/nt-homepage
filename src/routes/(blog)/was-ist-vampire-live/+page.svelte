<script lang="ts">
	import LoadingMessage from '$lib/components/LoadingMessage/LoadingMessage.svelte';

	let { data } = $props();
</script>

{#await data.wasIstVampireLive}
	<LoadingMessage>Lade VampireLive-Erklärung</LoadingMessage>
{:then wasIstVampireLive}
	<h1 class="h1 mb-2 text-center font-bold">{wasIstVampireLive.ueberschrift}</h1>
{/await}

{#await data.erklaerung}
	<LoadingMessage>Lade VampireLive-Erklärung</LoadingMessage>
{:then erklaerung}
	<p
		class="[&>p]:mb-2 [&>p]:text-justify [&>p]:first-letter:text-2xl [&>ul]:list-inside [&>ul]:list-disc [&>ul>li>a]:underline [&>ul>li>a]:decoration-dotted [&>ul>li>a]:underline-offset-4"
	>
		{@html erklaerung}
	</p>
{/await}
