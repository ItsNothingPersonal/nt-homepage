<script lang="ts">
	import type { ProjektName } from '$lib/types/zod/projektName';
	import { getDownloadUrl, getFormattedDay, getFormattedMonth } from '$lib/util';
	import { Button, Card, Img, P } from 'flowbite-svelte';
	import ArrowRight from './arrowRight.svelte';

	export let title: string;
	export let synopsis: string;
	export let authorFirstName: string | null | undefined;
	export let authorLastName: string | null | undefined;
	export let avatar: string | undefined | null;
	export let date: Date | undefined;
	export let project: ProjektName;
	export let newsId: string | number | undefined;
</script>

<Card
	class="grid grid-rows-news-preview gap-2 grid-cols-1 text-left w-full bg-light-50 dark:bg-dark-700"
	size="lg"
>
	<div class="grid grid-cols-news-header gap-x-2">
		<Img
			src={avatar
				? `${getDownloadUrl(avatar)}&width=28&height=28`
				: 'https://placehold.co/28x28?text=%22Platzhalter%22'}
			alt="sample 1"
			size="w-7"
			imgClass="h-7"
			class="rounded-full"
		/>
		<div class="flex flex-grow flex-auto flex-wrap gap-x-1 h-auto max-h-11">
			<P weight="bold" size="sm" whitespace="nowrap">{authorFirstName} {authorLastName}</P>
			<P size="sm" whitespace="nowrap">in</P>
			<P weight="bold" size="sm" whitespace="nowrap">{project}</P>
			<P size="sm" whitespace="nowrap">am</P>
			<P weight="bold" size="sm" whitespace="nowrap">
				{getFormattedDay(date)}.{getFormattedMonth(date)}.{date?.getFullYear()}
			</P>
		</div>
	</div>
	<h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
		{title}
	</h5>
	<P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400 break-words">
		{synopsis}
	</P>
	<Button class="w-fit" href={`/news/${project}/${newsId}`}>
		Weiterlesen <ArrowRight />
	</Button>
</Card>
