<script lang="ts">
	import type { ProjektName } from '$lib/types/zod/projektName';
	import { getDownloadUrl, getFormattedDay, getFormattedMonth } from '$lib/util';
	import { Card, Img, P } from 'flowbite-svelte';

	export let title: string;
	export let news: string;
	export let authorFirstName: string | null | undefined;
	export let authorLastName: string | null | undefined;
	export let avatar: string | undefined | null;
	export let date: Date | undefined;
	export let project: ProjektName;
</script>

<Card class="text-left w-full" size="xl" padding="xl">
	<div class="flex items-center gap-x-2 mb-1 w-full">
		<Img
			src={avatar
				? getDownloadUrl(avatar)
				: `https://placehold.co/28x28?text=${authorFirstName?.charAt(0)}` +
				  `${authorLastName?.charAt(0)}`}
			alt="sample 1"
			size="w-7"
			imgClass="h-7"
			class="rounded-full"
		/>
		<P weight="bold" size="sm">{authorFirstName} {authorLastName}</P>
		<P size="sm">im Projekt</P>
		<P weight="bold" size="sm">{project}</P>
		<P size="sm">am</P>
		<P weight="bold" size="sm">
			{getFormattedDay(date)}.{getFormattedMonth(date)}.{date?.getFullYear()}
		</P>
	</div>
	<h1 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
		{title}
	</h1>

	<P
		class={`[&>p]:first-letter:text-2xl [&>p]:text-justify [&>p]:mb-2 [&>h1]:text-3xl [&>h1]:font-bold [&>h2]:text-2xl [&>h2]:font-bold [&>h3]:text-xl [&>h3]:font-bold ` +
			`text-gray-900 dark:text-white w-full [&>p>a]:underline [&>p>a]:decoration-dotted [&>ol]:list-decimal [&>ol]:list-inside [&>ul]:list-disc [&>ul]:list-inside ` +
			`[&>blockquote]:p-4 [&>blockquote]:border-l-4 [&>blockquote]:border-gray-300 [&>blockquote]:bg-gray-50 [&>blockquote]:dark:bg-gray-800 [&>table]:w-full [&>table]:table-auto`}
	>
		{@html news}
	</P>
</Card>
