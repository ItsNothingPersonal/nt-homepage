<script lang="ts">
	import { Accordion, AccordionItem, Heading, P } from 'flowbite-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Heading tag="h1">Datenschutz</Heading>

<Accordion flush>
	<AccordionItem>
		<span slot="header">Datenverarbeitung und -übermittlung</span>
		<P
			uppercase
			class={`[&>p]:first-letter:text-2xl [&>p]::text-2xl [&>p]:text-justify [&>p]:mb-2 [&>h2]:text-4xl [&>h2]:font-bold [&>h3]:text-3xl [&>h3]:font-bold text-gray-900 dark:text-white w-full ` +
				`[&>p>a]:underline [&>p>a]:decoration-dotted`}
		>
			{@html data.datenverarbeitung?.code}
		</P>
	</AccordionItem>
	<AccordionItem>
		<span slot="header">Datenschutzerklärung</span>
		<P
			uppercase
			class={`[&>p]:first-letter:text-2xl [&>p]::text-2xl [&>p]:text-justify [&>p]:mb-2 [&>h2]:text-4xl [&>h2]:font-bold [&>h3]:text-3xl [&>h3]:font-bold text-gray-900 dark:text-white w-full ` +
				`[&>p>a]:underline [&>p>a]:decoration-dotted`}
		>
			{@html data.datenschutzerklaerung?.code}
		</P>
	</AccordionItem>
</Accordion>
