<script lang="ts">
	import ProjektNews from '$lib/components/projektNews.svelte';
	import { isString } from '$lib/util';
	import { A, Heading, Img } from 'flowbite-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Heading class="mb-4 text-center" tag="h1">Willkommen beim Nächtlichen Theater</Heading>
<div class="mb-8 grid grid-cols-1 grid-rows-3 gap-y-4 md:row-start-1 md:grid-cols-3 md:grid-rows-1">
	<div class="row-start-1 flex flex-col items-center gap-2 text-center md:col-start-1">
		<Heading tag="h2">Camarilla</Heading>
		<A href="/camarilla/uebersicht" aClass="w-full h-full">
			<Img
				src="/images/Protektorat-2.webp"
				alt="Beispielbild Camarilla"
				class={`rounded-lg shadow-lg dark:shadow-gray-800 md:rounded-l-lg md:rounded-r-none md:transition-all ` +
					`h-full w-full cursor-pointer object-cover md:grayscale md:filter md:duration-300 md:hover:grayscale-0`}
				size="max-w-full"
			/>
		</A>
	</div>
	<div
		class="row-start-2 flex flex-col items-center gap-2 text-center md:col-start-2 md:row-start-1"
	>
		<Heading tag="h2">Sabbat</Heading>
		<A href="/sabbat/uebersicht" aClass="w-full h-full">
			<Img
				src="/images/P1080017-small.webp"
				alt="Beispielbild Sabbat"
				class={`rounded-lg shadow-lg dark:shadow-gray-800 md:rounded-none md:transition-all md:duration-300 ` +
					`h-full w-full cursor-pointer object-cover md:grayscale md:filter md:hover:grayscale-0`}
				size="max-w-full"
			/>
		</A>
	</div>
	<div
		class="row-start-3 flex flex-col items-center gap-2 text-center md:col-start-3 md:row-start-1"
	>
		<Heading tag="h2">Wh40k</Heading>
		<A href="/wh40k/uebersicht" aClass="w-full h-full">
			<Img
				src="/images/W40K_LandingPage.webp"
				alt="Beispielbild wh40k"
				class={`rounded-lg shadow-lg dark:shadow-gray-800 md:rounded-l-none md:rounded-r-lg md:transition-all ` +
					`h-full w-full cursor-pointer object-cover md:grayscale md:filter md:duration-300 md:hover:grayscale-0`}
				size="max-w-full"
			/>
		</A>
	</div>
</div>

<Heading class="mb-4 text-center" tag="h2">Neuigkeiten</Heading>
<div class="grid auto-rows-auto grid-cols-1 gap-4 md:grid-cols-3">
	{#each data.news
		.flat()
		.sort((objA, objB) => objB.date_created.getTime() - objA.date_created.getTime()) as news}
		<ProjektNews
			title={news.titel}
			synopsis={news.synopsis}
			authorFirstName={news.user_created.first_name}
			authorLastName={news.user_created.last_name}
			date={news.date_created}
			avatar={isString(news.user_created.avatar)
				? news.user_created.avatar
				: news.user_created.avatar?.id}
			project={news.project}
			newsId={news.id}
		/>
	{/each}
</div>
