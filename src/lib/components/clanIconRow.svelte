<script lang="ts">
	import { A, Heading, Img, P } from 'flowbite-svelte';
	import type { Clans } from '../../services/directus';

	export let clans: Clans[];
	export let heading: string;
</script>

{#if clans.length > 0}
	<Heading tag="h2" class="mb-4">{heading}</Heading>
	<div class={`grid grid-cols-2 md:grid-cols-4 grid-rows-7 ${clans.length > 4 ? 'md:grid-rows-2' : 'md:grid-rows-1' } gap-4 max-w-fit mb-4`}>
		{#each clans as clan}
			<div class="flex flex-col items-center max-h-80 max-w-80">
				<A href={`/13-clans/${clan.id}`} class="flex flex-col w-full h-full">
					<Img
						src={`${import.meta.env.VITE_DIRECTUS_URL}/assets/${
							clan.logo
						}?fit=inside&width=300&height=300&format=webp`}
						alt={`logo of clan ${clan.name}`}
						class="object-cover w-full h-full "
					/>
					<P weight="bold" size="lg">{clan.name}</P>
				</A>
			</div>
		{/each}
	</div>
{/if}
