<script lang="ts">
	import LoadingMessage from '$lib/components/LoadingMessage/LoadingMessage.svelte';
	import type { FileInformation } from '$lib/types/zod/fileInformation.js';
	import { getDownloadUrl } from '$lib/util.js';
	import { Table, tableMapperValues } from '@skeletonlabs/skeleton';

	let { data } = $props();

	function onSelected(info: { detail: string[] }) {
		window.open(getDownloadUrl(info.detail[0]));
	}

	function getTableContent(
		fileInformation: FileInformation[]
	): { id: string; name: string; size: string }[] {
		return fileInformation
			.map((e) => {
				return {
					id: e.id,
					name: e.filename_download,
					size: e.filesize ? parseInt(e.filesize) / 1024 ** 2 : 0
				};
			})
			.map((e) => {
				return {
					id: e.id,
					name: e.name,
					size: `${e.size.toFixed(2)} MB`
				};
			});
	}
</script>

<h1 class="h1 mb-4 text-center font-bold">Downloads</h1>
{#await data.folderResponse}
	<LoadingMessage>Lade Camarilla-Downloads</LoadingMessage>
{:then folderResponse}
	<Table
		class="!rounded-lg [&>table]:!rounded-lg"
		source={{
			head: ['Name', 'Größe'],
			body: tableMapperValues(getTableContent(folderResponse), ['name', 'size']),
			meta: tableMapperValues(getTableContent(folderResponse), ['id'])
		}}
		interactive={true}
		on:selected={onSelected}
	/>
{/await}
