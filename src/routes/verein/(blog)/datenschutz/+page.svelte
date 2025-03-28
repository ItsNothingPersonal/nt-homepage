<script lang="ts">
	import LoadingMessage from '$lib/components/LoadingMessage/LoadingMessage.svelte';
	import { Accordion } from '@skeletonlabs/skeleton-svelte';

	let { data } = $props();
</script>

<h1 class="h1 mb-4 text-center font-bold">Datenschutz</h1>

<Accordion rounded="rounded-lg" collapsible classes="w-full">
	<Accordion.Item value="datenverarbeitung">
		{#snippet control()}Datenverarbeitung{/snippet}
		{#snippet panel()}
			{#await data.datenverarbeitung}
				<LoadingMessage>Lade Datenverarbeitungserklärung</LoadingMessage>
			{:then datenverarbeitung}
				{@html datenverarbeitung?.code}
			{/await}
		{/snippet}
	</Accordion.Item>
	<hr class="hr" />
	<Accordion.Item value="datenschutz">
		{#snippet control()}Datenschutz{/snippet}
		{#snippet panel()}
			{#await data.datenschutzerklaerung}
				<LoadingMessage>Lade Datenschutzerklärung</LoadingMessage>
			{:then datenschutzerklaerung}
				{@html datenschutzerklaerung?.code}
			{/await}
		{/snippet}
	</Accordion.Item>
</Accordion>
