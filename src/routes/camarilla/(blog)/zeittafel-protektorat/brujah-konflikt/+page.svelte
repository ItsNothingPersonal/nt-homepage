<script lang="ts">
	import { Heading, Timeline, TimelineItem } from 'flowbite-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Heading tag="h1" class="mb-4">Die Geschichte des Brujah-Konflikts</Heading>
<Timeline>
	{#each data.zeittafel as zeittafelEintrag}
		<TimelineItem title={zeittafelEintrag.titel ?? ''} date={zeittafelEintrag.datum}>
			<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
				{zeittafelEintrag.text}
			</p>
		</TimelineItem>
	{/each}
</Timeline>
