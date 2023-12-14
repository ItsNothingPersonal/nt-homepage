<script lang="ts">
	import Icon from '@iconify/svelte';
	import { popup, type PopupSettings } from '@skeletonlabs/skeleton';

	export let popUpId: string | number = 1;
	export let indicator: boolean = false;
	export let rounded: string | undefined = '!rounded-lg';
	export let additionalStyles: string | undefined = undefined;

	const popupCombobox: PopupSettings = {
		event: 'click',
		target: `popupCombobox-${popUpId}`,
		closeQuery: 'a[href]'
	};
</script>

<button
	class={`bg-ghost btn relative w-fit ${rounded} ${additionalStyles} border-0`}
	use:popup={popupCombobox}
>
	<span class="capitalize">
		<slot />
	</span>
	<Icon icon="mdi:chevron-down" />

	{#if indicator}
		<Icon icon="material-symbols:check-circle" class="absolute right-1  top-1 text-lg" />
	{/if}
</button>

<div
	class="card bg-surface-100-800-token min-w-[12rem] !rounded-lg border-l-0 py-2 text-left shadow-xl"
	data-popup={`popupCombobox-${popUpId}`}
>
	<div
		class="flex flex-col [&>button:hover]:bg-primary-500/10 [&>button]:!justify-start [&>button]:!rounded-none [&>button]:!text-black [&>button]:dark:!text-white"
	>
		<slot name="popupMenu" />
	</div>
</div>
