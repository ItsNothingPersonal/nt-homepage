<script lang="ts">
	import { page } from '$app/stores';
	import { ScreenSize } from '$lib/types/sceenSize';
	import { isNullOrUndefined } from '$lib/util';
	import {
		Chevron,
		CloseButton,
		DarkMode,
		Drawer,
		Dropdown,
		DropdownItem,
		Img,
		NavBrand,
		NavHamburger,
		NavLi,
		NavUl,
		Navbar,
		Sidebar,
		SidebarDropdownWrapper,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper
	} from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import { sineIn } from 'svelte/easing';
	import { menuData } from '../menuData';

	let transitionParams = {
		x: -320,
		duration: 200,
		easing: sineIn
	};
	let breakPoint: number = ScreenSize.MD;
	let width: number;
	let drawerHidden: boolean = true;
	let backdrop: boolean = true;
	let activateClickOutside = true;

	let spanClass = 'pl-2 self-center text-md text-gray-900 whitespace-nowrap dark:text-white';
	let divClass = 'w-full md:block md:w-auto pr-8';
	let ulClass = 'flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium';
	let darkmodebtn =
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg p-2.5 fixed right-2 top-12  md:top-3 md:right-2 z-50';

	$: if (width <= breakPoint) {
		activateClickOutside = false;
	} else {
		activateClickOutside = true;
	}

	$: activeUrl = $page.url.pathname;

	onMount(() => {
		if (width <= breakPoint) {
			activateClickOutside = false;
		} else {
			activateClickOutside = true;
		}
	});

	const toggleSide = () => {
		if (width < breakPoint) {
			drawerHidden = !drawerHidden;
		}
	};
	const toggleDrawer = () => {
		drawerHidden = false;
	};
</script>

<svelte:window bind:innerWidth={width} />

<Navbar let:hidden navDivClass="mx-auto flex flex-wrap justify-between items-center">
	<NavHamburger on:click={toggleDrawer} btnClass="ml-3 lg:hidden" />

	<NavBrand href="/" class="lg:ml-64">
		<Img src="/favicon.ico" alt="Nächtliches Theater Logo" />
		<span class="ml-2 self-center whitespace-nowrap text-xl font-semibold dark:text-white">
			Nächtliches Theater e.V.
		</span>
	</NavBrand>

	<NavUl {hidden} {divClass} {ulClass}>
		{#each menuData as menuEntry}
			{#if menuEntry.subData === undefined}
				<NavLi href={menuEntry.href}>{menuEntry.label}</NavLi>
			{:else}
				<NavLi id={`nav-menu-${menuEntry.id}`} class="cursor-pointer">
					<Chevron aligned>{menuEntry.label}</Chevron>
				</NavLi>
				<Dropdown triggeredBy={`#nav-menu-${menuEntry.id}`} class="w-44 z-20">
					{#each menuEntry.subData as subMenu}
						<DropdownItem><NavLi href={subMenu.href}>{subMenu.label}</NavLi></DropdownItem>
					{/each}
				</Dropdown>
			{/if}
		{/each}
	</NavUl>
</Navbar>

<DarkMode btnClass={darkmodebtn} />

<Drawer
	transitionType="fly"
	{backdrop}
	{transitionParams}
	bind:hidden={drawerHidden}
	bind:activateClickOutside
	width="w-64"
	class="overflow-scroll pb-32"
	id="sidebar"
>
	<div class="flex items-center">
		<CloseButton on:click={() => (drawerHidden = true)} class="mb-4 dark:text-white lg:hidden" />
	</div>
	<Sidebar asideClass="w-54">
		<SidebarWrapper divClass="overflow-y-auto py-4 px-3 rounded dark:bg-gray-800">
			<SidebarGroup>
				<SidebarItem label="Startseite" href="/" on:click={toggleSide} active={activeUrl === `/`} />
				{#each menuData as { label, href, subData }}
					{#if isNullOrUndefined(subData)}
						<SidebarItem
							{label}
							{href}
							{spanClass}
							on:click={toggleSide}
							active={activeUrl === href}
						/>
					{:else}
						<SidebarDropdownWrapper {label}>
							{#each subData ?? [] as { href, label }}
								<SidebarItem
									{label}
									{href}
									{spanClass}
									on:click={toggleSide}
									active={activeUrl === href}
								/>
							{/each}
						</SidebarDropdownWrapper>
					{/if}
				{/each}
			</SidebarGroup>
		</SidebarWrapper>
	</Sidebar>
</Drawer>
