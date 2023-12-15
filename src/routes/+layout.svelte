<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import Navigation from '$lib/components/Navigation/Navigation.svelte';
	import { ScreenSize } from '$lib/types/sceenSize';
	import { isMobile } from '$lib/util';
	import { arrow, autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';
	import {
		AppBar,
		AppShell,
		Drawer,
		LightSwitch,
		getDrawerStore,
		initializeStores,
		storePopup
	} from '@skeletonlabs/skeleton';
	import type { AfterNavigate } from '@sveltejs/kit';
	import '../app.postcss';

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
	initializeStores();

	const drawerStore = getDrawerStore();
	let innerWidth = 0;
	let innerHeight = 0;
	$: mobile = isMobile(innerWidth);

	function drawerOpen(): void {
		drawerStore.open();
	}

	afterNavigate((params: AfterNavigate) => {
		const isNewPage = params.from?.url.pathname !== params.to?.url.pathname;
		const elemPage = document.querySelector('#page');
		if (isNewPage && elemPage !== null) {
			elemPage.scrollTop = 0;
		}
	});
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<Drawer>
	<h2 class="p-4">Navigation</h2>
	<hr />
	<Navigation />
</Drawer>

<AppShell
	slotSidebarLeft="bg-surface-500/5 w-0"
	slotPageContent="px-2 mx-auto mt-2"
	slotHeader="[&>div>div]:gap-0"
>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar
			gridColumns="grid-cols-desktop-top-menu"
			slotLead="place-self-start align-middle self-center"
			slotDefault="place-self-center"
			slotTrail="place-content-end"
		>
			<svelte:fragment slot="lead">
				<button class="btn btn-sm mr-4 items-center xl:hidden" on:click={drawerOpen}>
					<span>
						<svg viewBox="0 0 100 80" class="fill-token h-4 w-4">
							<rect width="100" height="20" />
							<rect y="30" width="100" height="20" />
							<rect y="60" width="100" height="20" />
						</svg>
					</span>
				</button>
				{#if (innerWidth > 420 && mobile) || innerWidth < 360 || innerWidth > ScreenSize.XL + 240}
					<img
						src="/images/Logo_Navbar.webp"
						alt="Nächtliches Theater Logo"
						class="dark:shadow-dark-800 mr-2 rounded-lg shadow-lg"
					/>
				{/if}
				{#if innerWidth >= 360}
					<p class="align-middle">
						<strong class="whitespace-nowrap text-center text-xl">
							Nächtliches Theater e.V.
						</strong>
					</p>
				{/if}
			</svelte:fragment>

			{#if innerWidth >= ScreenSize.XL}
				<Navigation />
			{/if}

			<svelte:fragment slot="trail">
				{#if innerWidth > 310}
					<LightSwitch />
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<!-- Page Route Content -->
	<slot />

	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>
