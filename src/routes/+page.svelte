<script lang="ts">
	import LoadingMessage from '$lib/components/LoadingMessage/LoadingMessage.svelte';
	import ProjektNews from '$lib/components/Projekt/News/ProjektNews.svelte';
	import { isString } from '$lib/util';

	let { data } = $props();
</script>

<h1 class="h1 mb-4 text-center font-bold">Willkommen beim Nächtlichen Theater</h1>
<div
	class="mx-auto mb-20 grid max-h-[32rem] max-w-(--breakpoint-2xl) grid-cols-1 grid-rows-2 gap-y-14 md:row-start-1 md:grid-cols-2 md:grid-rows-1"
>
	<div class="row-start-1 flex flex-col items-center text-center md:col-start-1 md:gap-2">
		<h2 class="h2 mb-2 font-bold">Camarilla</h2>
		<a href="/camarilla/uebersicht" class="h-full w-full">
			<img
				src="/images/Protektorat-2.webp"
				alt="Beispielbild Camarilla"
				class={`rounded-lg shadow-lg md:rounded-l-lg md:rounded-r-none md:transition-all dark:shadow-gray-800 ` +
					`h-full w-full max-w-full cursor-pointer object-cover md:grayscale md:filter md:duration-300 md:hover:grayscale-0`}
			/>
		</a>
	</div>
	<div
		class="row-start-2 flex flex-col items-center text-center md:col-start-2 md:row-start-1 md:gap-2"
	>
		<h2 class="h2 mb-2 font-bold">Sabbat</h2>
		<a href="/sabbat/uebersicht" class="h-full w-full">
			<img
				src="/images/P1080017-small.webp"
				alt="Beispielbild Sabbat"
				class={`rounded-lg shadow-lg md:rounded-l-none md:transition-all md:duration-300 dark:shadow-gray-800 ` +
					`h-full w-full max-w-full cursor-pointer object-cover md:grayscale md:filter md:hover:grayscale-0`}
			/>
		</a>
	</div>
</div>

<h2 class="h2 mb-2 text-center font-bold">Neuigkeiten</h2>
<div class="mx-auto grid max-w-(--breakpoint-2xl) auto-rows-auto grid-cols-1 gap-4 md:grid-cols-3">
	{#await data.news}
		<LoadingMessage>Lade News</LoadingMessage>
	{:then newsListEntry}
		{#each newsListEntry
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
