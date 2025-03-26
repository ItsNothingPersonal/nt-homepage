<script lang="ts">
	import { menuData } from '$lib/menuData';
	import { isMobile } from '$lib/util';
	import { Accordion, AccordionItem, getDrawerStore } from '@skeletonlabs/skeleton';
	import NavButton from '../DropdownMenuButton/DropdownMenuButton.svelte';

	const drawerStore = getDrawerStore();
	let innerWidth = $state(0);
	let innerHeight = $state(0);

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<svelte:window bind:innerWidth bind:innerHeight />
<nav class="list-nav xl:flex">
	<ul class="xl:flex xl:list-none xl:items-baseline xl:space-x-2 xl:p-0">
		{#each menuData as menuEntry (menuEntry.id)}
			<li>
				{#if !menuEntry.subData}
					<a class="!rounded-lg capitalize" href={menuEntry.href}>{menuEntry.label}</a>
				{:else if isMobile(innerWidth)}
					<Accordion rounded="!rounded-none">
						<AccordionItem>
							{#snippet summary()}
								{menuEntry.label}
							{/snippet}
							{#snippet content()}
								<ul tabindex="-1">
									{#if menuEntry.subData}
										{#each menuEntry.subData as subMenu}
											<li>
												<a href={subMenu.href} onclick={drawerClose} class="!rounded-none">
													{subMenu.label}
												</a>
											</li>
										{/each}
									{/if}
								</ul>
							{/snippet}
						</AccordionItem>
					</Accordion>
				{:else}
					<NavButton popUpId={menuEntry.id}>
						{#snippet popupMenu()}
							{#if menuEntry.subData}
								{#each menuEntry.subData as subMenu (subMenu.label)}
									<a class="!rounded-lg capitalize" href={subMenu.href}>{subMenu.label}</a>
								{/each}
							{/if}
						{/snippet}
						{menuEntry.label}
					</NavButton>
				{/if}
			</li>
		{/each}
	</ul>
</nav>
