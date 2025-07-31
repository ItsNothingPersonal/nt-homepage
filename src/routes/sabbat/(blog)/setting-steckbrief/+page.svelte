<script lang="ts">
	import LoadingMessage from '$lib/components/LoadingMessage/LoadingMessage.svelte';

	let { data } = $props();
</script>

<h1 class="h1 mb-4 text-center font-bold">Setting Steckbrief</h1>

{#await data.steckbrief}
	<LoadingMessage>Lade Setting Steckbrief</LoadingMessage>
{:then steckbrief}
	<h2 class="h2 mt-4 mb-2 font-bold">{steckbrief?.name}</h2>
	<p>{steckbrief?.thema}</p>
	<h3 class="h3">Stimmung</h3>
	<p>{steckbrief?.stimmung}</p>
	<h3 class="h3">Thema</h3>
	<p>{steckbrief?.thema}</p>
	<h3 class="h3">Spielart</h3>
	<p>{steckbrief?.spielart}</p>
	<h3 class="h3">Beschreibung</h3>
{/await}

{#await data.beschreibung}
	<LoadingMessage>Lade Setting Beschreibung</LoadingMessage>
{:then beschreibung}
	<p
		class={`[&>p]::text-2xl w-full text-gray-900 dark:text-white [&>h2]:text-4xl [&>h2]:font-bold [&>h3]:text-3xl [&>h3]:font-bold [&>p]:mb-2 [&>p]:text-justify [&>p]:first-letter:text-2xl ` +
			`[&>p>a]:underline [&>p>a]:decoration-dotted [&>p>a]:underline-offset-4`}
	>
		{@html beschreibung}
	</p>
{/await}

<h3 class="h3">Regeln</h3>
<h4 class="h4">Erfahrungspunkte</h4>
{#await data.steckbrief}
	<LoadingMessage>Lade Setting Steckbrief</LoadingMessage>
{:then steckbrief}
	<ul class="list-outside list-disc">
		<li>
			<span class="flex-auto">
				{steckbrief?.erfahrung_start} XP zum Start.
			</span>
		</li>
		<li>
			<span class="flex-auto">
				{steckbrief?.erfahrung_pro_abend} XP für jeden Spielabend.
			</span>
		</li>
	</ul>
{/await}

<h4 class="h4">Clans</h4>
{#await data.steckbrief}
	<LoadingMessage>Lade Setting Steckbrief</LoadingMessage>
{:then steckbrief}
	<ul class="list-outside list-disc">
		<li>
			<span class="font-semibold">Üblich:</span>
			{steckbrief?.clan_ueblich}
		</li>
		<li>
			<span class="font-semibold">Unüblich:</span>
			{steckbrief?.clan_unueblich}
		</li>
		<li><span class="font-semibold">Selten:</span> {steckbrief?.clan_selten}</li>
		<li>
			<span class="font-semibold">Sehr selten:</span>
			{steckbrief?.clan_sehr_selten}
		</li>

		{#if steckbrief?.clan_verboten}
			<li>
				<span class="font-semibold">Verboten:</span>
				{steckbrief?.clan_verboten}
			</li>
		{/if}
	</ul>
{/await}

<h4 class="h4">Spezialregeln</h4>
{#await data.steckbrief}
	<LoadingMessage>Lade Setting Steckbrief</LoadingMessage>
{:then steckbrief}
	<ul class="list-outside list-disc">
		<li>
			<span>Start-Erfahrungspunkte: {steckbrief?.erfahrung_start}</span>
		</li>
		<li>
			<span>{steckbrief?.clans_kosten}</span>
		</li>
		<li>
			<span>{steckbrief?.pfad_kosten}</span>
		</li>
	</ul>
{/await}
