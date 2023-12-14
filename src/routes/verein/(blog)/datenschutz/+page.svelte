<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

	export let data;
</script>

<h1 class="h1 mb-4 text-center font-bold">Datenschutz</h1>

<Accordion autocollapse class="w-full" rounded="rounded-lg">
	<AccordionItem open>
		<svelte:fragment slot="summary">Datenverarbeitung und -übermittlung</svelte:fragment>
		<svelte:fragment slot="content">
			<p
				class={`[&>p]::text-2xl w-full text-gray-900 dark:text-white [&>h2]:text-4xl [&>h2]:font-bold [&>h3]:text-3xl [&>h3]:font-bold [&>p]:mb-2 [&>p]:text-justify [&>p]:first-letter:text-2xl ` +
					`[&>p>a]:underline [&>p>a]:decoration-dotted [&>p>a]:underline-offset-4`}
			>
				{@html data.datenverarbeitung?.code}
			</p>
		</svelte:fragment>
	</AccordionItem>
	<AccordionItem>
		<svelte:fragment slot="summary">Datenschutzerklärung</svelte:fragment>
		<svelte:fragment slot="content">
			<p
				class={`[&>p]::text-2xl w-full text-gray-900 dark:text-white [&>h2]:text-4xl [&>h2]:font-bold [&>h3]:text-3xl [&>h3]:font-bold [&>p]:mb-2 [&>p]:text-justify [&>p]:first-letter:text-2xl ` +
					`[&>p>a]:underline [&>p>a]:decoration-dotted [&>p>a]:underline-offset-4`}
			>
				{@html data.datenschutzerklaerung?.code}
			</p>
		</svelte:fragment>
	</AccordionItem>
</Accordion>
