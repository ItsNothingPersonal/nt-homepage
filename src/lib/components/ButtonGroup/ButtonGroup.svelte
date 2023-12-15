<script lang="ts">
	import type { FilterButtonConfig } from '$lib/types/filterButtonConfig';
	import type { FilterFunction } from '$lib/types/filterFunction';
	import Icon from '@iconify/svelte';
	import NavButton from '../DropdownMenuButton/DropdownMenuButton.svelte';

	export let config: FilterButtonConfig[];
	export let defaultOnClick: FilterFunction | undefined = undefined;
	export let smallSwitch: boolean = false;
	export let rounded: string = '!rounded-lg';
</script>

{#if !smallSwitch}
	<div class="mb-4 flex w-full justify-center">
		<div
			class="variant-filled btn-group [&>*+*]:border-surface-200 [&>button:not(:first-of-type)]:border-l"
		>
			{#each config as entry}
				{#if entry.subMenu}
					<NavButton popUpId="button-group" indicator={entry.indicator} {rounded}>
						<svelte:fragment slot="popupMenu">
							{#each entry.subMenu as subMenu (subMenu.label)}
								<button
									class="!rounded-none"
									on:click={() =>
										subMenu.onClick
											? subMenu.onClick(entry.label)
											: defaultOnClick
												? defaultOnClick(entry.label)
												: undefined}
									on:keyup={() =>
										subMenu.onClick
											? subMenu.onClick(entry.label)
											: defaultOnClick
												? defaultOnClick(entry.label)
												: undefined}
								>
									{subMenu.label}
								</button>
							{/each}
						</svelte:fragment>
						{entry.label}
					</NavButton>
				{:else}
					<button
						class="relative"
						on:click={() =>
							entry.onClick
								? entry.onClick(entry.label)
								: defaultOnClick
									? defaultOnClick(entry.label)
									: undefined}
						on:keyup={() =>
							entry.onClick
								? entry.onClick(entry.label)
								: defaultOnClick
									? defaultOnClick(entry.label)
									: undefined}
					>
						{entry.label}
						{#if entry.indicator}
							<Icon icon="material-symbols:check-circle" class="absolute right-1 top-1 text-lg" />
						{/if}
					</button>
				{/if}
			{/each}
		</div>
	</div>
{:else}
	<div class="mb-4 grid grid-cols-2 gap-2">
		{#each config as entry}
			{#if entry.subMenu}
				<NavButton
					popUpId="button-group"
					indicator={entry.indicator}
					rounded="!rounded-none"
					additionalStyles={'variant-filled w-full'}
				>
					<svelte:fragment slot="popupMenu">
						{#each entry.subMenu as subMenu (subMenu.label)}
							<button
								class="!rounded-none"
								on:click={() =>
									subMenu.onClick
										? subMenu.onClick(entry.label)
										: defaultOnClick
											? defaultOnClick(entry.label)
											: undefined}
								on:keyup={() =>
									subMenu.onClick
										? subMenu.onClick(entry.label)
										: defaultOnClick
											? defaultOnClick(entry.label)
											: undefined}
							>
								{subMenu.label}
							</button>
						{/each}
					</svelte:fragment>
					{entry.label}
				</NavButton>
			{:else}
				<button
					class="variant-filled relative h-12"
					on:click={() =>
						entry.onClick
							? entry.onClick(entry.label)
							: defaultOnClick
								? defaultOnClick(entry.label)
								: undefined}
					on:keyup={() =>
						entry.onClick
							? entry.onClick(entry.label)
							: defaultOnClick
								? defaultOnClick(entry.label)
								: undefined}
				>
					{entry.label}
					{#if entry.indicator}
						<Icon icon="material-symbols:check-circle" class="absolute right-1 top-1 text-lg" />
					{/if}
				</button>
			{/if}
		{/each}
	</div>
{/if}
