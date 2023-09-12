<script lang="ts">
	import { socialIconConfig } from '$lib/socialIconConfig';
	import { Footer, FooterCopyright, FooterIcon } from 'flowbite-svelte';
</script>

<Footer
	footerType="socialmedia"
	class="row-start-2 row-end-3 border-t border-light-500 bg-light-100 dark:border-dark-500 dark:bg-dark-950"
>
	<div class="sm:flex sm:items-center sm:justify-between">
		<FooterCopyright href="/" by="Nächtliches Theater e.V." year={2023} />
		<div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
			<FooterIcon href={socialIconConfig['discord'].href} class="text-gray-400 hover:text-gray-900">
				<svg class="h-10 w-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path fill-rule="evenodd" d={socialIconConfig['discord'].svg} clip-rule="evenodd" />
				</svg>
			</FooterIcon>
			<FooterIcon
				href={socialIconConfig['instagram'].href}
				class="text-gray-400 hover:text-gray-900"
			>
				<svg class="h-10 w-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path fill-rule="evenodd" d={socialIconConfig['instagram'].svg} clip-rule="evenodd" />
				</svg>
			</FooterIcon>
			<FooterIcon
				href={socialIconConfig['facebook'].href}
				class="text-gray-400 hover:text-gray-900"
			>
				<svg class="h-10 w-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path fill-rule="evenodd" d={socialIconConfig['facebook'].svg} clip-rule="evenodd" />
				</svg>
			</FooterIcon>
		</div>
	</div>
</Footer>
