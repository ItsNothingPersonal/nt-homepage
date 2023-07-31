<script lang="ts">
	import ProjektNews from '$lib/components/projektNews.svelte';
	import { isString } from '$lib/util';
	import { A, Heading, Img } from 'flowbite-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Heading class="mb-4 text-center" tag="h1">Willkommen beim Nächtlichen Theater</Heading>
<div class="grid grid-cols-1 md:row-start-1 md:grid-cols-3 grid-rows-3 md:grid-rows-1 gap-y-4 mb-8">
	<div class="row-start-1 md:col-start-1 flex flex-col text-center gap-2 items-center">
		<Heading tag="h2">Sabbat</Heading>
		<A href="/sabbat/uebersicht">
			<Img
				src="/images/NT_MT_009.webp"
				alt="Beispielbild Sabbat"
				imgClass="rounded-lg md:rounded-t-lg md:rounded-none md:rounded-l-lg shadow-lg dark:shadow-gray-800"
			/>
		</A>
	</div>
	<div
		class="row-start-2 md:row-start-1 md:col-start-2 flex flex-col text-center gap-2 items-center"
	>
		<Heading tag="h2">Camarilla</Heading>
		<A href="/camarilla/uebersicht">
			<Img
				src="/images/NT_VS_013.webp"
				alt="Beispielbild Camarilla"
				class="rounded-lg md:rounded-none shadow-lg dark:shadow-gray-800"
			/>
		</A>
	</div>
	<div
		class="row-start-3 md:row-start-1 md:col-start-3 flex flex-col text-center gap-2 items-center"
	>
		<Heading tag="h2">40K</Heading>
		<A href="/w40k/uebersicht">
			<Img
				src="/images/NT_MT_013.webp"
				alt="Beispielbild W40K"
				imgClass="rounded-lg md:rounded-b-lg md:rounded-none md:rounded-r-lg shadow-lg dark:shadow-gray-800"
			/>
		</A>
	</div>
</div>

<Heading class="mb-4 text-center" tag="h2">Neuigkeiten</Heading>
<div class="container flex justify-center">
	<div class="grid grid-cols-1 md:grid-cols-3 auto-rows-auto gap-4">
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
</div>
