<script lang="ts">
	import { Heading, Li, List, P } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { steckbrief, beschreibung } = data;

	let beschreibungCompiled = '';

	onMount(() => {
		beschreibungCompiled = beschreibung?.code ?? '';
	});
</script>

<Heading tag="h1" class="mb-4">Setting Steckbrief</Heading>

<Heading tag="h2" class="mb-2">{steckbrief?.name}</Heading>
<Heading tag="h3" class="mb-1">Thema</Heading>
<P>{steckbrief?.thema}</P>
<Heading tag="h3" class="mb-1">Stimmung</Heading>
<P>{steckbrief?.stimmung}</P>
<Heading tag="h3" class="mb-1">Thema</Heading>
<P>{steckbrief?.thema}</P>
<Heading tag="h3" class="mb-1">Spielart</Heading>
<P>{steckbrief?.spielart}</P>
<Heading tag="h3" class="mb-1">Beschreibung</Heading>
<P
	class={`[&>p]:first-letter:text-2xl [&>p]::text-2xl [&>p]:text-justify [&>p]:mb-2 [&>h2]:text-4xl [&>h2]:font-bold [&>h3]:text-3xl [&>h3]:font-bold text-gray-900 dark:text-white w-full ` +
		`[&>p>a]:underline [&>p>a]:decoration-dotted`}
>
	{@html beschreibungCompiled}
</P>

<Heading tag="h3" class="mb-1">Regeln</Heading>
<Heading tag="h4">Erfahrungspunkte</Heading>
<List tag="ul" position="outside" class="min-w-full text-left">
	<Li>
		<P>
			{steckbrief?.erfahrung_beginn_menge} XP für die ersten {steckbrief?.erfahrung_beginn_dauer_monate}
			Spielabende.
		</P>
	</Li>
	<Li>
		<P>{steckbrief?.erfahrung_rest} XP für jeden folgenden Spielabend.</P>
	</Li>
</List>

<Heading tag="h4">Clans</Heading>
<List tag="ul" position="outside" class="min-w-full text-left">
	<Li><P>Üblich (0 XP): {steckbrief?.clan_ueblich}</P></Li>
	<Li><P>Unüblich (2/3 XP): {steckbrief?.clan_unueblich}</P></Li>
	<Li><P>Selten (4/5 XP): {steckbrief?.clan_selten}</P></Li>
	<Li><P>Sehr selten (6 XP): {steckbrief?.clan_sehr_selten}</P></Li>
	{#if steckbrief?.clan_verboten}
		<Li><P>Verboten: {steckbrief?.clan_verboten}</P></Li>
	{/if}
</List>

<Heading tag="h4">Spezialregeln</Heading>
<List tag="ul" position="outside" class="min-w-full text-left">
	<Li><P>Start-Erfahrungspunkte: {steckbrief?.erfahrung_start}</P></Li>
	<Li><P>{steckbrief?.clans_kosten}</P></Li>
	<Li><P>{steckbrief?.pfad_kosten}</P></Li>
</List>
