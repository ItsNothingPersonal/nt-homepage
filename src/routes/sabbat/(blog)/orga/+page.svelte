<script lang="ts">
	import OrgaEntry from '$lib/components/Orga/OrgaEntry.svelte';
	import SocialButton from '$lib/components/Socials/socialButton.svelte';

	export let data;
</script>

<h1 class="h1 mb-4 text-center font-bold">Orga-Team</h1>
<OrgaEntry title="Spielleitung" personen={data.spielleitung}>
	<p class="text-justify" slot="beschreibung">
		Aufgabe der Spielleiter ist die Vorbereitung und Durchführung der eigentlichen Spielabende. Sie
		entwickeln eine Vision für die Chronik, entwerfen Plots und beantworten DTAs. Sie nehmen
		Charakterkonzepte der Spieler ab, segnen den finalen Charakterbogen ab und pflegen ihn auf der
		Homepage ein. Am Spielabend sind sie führende Ansprechpartner für jegliche Fragen hinsichtlich
		Plots. Sie leiten zudem Kämpfe und beantworten Regelfragen bzw. legen die Regeln im Zweifel
		spielförderlich aus. Bei Streitfragen entscheiden sie, wie die Situation aufzulösen ist. Sie
		springen auch als NSCs ein, sofern die Entwicklungen dies erfordern sollten.
	</p>
	<div class="mb-4 flex place-content-center" slot="footer">
		<SocialButton
			icon="email"
			href={`mailto:Sabbat@NaechtlichesTheater.de`}
			text="Kontakt zur Spielleitung"
		/>
	</div>
</OrgaEntry>

<OrgaEntry title="Erzähler" personen={data.erzaehler}>
	<p class="text-justify" slot="beschreibung">
		Aufgabe der Spielleiter ist die Vorbereitung und Durchführung der eigentlichen Spielabende. Sie
		entwickeln eine Vision für die Chronik, entwerfen Plots und beantworten DTAs. Sie nehmen
		Charakterkonzepte der Spieler ab, segnen den finalen Charakterbogen ab und pflegen ihn auf der
		Homepage ein. Am Spielabend sind sie führende Ansprechpartner für jegliche Fragen hinsichtlich
		Plots. Sie leiten zudem Kämpfe und beantworten Regelfragen bzw. legen die Regeln im Zweifel
		spielförderlich aus. Bei Streitfragen entscheiden sie, wie die Situation aufzulösen ist. Sie
		springen auch als NSCs ein, sofern die Entwicklungen dies erfordern sollten.
	</p>
</OrgaEntry>
