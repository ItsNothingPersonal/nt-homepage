<script lang="ts">
	import { socialIconConfig, type SocialMedia } from '$lib/socialIconConfig';
	import { Button } from 'flowbite-svelte';

	export let icon: SocialMedia;
	export let href: string | undefined = undefined;
	export let text: string | undefined = undefined;
</script>

<Button href={socialIconConfig[icon].href ? socialIconConfig[icon].href : href}>
	<svg
		aria-hidden="true"
		class="mr-2 -ml-1 w-5 h-5"
		fill="currentColor"
		viewBox="0 0 16 16"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d={socialIconConfig[icon].svg} />
	</svg>
	{#if icon === 'discord'}
		Discord
	{:else if icon === 'facebook'}
		Facebook
	{:else if icon === 'instagram'}
		Instagram
	{:else}
		{text}
	{/if}
</Button>
