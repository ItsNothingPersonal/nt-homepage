<script lang="ts">
	import LoadingMessage from '$lib/components/LoadingMessage/LoadingMessage.svelte';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

	let { data } = $props();
</script>

<h1 class="h1 mb-4 text-center font-bold">Datenschutz</h1>

<Accordion autocollapse class="w-full" rounded="rounded-lg">
	{#await data.datenverarbeitung}
		<LoadingMessage>Lade Datenverarbeitungserklärung</LoadingMessage>
	{:then datenverarbeitung}
		<AccordionItem open>
			{#snippet summary()}
				Datenverarbeitung und -übermittlung
			{/snippet}
			{#snippet content()}
				<p
					class={`[&>p]::text-2xl w-full text-gray-900 dark:text-white [&>h2]:text-4xl [&>h2]:font-bold [&>h3]:text-3xl [&>h3]:font-bold [&>p]:mb-2 [&>p]:text-justify [&>p]:first-letter:text-2xl ` +
						`[&>p>a]:underline [&>p>a]:decoration-dotted [&>p>a]:underline-offset-4`}
				>
					{@html datenverarbeitung?.code}
				</p>
			{/snippet}
		</AccordionItem>
	{/await}

	{#await data.datenschutzerklaerung}
		<LoadingMessage>Lade Datenschutzerklärung</LoadingMessage>
	{:then datenschutzerklaerung}
		<AccordionItem>
			{#snippet summary()}
				Datenschutzerklärung
			{/snippet}
			{#snippet content()}
				<p
					class={`[&>p]::text-2xl w-full text-gray-900 dark:text-white [&>h2]:text-4xl [&>h2]:font-bold [&>h3]:text-3xl [&>h3]:font-bold [&>p]:mb-2 [&>p]:text-justify [&>p]:first-letter:text-2xl ` +
						`[&>p>a]:underline [&>p>a]:decoration-dotted [&>p>a]:underline-offset-4`}
				>
					{@html datenschutzerklaerung?.code}
				</p>
			{/snippet}
		</AccordionItem>
	{/await}
</Accordion>
