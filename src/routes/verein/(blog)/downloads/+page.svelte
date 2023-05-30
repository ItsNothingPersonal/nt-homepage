<script lang="ts">
	import { getDownloadUrl } from '$lib/util';
	import {
		A,
		Heading,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Heading tag="h1" class="mb-4">Downloads</Heading>
<Table hoverable={true} shadow>
	<TableHead>
		<TableHeadCell>Name</TableHeadCell>
		<TableHeadCell>Größe</TableHeadCell>
	</TableHead>
	<TableBody>
		{#each data.downloadInformation as downloadInfo}
			<TableBodyRow>
				<TableBodyCell>
					<A href={getDownloadUrl(downloadInfo.id)}>
						{downloadInfo.name}
					</A>
				</TableBodyCell>
				<TableBodyCell>{downloadInfo.size.toFixed(2)} MB</TableBodyCell>
			</TableBodyRow>
		{/each}
	</TableBody>
</Table>
