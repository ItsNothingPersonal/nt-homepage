<script lang="ts">
	import { socialIconConfig } from '$lib/socialIconConfig';
	import { Footer, FooterCopyright, FooterIcon } from 'flowbite-svelte';
</script>

<Footer footerType="socialmedia" class="row-start-2 row-end-3">
	<div class="sm:flex sm:items-center sm:justify-between">
		<FooterCopyright href="/" by="Nächtliches Theater e.V." year={2023} />
		<div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
			<FooterIcon href={socialIconConfig['discord'].href} class="text-gray-400 hover:text-gray-900">
				<svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path fill-rule="evenodd" d={socialIconConfig['discord'].svg} clip-rule="evenodd" />
				</svg>
			</FooterIcon>
			<FooterIcon
				href={socialIconConfig['instagram'].href}
				class="text-gray-400 hover:text-gray-900"
			>
				<svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path fill-rule="evenodd" d={socialIconConfig['instagram'].svg} clip-rule="evenodd" />
				</svg>
			</FooterIcon>
			<FooterIcon
				href={socialIconConfig['facebook'].href}
				class="text-gray-400 hover:text-gray-900"
			>
				<svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path fill-rule="evenodd" d={socialIconConfig['facebook'].svg} clip-rule="evenodd" />
				</svg>
			</FooterIcon>
		</div>
	</div>
</Footer>
