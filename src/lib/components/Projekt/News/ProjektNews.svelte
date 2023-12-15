<script lang="ts">
	import type { ProjektName } from '$lib/types/zod/projektName';
	import { getDownloadUrl, getFormattedDay, getFormattedMonth } from '$lib/util';
	import Icon from '@iconify/svelte';

	export let title: string;
	export let synopsis: string;
	export let authorFirstName: string | null | undefined;
	export let authorLastName: string | null | undefined;
	export let avatar: string | undefined | null;
	export let date: Date | undefined;
	export let project: ProjektName;
	export let newsId: string | number | undefined;
</script>

<div
	class="bg-light-50 dark:bg-dark-700 card grid w-full grid-cols-1 grid-rows-news-preview gap-2 p-4 text-left"
>
	<div class="grid grid-cols-news-header gap-x-2">
		<img
			src={avatar
				? `${getDownloadUrl(avatar)}&width=28&height=28`
				: 'https://placehold.co/28x28?text=%22Platzhalter%22'}
			alt="sample 1"
			class="h-7 w-7 rounded-full"
		/>
		<div class="flex h-auto max-h-11 flex-auto flex-grow flex-wrap gap-x-1">
			<p class="whitespace-nowrap text-sm font-bold">{authorFirstName} {authorLastName}</p>
			<p class="whitespace-nowrap text-sm">in</p>
			<p class="whitespace-nowrap text-sm font-bold">{project}</p>
			<p class="whitespace-nowrap text-sm">am</p>
			<p class="whitespace-nowrap text-sm font-bold">
				{getFormattedDay(date)}.{getFormattedMonth(date)}.{date?.getFullYear()}
			</p>
		</div>
	</div>
	<h5 class="h5 font-bold tracking-tight text-gray-900 dark:text-white">
		{title}
	</h5>
	<p class="mb-3 break-words font-light text-gray-500 dark:text-gray-400">
		{synopsis}
	</p>
	<a
		class="variant-filled-primary btn w-fit rounded-lg"
		role="button"
		href={`/news/${project}/${newsId}`}
	>
		Weiterlesen <Icon icon="mdi:arrow-right-thin" class="left-[0.2rem] ml-2 self-center text-2xl" />
	</a>
</div>
