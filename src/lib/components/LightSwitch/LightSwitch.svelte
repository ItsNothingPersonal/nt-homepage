<script lang="ts">
	import { Switch } from '@skeletonlabs/skeleton-svelte';
	// Icons
	import { ScreenSize } from '$lib/types/sceenSize';
	import IconMoon from '@lucide/svelte/icons/moon';
	import IconSun from '@lucide/svelte/icons/sun';

	// Bind to the checked state
	let mode = $state(true);
	let innerWidth = $state(0);

	function handleModeChange(checked: boolean) {
		mode = checked;
		const htmlElement = document.documentElement;

		if (checked) {
			htmlElement.classList.add('dark');
		} else {
			htmlElement.classList.remove('dark');
		}

		localStorage.theme = checked ? 'dark' : 'light';
	}
</script>

<svelte:window bind:innerWidth />

<Switch
	name="mode"
	controlActive="bg-primary-500"
	checked={mode}
	onCheckedChange={(e) => handleModeChange(e.checked)}
	compact={innerWidth < ScreenSize.SM}
>
	{#snippet inactiveChild()}<IconSun size="14" />{/snippet}
	{#snippet activeChild()}<IconMoon size="14" />{/snippet}
</Switch>
