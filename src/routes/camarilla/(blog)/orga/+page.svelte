<script lang="ts">
	import OrgaEntry from '$lib/components/Orga/OrgaEntry.svelte';
	import SocialButton from '$lib/components/Socials/socialButton.svelte';

	let { data } = $props();
</script>

<h1 class="h1 mb-4 text-center font-bold">Orga-Team</h1>
<OrgaEntry title="Spielleitung" personen={data.spielleitung}>
	{#snippet beschreibung()}
		<p class="text-justify">
			Aufgabe der Spielleiter ist die Vorbereitung und Durchführung der eigentlichen Spielabende.
			Sie entwickeln eine Vision für die Chronik, entwerfen Plots und beantworten DTAs. Sie nehmen
			Charakterkonzepte der Spieler ab, segnen den finalen Charakterbogen ab und pflegen ihn auf der
			Homepage ein. Am Spielabend sind sie führende Ansprechpartner für jegliche Fragen hinsichtlich
			Plots. Sie leiten zudem Kämpfe und beantworten Regelfragen bzw. legen die Regeln im Zweifel
			spielförderlich aus. Bei Streitfragen entscheiden sie, wie die Situation aufzulösen ist. Sie
			springen auch als NSCs ein, sofern die Entwicklungen dies erfordern sollten.
		</p>
	{/snippet}
	{#snippet footer()}
		<div class="mb-4 flex place-content-center">
			<SocialButton
				icon="email"
				href={`mailto:Protektorat@NaechtlichesTheater.de`}
				text="Kontakt zur Spielleitung"
			/>
		</div>
	{/snippet}
</OrgaEntry>

<OrgaEntry title="Erzähler" personen={data.erzaehler}>
	{#snippet beschreibung()}
		<p class="text-justify">
			Aufgabe der Spielleiter ist die Vorbereitung und Durchführung der eigentlichen Spielabende.
			Sie entwickeln eine Vision für die Chronik, entwerfen Plots und beantworten DTAs. Sie nehmen
			Charakterkonzepte der Spieler ab, segnen den finalen Charakterbogen ab und pflegen ihn auf der
			Homepage ein. Am Spielabend sind sie führende Ansprechpartner für jegliche Fragen hinsichtlich
			Plots. Sie leiten zudem Kämpfe und beantworten Regelfragen bzw. legen die Regeln im Zweifel
			spielförderlich aus. Bei Streitfragen entscheiden sie, wie die Situation aufzulösen ist. Sie
			springen auch als NSCs ein, sofern die Entwicklungen dies erfordern sollten.
		</p>
	{/snippet}
</OrgaEntry>
