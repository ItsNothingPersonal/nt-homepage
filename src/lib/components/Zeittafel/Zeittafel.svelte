<script lang="ts">
	import type { Zeittafel } from '$lib/types/zod/zeittafel';
	import Icon from '@iconify/svelte';
	import LoadingMessage from '../LoadingMessage/LoadingMessage.svelte';

	interface Props {
		events: Promise<Zeittafel[]>;
	}

	let { events }: Props = $props();
</script>

{#await events}
	<LoadingMessage>Lade Zeittafel</LoadingMessage>
{:then events}
	<div class="relative">
		<div class="absolute top-0 left-4 h-full w-1 bg-gray-300"></div>

		{#each events as event (event.id)}
			<div class="mb-6 ml-8 flex flex-col items-center">
				{#if event.titel}
					<Icon icon="octicon:dot-fill-24" class="absolute left-[0.2rem] self-center text-3xl" />

					<div class="flex justify-center">
						<h2 class="text-enter flex items-center text-xl font-semibold">
							{event.titel}
						</h2>
					</div>
				{/if}
				<div class="flex items-center justify-center">
					{#if !event.titel}
						<Icon icon="octicon:dot-fill-24" class="absolute left-[0.2rem] self-center text-3xl" />
					{/if}
					<p class="text-gray-600">{event.datum}</p>
				</div>
				<p class="text-justify">{event.text}</p>
				{#if event.link}
					<a
						href={event.link}
						rel="noopener noreferrer"
						class="preset-filled-primary-500 btn mt-2 w-40"
						role="button"
					>
						Weiterlesen
					</a>
				{/if}
			</div>
		{/each}
	</div>
{/await}
