<script lang="ts">
	import type { ProjektName } from '$lib/types/zod/projektName';
	import { getDownloadUrl, getFormattedDay, getFormattedMonth } from '$lib/util';
	import Icon from '@iconify/svelte';

	interface Props {
		title: string;
		synopsis: string;
		authorFirstName: string | null | undefined;
		authorLastName: string | null | undefined;
		avatar: string | undefined | null;
		date: Date | undefined;
		project: ProjektName;
		newsId: string | number | undefined;
	}

	let { title, synopsis, authorFirstName, authorLastName, avatar, date, project, newsId }: Props =
		$props();
</script>

<div
	class="bg-light-50 dark:bg-dark-700 card grid-rows-news-preview grid w-full grid-cols-1 gap-2 rounded-lg p-4 text-left"
>
	<div class="grid-cols-news-header grid gap-x-2">
		<img
			src={avatar
				? `${getDownloadUrl(avatar)}&width=28&height=28`
				: 'https://placehold.co/28x28?text=%22Platzhalter%22'}
			alt="Avatar des News-Authors"
			class="h-7 w-7 rounded-full"
		/>
		<div class="flex h-auto max-h-11 flex-auto grow flex-wrap gap-x-1">
			<p class="text-sm font-bold whitespace-nowrap">{authorFirstName} {authorLastName}</p>
			<p class="text-sm whitespace-nowrap">in</p>
			<p class="text-sm font-bold whitespace-nowrap">{project}</p>
			<p class="text-sm whitespace-nowrap">am</p>
			<p class="text-sm font-bold whitespace-nowrap">
				{getFormattedDay(date)}.{getFormattedMonth(date)}.{date?.getFullYear()}
			</p>
		</div>
	</div>
	<h3 class="h3 font-bold tracking-tight text-gray-900 dark:text-white">
		{title}
	</h3>
	<p class="mb-3 font-light break-words text-gray-500 dark:text-gray-400">
		{synopsis}
	</p>
	<a
		class="preset-filled-primary-500 btn w-fit rounded-lg"
		role="button"
		href={`/news/${project}/${newsId}`}
	>
		Weiterlesen <Icon icon="mdi:arrow-right-thin" class="left-[0.2rem] ml-2 self-center text-2xl" />
	</a>
</div>
