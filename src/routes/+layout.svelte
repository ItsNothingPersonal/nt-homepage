<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import DropdownMenuButton from '$lib/components/DropdownMenuButton/DropdownMenuButton.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import LightSwitch from '$lib/components/LightSwitch/LightSwitch.svelte';
	import { menuData } from '$lib/menuData';
	import IconX from '@lucide/svelte/icons/x';
	import { Accordion, AppBar, Modal } from '@skeletonlabs/skeleton-svelte';
	import type { AfterNavigate } from '@sveltejs/kit';
	import '../app.css';

	let { children } = $props();

	let showSideMenu = $state(false);

	function drawerOpen(): void {
		showSideMenu = !showSideMenu;
	}

	afterNavigate((params: AfterNavigate) => {
		const isNewPage = params.from?.url.pathname !== params.to?.url.pathname;
		const elemPage = document.querySelector('#page');
		if (isNewPage && elemPage !== null) {
			elemPage.scrollTop = 0;
		}
	});

	function drawerClose() {
		showSideMenu = false;
	}
</script>

<div class="grid h-screen grid-rows-[auto_1fr_auto] overflow-hidden">
	<!-- Header -->
	<AppBar
		headlineClasses="sm:hidden"
		centerClasses="hidden xl:flex justify-center items-center"
		classes="border-b-[1px] border-surface-500/20 bg-surface-50/90 dark:bg-surface-900/90 backdrop-blur"
		leadClasses="flex items-center"
		toolbarGap="gap-2 sm:gap-4"
		trailClasses="hidden sm:flex justify-end col-start-3"
		toolbarClasses="grid grid-cols-desktop-top-menu"
	>
		{#snippet lead()}
			<Modal
				open={showSideMenu}
				onOpenChange={(e) => (showSideMenu = e.open)}
				contentBase="bg-surface-100-900 dark:bg-surface-900-100 p-4 space-y-4 shadow-xl w-[280px] h-screen overflow-y-auto"
				positionerJustify="justify-start"
				positionerAlign=""
				positionerPadding=""
				transitionsPositionerIn={{ x: -480, duration: 200 }}
				transitionsPositionerOut={{ x: -480, duration: 200 }}
			>
				{#snippet trigger()}
					<button
						class="btn btn-sm mr-0 items-center xl:hidden"
						onclick={drawerOpen}
						aria-label="Navigation Aufklappen Button"
					>
						<span>
							<svg viewBox="0 0 100 80" class="dark:fill-surface-50 fill-surface-800 h-4 w-4">
								<rect width="100" height="20" />
								<rect y="30" width="100" height="20" />
								<rect y="60" width="100" height="20" />
							</svg>
						</span>
					</button>
				{/snippet}
				{#snippet content()}
					<header class="flex justify-between">
						<h2 class="h2">Menü</h2>

						<IconX onclick={drawerClose} />
					</header>

					<Accordion rounded="rounded-lg" collapsible classes="w-full flex flex-col items-start">
						<a href="/" class="btn btn-base hover:preset-tonal capitalize" onclick={drawerClose}>
							Home
						</a>

						{#each menuData as menuDataEntry}
							{#if menuDataEntry.subData}
								<Accordion.Item
									value={menuDataEntry.label}
									panelClasses="flex flex-col items-start"
								>
									{#snippet control()}{menuDataEntry.label}{/snippet}
									{#snippet panel()}
										{#if menuDataEntry.subData}
											{#each menuDataEntry.subData as subEntry}
												<a
													href={subEntry.href}
													class="btn btn-base hover:preset-tonal capitalize"
													onclick={drawerClose}
												>
													{subEntry.label}
												</a>
											{/each}
										{/if}
									{/snippet}
								</Accordion.Item>
							{:else if menuDataEntry.href}
								<a
									href={menuDataEntry.href}
									class="btn btn-base hover:preset-tonal capitalize"
									onclick={drawerClose}
								>
									{menuDataEntry.label}
								</a>
							{/if}
						{/each}
					</Accordion>
				{/snippet}
			</Modal>
			<img
				src="/images/Logo_Navbar.webp"
				alt="Nächtliches Theater Logo"
				class="dark:shadow-dark-800 mr-2 hidden rounded-lg shadow-lg sm:block"
			/>
			<p class="align-middle">
				<a href="/">
					<strong class="text-center text-xl whitespace-nowrap sm:text-xl">
						Nächtliches Theater e.V.
					</strong>
				</a>
			</p>
		{/snippet}

		{#snippet trail()}
			<LightSwitch />
		{/snippet}
		{#each menuData as menuDataEntry}
			{#if menuDataEntry.subData}
				<DropdownMenuButton subMenu={menuDataEntry.subData}>
					{menuDataEntry.label}
				</DropdownMenuButton>
			{:else}
				<a href={menuDataEntry.href} class="btn btn-base hover:preset-tonal capitalize">
					{menuDataEntry.label}
				</a>
			{/if}
		{/each}
	</AppBar>

	<main class="overflow-y-auto">
		<div class="container mx-auto flex flex-col place-items-center p-4 pb-16">
			{@render children?.()}
		</div>
	</main>

	<!-- Footer -->
	<footer
		class="border-surface-500/20 bg-surface-50/90 dark:bg-surface-900/90 border-t-[1px] backdrop-blur"
	>
		<Footer />
	</footer>
</div>
