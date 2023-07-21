<script lang="ts">
	import type { Zeittafel } from '$lib/types/zod/zeittafel';
	import { Button, Timeline, TimelineItem } from 'flowbite-svelte';

	export let daten: Zeittafel[];
</script>

<Timeline>
	{#each daten as zeittafelEintrag}
		<TimelineItem title={zeittafelEintrag.titel ?? ''} date={zeittafelEintrag.datum}>
			<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
				{zeittafelEintrag.text}
			</p>
			{#if zeittafelEintrag.link}
				<Button color="alternative" href={zeittafelEintrag.link}>
					Weiterlesen <svg
						class="ml-2 w-3 h-3"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
				</Button>
			{/if}
		</TimelineItem>
	{/each}
</Timeline>
