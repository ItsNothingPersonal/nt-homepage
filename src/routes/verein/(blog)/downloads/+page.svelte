<script lang="ts">
	import { getDownloadUrl } from '$lib/util.js';
	import { Table, tableMapperValues, type TableSource } from '@skeletonlabs/skeleton';

	export let data;

	const dataTable = data.downloadInformation.map((e) => {
		return {
			id: e.id,
			name: e.name,
			size: `${e.size.toFixed(2)} MB`
		};
	});

	const tableSimple: TableSource = {
		head: ['Name', 'Größe'],
		body: tableMapperValues(dataTable, ['name', 'size']),
		meta: tableMapperValues(dataTable, ['id'])
	};

	function onSelected(info: { detail: string[] }) {
		window.open(getDownloadUrl(info.detail[0]));
	}
</script>

<h1 class="h1 mb-4 text-center font-bold">Downloads</h1>
<Table
	class="!rounded-lg [&>table]:!rounded-lg"
	source={tableSimple}
	interactive={true}
	on:selected={onSelected}
/>
