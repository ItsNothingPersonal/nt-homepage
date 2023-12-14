<script lang="ts">
	import { socialIconConfig, type SocialMedia } from '$lib/socialIconConfig';
	import Icon from '@iconify/svelte';

	export let icon: SocialMedia;
	export let href: string | undefined = undefined;
	export let text: string | undefined = undefined;
	export let style: 'button' | 'icon' = 'button';
	export let iconSize: string | undefined = undefined;

	const buttonStyle = 'variant-filled-primary btn rounded-lg text-lg';
	$: styling = style === 'button' ? buttonStyle : undefined;
</script>

<a
	class={styling}
	role="button"
	href={socialIconConfig[icon].href ? socialIconConfig[icon].href : href}
>
	<Icon icon={socialIconConfig[icon].icon} class="{style === 'button' ? 'mr-2' : ''} {iconSize}" />
	{#if style === 'button'}
		{#if icon === 'discord'}
			Discord
		{:else if icon === 'facebook'}
			Facebook
		{:else if icon === 'instagram'}
			Instagram
		{:else}
			{text}
		{/if}
	{/if}
</a>
