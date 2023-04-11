<script lang="ts">
	import {
		Chevron,
		Dropdown,
		DropdownItem,
		NavBrand,
		NavHamburger,
		NavLi,
		NavUl,
		Navbar
	} from 'flowbite-svelte';
	import { menuData } from '../menuData';

	let divClass = 'w-full md:block md:w-auto pr-8';
	let ulClass = 'flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium';
</script>

<Navbar let:hidden let:toggle>
	<NavBrand href="/">
		<img
			src="favicon.ico"
			class="mr-3 h-6 sm:h-9"
			alt="Nächtliches Theater Logo"
		/>
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
			Nächtliches Theater e.V.
		</span>
	</NavBrand>
	<NavHamburger on:click={toggle} />
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
