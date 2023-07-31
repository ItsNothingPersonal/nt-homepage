<script lang="ts">
	import ProjektNewsArticle from '$lib/components/projektNewsArticle.svelte';
	import { isString } from '$lib/util';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<ProjektNewsArticle
	title={data.news.titel}
	news={data.news.news}
	authorFirstName={data.news.user_created.first_name}
	authorLastName={data.news.user_created.last_name}
	date={data.news.date_created}
	avatar={isString(data.news.user_created.avatar)
		? data.news.user_created.avatar
		: data.news.user_created.avatar?.id}
	project={data.news.project}
/>
