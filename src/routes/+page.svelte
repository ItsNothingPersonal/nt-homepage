<script lang="ts">
	import LoadingMessage from '$lib/components/LoadingMessage/LoadingMessage.svelte';
	import ProjektNews from '$lib/components/Projekt/News/ProjektNews.svelte';
	import { isString } from '$lib/util';

	let { data } = $props();
</script>

<h1 class="h1 mb-4 text-center font-bold">Willkommen beim Nächtlichen Theater</h1>
<div
	class="mx-auto mb-6 grid max-w-(--breakpoint-2xl) grid-cols-1 gap-0 gap-y-4 md:grid-cols-3 md:gap-0 md:gap-y-0"
>
	<div class="flex h-full flex-col items-center text-center">
		<h2 class="h2 mb-2 font-bold">Camarilla</h2>
		<a href="/camarilla/uebersicht" class="h-full w-full">
			<img
				src="/images/Protektorat-2.webp"
				alt="Beispielbild Camarilla"
				class="aspect-[4/3] h-full w-full rounded-lg object-cover shadow-lg md:rounded-none md:rounded-tl-lg md:rounded-bl-lg md:grayscale md:filter md:duration-300 md:hover:grayscale-0 dark:shadow-gray-800"
			/>
		</a>
	</div>
	<div class="flex h-full flex-col items-center text-center">
		<h2 class="h2 mb-2 font-bold">Anarchen</h2>
		<a href="/sabbat/uebersicht" class="h-full w-full">
			<img
				src="/images/anarchenrebellion1.webp"
				alt="Beispielbild Anarchen"
				class="aspect-[4/3] h-full w-full rounded-lg object-cover shadow-lg md:rounded-none md:grayscale md:filter md:duration-300 md:hover:grayscale-0 dark:shadow-gray-800"
			/>
		</a>
	</div>
	<div class="flex h-full flex-col items-center text-center">
		<h2 class="h2 mb-2 font-bold">Sabbat</h2>
		<a href="/sabbat/uebersicht" class="h-full w-full">
			<img
				src="/images/P1080017-small.webp"
				alt="Beispielbild Sabbat"
				class="aspect-[4/3] h-full w-full rounded-lg object-cover shadow-lg md:rounded-none md:rounded-tr-lg md:rounded-br-lg md:grayscale md:filter md:duration-300 md:hover:grayscale-0 dark:shadow-gray-800"
			/>
		</a>
	</div>
</div>

<h2 class="h2 text-center font-bold">Neuigkeiten</h2>
<div class="mx-auto grid max-w-(--breakpoint-2xl) auto-rows-auto grid-cols-1 gap-4 md:grid-cols-3">
	{#await data.news}
		<LoadingMessage>Lade News</LoadingMessage>
	{:then newsListEntry}
		{#each newsListEntry
			.flat()
			.sort((objA, objB) => objB.date_created.getTime() - objA.date_created.getTime()) as news (news.project + '-' + news.id)}
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
