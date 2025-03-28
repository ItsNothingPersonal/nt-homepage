<script lang="ts">
	import type { FilterButtonConfig } from '$lib/types/filterButtonConfig';
	import type { FilterFunction } from '$lib/types/filterFunction';
	import CircleCheck from '@lucide/svelte/icons/circle-check';
	import DropdownMenuButton from '../DropdownMenuButton/DropdownMenuButton.svelte';

	interface Props {
		config: FilterButtonConfig[];
		defaultOnClick?: FilterFunction | undefined;
		smallSwitch?: boolean;
		rounded?: string;
	}

	let {
		config,
		defaultOnClick = undefined,
		smallSwitch = false,
		rounded = 'rounded-lg!'
	}: Props = $props();
</script>

<div class="mb-4 flex justify-center">
	<div
		class={`btn-group preset-filled-primary-500 grid ${config.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} flex-col rounded-lg p-2 md:flex md:flex-row`}
	>
		{#each config as entry}
			{#if entry.subMenu}
				<DropdownMenuButton
					popUpId="button-group-{entry.label}"
					indicator={entry.indicator}
					{rounded}
					disabled={entry.subMenu.length <= 0}
					offset={15}
				>
					{#snippet popupMenu()}
						{#if entry.subMenu}
							{#each entry.subMenu as subMenu (subMenu.label)}
								<button
									class="btn btn-base capitalize"
									onclick={() =>
										subMenu.onClick
											? subMenu.onClick(entry.store, entry.label)
											: defaultOnClick
												? defaultOnClick(entry.store, entry.label)
												: undefined}
									onkeyup={() =>
										subMenu.onClick
											? subMenu.onClick(entry.store, entry.label)
											: defaultOnClick
												? defaultOnClick(entry.store, entry.label)
												: undefined}
								>
									{subMenu.label}
								</button>
							{/each}
						{/if}
					{/snippet}
					{entry.label}
				</DropdownMenuButton>
			{:else}
				<button
					type="button"
					class="btn preset-filled-primary-500 relative capitalize"
					onclick={() =>
						entry.onClick
							? entry.onClick(entry.store, entry.label)
							: defaultOnClick
								? defaultOnClick(entry.store, entry.label)
								: undefined}
					onkeyup={() =>
						entry.onClick
							? entry.onClick(entry.store, entry.label)
							: defaultOnClick
								? defaultOnClick(entry.store, entry.label)
								: undefined}
				>
					{entry.label}
					<CircleCheck
						additive="replace"
						size="17"
						class={`absolute top-0 right-0 z-20 text-lg ${entry.indicator ? 'block' : 'hidden'}`}
					/>
				</button>
			{/if}
		{/each}
	</div>
</div>
