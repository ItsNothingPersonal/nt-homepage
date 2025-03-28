<script lang="ts">
	import type { ProjektName } from '$lib/types/zod/projektName';
	import { getDownloadUrl, getFormattedDay, getFormattedMonth } from '$lib/util';

	interface Props {
		title: string;
		news: string;
		authorFirstName: string | null | undefined;
		authorLastName: string | null | undefined;
		avatar: string | undefined | null;
		date: Date | undefined;
		project: ProjektName;
	}

	let { title, news, authorFirstName, authorLastName, avatar, date, project }: Props = $props();
</script>

<div class="bg-light-50 dark:bg-dark-700 card w-full p-4 text-left">
	<div class="mb-1 flex w-full items-center gap-x-2">
		<img
			src={avatar
				? getDownloadUrl(avatar)
				: `https://placehold.co/28x28?text=${authorFirstName?.charAt(0)}` +
					`${authorLastName?.charAt(0)}`}
			alt="sample 1"
			class="h-7 w-7 rounded-full"
		/>
		<p class="text-sm font-bold">{authorFirstName} {authorLastName}</p>
		<p class="text-sm">im Projekt</p>
		<p class="text-sm font-bold">{project}</p>
		<p class="text-sm">am</p>
		<p class="text-sm font-bold">
			{getFormattedDay(date)}.{getFormattedMonth(date)}.{date?.getFullYear()}
		</p>
	</div>
	<h1 class="h1 mb-4 font-bold tracking-tight text-gray-900 dark:text-white">
		{title}
	</h1>
	<p
		class={`[&>h1]:text-3xl [&>h1]:font-bold [&>h2]:text-2xl [&>h2]:font-bold [&>h3]:text-xl [&>h3]:font-bold [&>p]:mb-2 [&>p]:text-justify [&>p]:whitespace-pre-line [&>p]:first-letter:text-2xl` +
			`w-full text-gray-900 dark:text-white [&>ol]:list-inside [&>ol]:list-decimal [&>p>a]:underline [&>p>a]:decoration-dotted [&>p>a]:underline-offset-4 [&>ul]:list-inside [&>ul]:list-disc ` +
			`[&>blockquote]:border-l-4 [&>blockquote]:border-gray-300 [&>blockquote]:bg-gray-50 [&>blockquote]:p-4 dark:[&>blockquote]:bg-gray-800 [&>table]:w-full [&>table]:table-auto`}
	>
		{@html news}
	</p>
</div>
