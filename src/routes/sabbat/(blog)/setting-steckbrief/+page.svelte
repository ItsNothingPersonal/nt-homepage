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
<List tag="ul" position="outside" class="space-y-1">
	<P>
		<Li>
			{steckbrief?.erfahrung_beginn_menge} XP für die ersten {steckbrief?.erfahrung_beginn_dauer_monate}
			Spielabende.
		</Li>
	</P>
	<P>
		<Li>
			{steckbrief?.erfahrung_rest} XP für jeden folgenden Spielabend.
		</Li>
	</P>
</List>

<Heading tag="h4">Clans</Heading>
<List tag="ul" position="outside" class="space-y-1">
	<P>
		<Li>Üblich (0 XP): {steckbrief?.clan_ueblich}</Li>
	</P>
	<P>
		<Li>Unüblich (2/3 XP): {steckbrief?.clan_unueblich}</Li>
	</P>
	<P>
		<Li>Selten (4/5 XP): {steckbrief?.clan_selten}</Li>
	</P>
	<P>
		<Li>Sehr selten (6 XP): {steckbrief?.clan_sehr_selten}</Li>
	</P>
	{#if steckbrief?.clan_verboten}
		<P>
			<Li>Verboten: {steckbrief?.clan_verboten}</Li>
		</P>
	{/if}
</List>

<Heading tag="h4">Spezialregeln</Heading>
<List tag="ul" position="outside" class="space-y-1">
	<P>
		<Li>Start-Erfahrungspunkte: {steckbrief?.erfahrung_start}</Li>
	</P>
	<P>
		<Li>{steckbrief?.clans_kosten}</Li>
	</P>
	<P>
		<Li>{steckbrief?.pfad_kosten}</Li>
	</P>
</List>
