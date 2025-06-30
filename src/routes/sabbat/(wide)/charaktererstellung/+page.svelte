<script lang="ts">
	import LoadingMessage from '$lib/components/LoadingMessage/LoadingMessage.svelte';
	import { sabbatCharaktererstellung } from '$lib/types/zod/sabbatCharaktererstellung';
	import { Accordion } from '@skeletonlabs/skeleton-svelte';

	let { data } = $props();
	let value = $state(['fragebogen']);
</script>

<h1 class="h1 mb-4 text-center font-bold">Charaktererstellung</h1>

{#await data.charaktererstellung}
	<LoadingMessage>Lade Charakteranmeldung</LoadingMessage>
{:then charaktererstellungRaw}
	{@const charaktererstellung = sabbatCharaktererstellung.parse(charaktererstellungRaw)}
	<Accordion {value} onValueChange={(e) => (value = e.value)} collapsible>
		<Accordion.Item value="fragebogen" panelPadding="0px">
			<!-- Control -->
			{#snippet control()}Fragebogen{/snippet}
			<!-- Panel -->
			{#snippet panel()}
				<div class="h-[55vh] max-h-[55vh] overflow-auto sm:h-[70vh] sm:max-h-[70vh]">
					<iframe
						title="Charaktererstellung"
						src={`${charaktererstellung.formular_link}/viewform?embedded=true`}
						style="min-height:400px;"
						allowfullscreen={true}
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
						class="m-0 h-full w-full border-0 p-0"
					></iframe>
				</div>
			{/snippet}
		</Accordion.Item>
		<hr class="hr" />
		<Accordion.Item value="charakterbogen">
			{#snippet control()}Charakterbögen{/snippet}
			{#snippet panel()}
				<ul class="list-outside list-disc">
					{#each charaktererstellung.charakter_boegen_links as link (link)}
						<li>
							<a
								href={link}
								target="_blank"
								rel="noopener noreferrer"
								class="text-primary-500 hover:underline"
							>
								{new URL(link).pathname.split('/').pop()}
							</a>
						</li>
					{/each}
				</ul>
			{/snippet}
		</Accordion.Item>
	</Accordion>
{/await}
