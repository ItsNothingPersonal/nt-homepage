<script lang="ts">
	export let data;
</script>

<h1 class="h1 mb-2 text-center font-bold">{data.ueberschrift}</h1>
<p
	class="[&>p]:mb-2 [&>p]:text-justify [&>p]:first-letter:text-2xl [&>ul>li>a]:underline [&>ul>li>a]:decoration-dotted [&>ul>li>a]:underline-offset-4 [&>ul]:list-inside [&>ul]:list-disc"
>
	{@html data.erklaerung?.code}
</p>
