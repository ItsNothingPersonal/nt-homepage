<script lang="ts">
	import ProjektNews from '$lib/components/projektNews.svelte';
	import { isString } from '$lib/util';
	import { A, Heading, Img, P } from 'flowbite-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Heading class="mb-4 text-center" tag="h1">Willkommen beim Nächtlichen Theater</Heading>
<div class="grid grid-cols-1 md:row-start-1 md:grid-cols-3 grid-rows-3 md:grid-rows-1 gap-y-4 mb-8">
	<div class="row-start-1 md:col-start-1 flex flex-col text-center gap-2 items-center">
		<Heading tag="h2">Camarilla</Heading>
		<A href="/camarilla/uebersicht" aClass="w-full h-full">
			<Img
				src="/images/Protektorat-2.webp"
				alt="Beispielbild Camarilla"
				class={`rounded-lg md:rounded-r-none md:rounded-l-lg shadow-lg dark:shadow-gray-800 md:transition-all ` +
					`md:duration-300 cursor-pointer md:filter md:grayscale md:hover:grayscale-0 h-full w-full object-cover`}
				size="max-w-full"
			/>
		</A>
	</div>
	<div
		class="row-start-2 md:row-start-1 md:col-start-2 flex flex-col text-center gap-2 items-center"
	>
		<Heading tag="h2">Sabbat</Heading>
		<A href="/sabbat/uebersicht" aClass="w-full h-full">
			<Img
				src="/images/P1080017-small.webp"
				alt="Beispielbild Sabbat"
				class={`rounded-lg md:rounded-none shadow-lg dark:shadow-gray-800 md:transition-all md:duration-300 ` +
					`cursor-pointer md:filter md:grayscale md:hover:grayscale-0 h-full w-full object-cover`}
				size="max-w-full"
			/>
		</A>
	</div>
	<div
		class="row-start-3 md:row-start-1 md:col-start-3 flex flex-col text-center gap-2 items-center"
	>
		<Heading tag="h2">Wh40k</Heading>
		<A href="/wh40k/uebersicht" aClass="w-full h-full">
			<Img
				src="/images/WH40K_40KBoxCover2018.webp"
				alt="Beispielbild wh40k"
				class={`rounded-lg md:rounded-r-lg md:rounded-l-none shadow-lg dark:shadow-gray-800 md:transition-all ` +
					`md:duration-300 cursor-pointer md:filter md:grayscale md:hover:grayscale-0 h-full w-full object-cover`}
				size="max-w-full"
			/>
		</A>
	</div>
</div>

<Heading class="mb-4 text-center" tag="h2">Neuigkeiten</Heading>
<div class="container flex justify-center">
	<div class="grid grid-cols-1 md:grid-cols-3 auto-rows-auto gap-4">
		{#await data.news}
			<P>Warte auf Daten...</P>
		{:then value}
			{#each value
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
		{/await}
	</div>
</div>
