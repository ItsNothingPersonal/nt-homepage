<script lang="ts">
	import OrgaEntry from '$lib/components/orgaEntry.svelte';
	import { A, Heading, P } from 'flowbite-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Heading tag="h1" class="mb-4">Orga-Team</Heading>
<OrgaEntry title="Spielleitung" personen={data.spielleitung}>
	<P class="text-justify" slot="beschreibung">
		Aufgabe der Spielleiter ist die Vorbereitung und Durchführung der eigentlichen Spielabende. Sie
		entwickeln eine Vision für die Chronik, entwerfen Plots und beantworten DTAs. Sie nehmen
		Charakterkonzepte der Spieler ab, segnen den finalen Charakterbogen ab und pflegen ihn auf der
		Homepage ein. Am Spielabend sind sie führende Ansprechpartner für jegliche Fragen hinsichtlich
		Plots. Sie leiten zudem Kämpfe und beantworten Regelfragen bzw. legen die Regeln im Zweifel
		spielförderlich aus. Bei Streitfragen entscheiden sie, wie die Situation aufzulösen ist. Sie
		springen auch als NSCs ein, sofern die Entwicklungen dies erfordern sollten.
	</P>
	<P class="mb-4" slot="footer">
		Die gesamte Spielleitung ist unter <A href="mailto:Protektorat@NaechtlichesTheater.de">
			Protektorat@NaechtlichesTheater.de
		</A> erreichbar.
	</P>
</OrgaEntry>

<OrgaEntry title="Erzähler" personen={data.erzaehler}>
	<P class="text-justify" slot="beschreibung">
		Aufgabe der Spielleiter ist die Vorbereitung und Durchführung der eigentlichen Spielabende. Sie
		entwickeln eine Vision für die Chronik, entwerfen Plots und beantworten DTAs. Sie nehmen
		Charakterkonzepte der Spieler ab, segnen den finalen Charakterbogen ab und pflegen ihn auf der
		Homepage ein. Am Spielabend sind sie führende Ansprechpartner für jegliche Fragen hinsichtlich
		Plots. Sie leiten zudem Kämpfe und beantworten Regelfragen bzw. legen die Regeln im Zweifel
		spielförderlich aus. Bei Streitfragen entscheiden sie, wie die Situation aufzulösen ist. Sie
		springen auch als NSCs ein, sofern die Entwicklungen dies erfordern sollten.
	</P>
</OrgaEntry>
