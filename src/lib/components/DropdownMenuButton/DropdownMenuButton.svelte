<script lang="ts">
	import type { SubMenuConfig } from '$lib/types/subMenuConfig';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import ChevronUp from '@lucide/svelte/icons/chevron-up';
	import CircleCheck from '@lucide/svelte/icons/circle-check';
	import { Popover } from '@skeletonlabs/skeleton-svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		subMenu?: SubMenuConfig[];
		offset?: number;
		popUpId?: string | number;
		indicator?: boolean;
		rounded?: string | undefined;
		additionalStyles?: string | undefined;
		disabled?: boolean;
		children?: Snippet;
		popupMenu?: Snippet;
	}

	let { subMenu, offset = 0, children, popupMenu, indicator, disabled }: Props = $props();

	let openState = $state(false);

	function handleOpenChange(e: { open: boolean }) {
		if (disabled) return;
		openState = e.open;
	}
</script>

<Popover
	open={disabled ? false : openState}
	onOpenChange={handleOpenChange}
	positioning={{ placement: 'bottom', offset: { mainAxis: offset } }}
	triggerBase={`btn btn-base hover:preset-tonal capitalize relative ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
	contentBase="card bg-surface-200 dark:bg-surface-800 p-4 space-y-2 max-w-[320px] flex flex-col items-start preset-outlined-primary-500"
>
	{#snippet trigger()}
		{@render children?.()}
		{#if !disabled}
			{#if openState}
				<ChevronDown />
			{:else}
				<ChevronUp />
			{/if}
		{/if}
		<CircleCheck
			additive="replace"
			size="17"
			class={`absolute top-0 right-0 z-20 text-lg ${indicator ? 'block' : 'hidden'}`}
		/>
	{/snippet}
	{#snippet content()}
		{#if popupMenu}
			{@render popupMenu()}
		{:else if subMenu}
			{#each subMenu as entry (entry.label)}
				<a href={entry.href} class="btn btn-base capitalize">{entry.label}</a>
			{/each}
		{/if}
	{/snippet}
</Popover>
