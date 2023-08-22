<script lang="ts">
	import { page } from '$app/stores';
	import { isNullOrUndefined } from '$lib/util';
	import {
		Chevron,
		CloseButton,
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
	let breakPoint: number = 1050;
	let width: number;
	let height: number;
	let drawerHidden = true;
	let backdrop = true;
	let activateClickOutside = true;
	$: mobile = width < breakPoint;

	let spanClass = 'pl-2 self-center text-md text-light-800 whitespace-nowrap dark:text-white';
	let divClass = 'w-full md:block md:w-auto pr-8';
	let ulClass = 'flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium';

	onMount(() => {
		if (mobile) {
			activateClickOutside = false;
		} else {
			activateClickOutside = true;
		}
	});

	const toggleSide = () => {
		drawerHidden = !drawerHidden;
	};
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

<Navbar
	navClass="px-2 sm:px-4 py-2.5 w-full top-0 left-0 right-0 z-10 inset-x-0 fixed border-b border-light-500 dark:border-dark-500 pb-2 bg-light-100 dark:bg-dark-800"
>
	{#if mobile}
		<NavHamburger on:click={toggleSide} btnClass="ml-3" />
	{/if}

	<NavBrand href="/" class="pl-4 2xl:pl-0 2xl:ml-64">
		{#if (width > 395 && mobile) || (width > height && mobile) || width < 315 || width > 1280}
			<Img
				src="/images/Logo_Navbar.webp"
				imgClass="max-h-14"
				alt="Nächtliches Theater Logo"
				class="rounded-lg shadow-lg dark:shadow-dark-800"
			/>
		{/if}
		{#if width > 315}
			<span class="ml-2 self-center whitespace-nowrap text-xl font-semibold dark:text-white">
				Nächtliches Theater e.V.
			</span>
		{/if}
	</NavBrand>

	{#if !mobile}
		<NavUl {divClass} {ulClass}>
			{#each menuData as menuEntry}
				{#if menuEntry.subData === undefined}
					<NavLi href={menuEntry.href}>{menuEntry.label}</NavLi>
				{:else}
					<NavLi id={`nav-menu-${menuEntry.id}`} class="cursor-pointer">
						<Chevron aligned>{menuEntry.label}</Chevron>
					</NavLi>
					<Dropdown
						triggeredBy={`#nav-menu-${menuEntry.id}`}
						containerClass="divide-y w-44 z-20 bg-light-50 dark:bg-dark-700"
					>
						{#each menuEntry.subData as subMenu}
							<DropdownItem><NavLi href={subMenu.href}>{subMenu.label}</NavLi></DropdownItem>
						{/each}
					</Dropdown>
				{/if}
			{/each}
		</NavUl>
	{/if}
</Navbar>

<Drawer
	transitionType="fly"
	{backdrop}
	{transitionParams}
	bind:hidden={drawerHidden}
	bind:activateClickOutside
	width="w-64"
	class="overflow-scroll pb-32 bg-light-50 dark:bg-dark-700"
	id="sidebar"
>
	<div class="flex items-center">
		<CloseButton on:click={() => (drawerHidden = true)} class="mb-4 dark:text-white lg:hidden" />
	</div>
	<Sidebar asideClass="w-54">
		<SidebarWrapper divClass="overflow-y-auto py-4 px-3 rounded bg-light-50 dark:bg-dark-700">
			<SidebarGroup>
				<SidebarItem
					label="Startseite"
					href="/"
					on:click={toggleSide}
					active={$page.url.pathname === `/`}
				/>
				{#each menuData as { label, href, subData }}
					{#if isNullOrUndefined(subData)}
						<SidebarItem
							{label}
							{href}
							{spanClass}
							on:click={toggleSide}
							active={$page.url.pathname === href}
						/>
					{:else}
						<SidebarDropdownWrapper {label}>
							{#each subData ?? [] as { href, label }}
								<SidebarItem
									{label}
									{href}
									{spanClass}
									on:click={toggleSide}
									active={$page.url.pathname === href}
								/>
							{/each}
						</SidebarDropdownWrapper>
					{/if}
				{/each}
			</SidebarGroup>
		</SidebarWrapper>
	</Sidebar>
</Drawer>
