<script lang="ts">
	import LoadingMessage from '$lib/components/LoadingMessage/LoadingMessage.svelte';
	import type { FileInformation } from '$lib/types/zod/fileInformation.js';
	import { getDownloadUrl } from '$lib/util.js';
	let { data } = $props();

	function onSelected(id: string) {
		window.open(getDownloadUrl(id));
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
	<LoadingMessage>Lade Vereins-Downloads</LoadingMessage>
{:then folderResponse}
	<div class="table-wrap">
		<table class="table">
			<thead>
				<tr>
					<th class="dark:text-white/50">Name</th>
					<th class="dark:text-white/50">Größe</th>
				</tr>
			</thead>
			<tbody class="[&>tr]:hover:preset-tonal-primary [&>tr]:hover:cursor-pointer">
				{#each getTableContent(folderResponse) as row (row.id)}
					<tr id={row.id} onclick={() => onSelected(row.id)}>
						<td class="break-all">{row.name}</td>
						<td>{row.size}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/await}
