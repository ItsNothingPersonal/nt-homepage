<script lang="ts">
	import { titleCaseWord } from '$lib/util';
	import Icon from '@iconify/svelte';
	import { socialIconConfig, type SocialMedia } from './socialIconConfig';

	interface Props {
		icon: SocialMedia;
		href?: string | undefined;
		text?: string | undefined;
		style?: 'button' | 'icon';
		iconSize?: string | undefined;
	}

	let {
		icon,
		href = undefined,
		text = undefined,
		style = 'button',
		iconSize = undefined
	}: Props = $props();

	const buttonStyle = 'preset-filled-primary-500 btn rounded-lg text-lg w-full';
	let styling = $derived(style === 'button' ? buttonStyle : undefined);
</script>

<a
	class={styling}
	role="button"
	href={socialIconConfig[icon].href ? socialIconConfig[icon].href : href}
	aria-label={icon !== 'email'
		? `Link zu unserem Social-Media-Auftritt bei ${titleCaseWord(icon)}`
		: `E-Mail-Adresse ${text}`}
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
