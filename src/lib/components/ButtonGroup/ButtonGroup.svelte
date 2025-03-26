<script lang="ts">
	import type { FilterButtonConfig } from '$lib/types/filterButtonConfig';
	import type { FilterFunction } from '$lib/types/filterFunction';
	import Icon from '@iconify/svelte';
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

{#if !smallSwitch}
	<div class="mb-4 flex w-full justify-center">
		<div
			class="variant-filled btn-group [&>*+*]:border-surface-200 [&>button:not(:first-of-type)]:border-l"
		>
			{#each config as entry}
				{#if entry.subMenu}
					<DropdownMenuButton
						popUpId="button-group-{entry.label}"
						indicator={entry.indicator}
						{rounded}
						disabled={entry.subMenu.length <= 0}
					>
						{#snippet popupMenu()}
							{#if entry.subMenu}
								{#each entry.subMenu as subMenu (subMenu.label)}
									<button
										class="rounded-none!"
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
						class="relative"
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
		{#each config as entry, i}
			{#if entry.subMenu}
				<DropdownMenuButton
					popUpId="button-group-{entry.label}"
					indicator={entry.indicator}
					rounded="rounded-none!"
					additionalStyles={`variant-filled w-full ${
						config.length % 2 !== 0 && config.length === i + 1 ? 'col-span-2' : undefined
					}`}
					disabled={entry.subMenu.length <= 0}
				>
					{#snippet popupMenu()}
						{#if entry.subMenu}
							{#each entry.subMenu as subMenu (subMenu.label)}
								<button
									class="rounded-none!"
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
					class={`variant-filled relative h-12 ${
						config.length % 2 !== 0 && config.length === i + 1 ? 'col-span-2' : undefined
					}`}
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
					{#if entry.indicator}
						<Icon icon="material-symbols:check-circle" class="absolute right-1 top-1 text-lg" />
					{/if}
				</button>
			{/if}
		{/each}
	</div>
{/if}
