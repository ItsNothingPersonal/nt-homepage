<script lang="ts">
	import LoadingMessage from '$lib/components/LoadingMessage/LoadingMessage.svelte';

	export let data;
</script>

<h1 class="h1">Impressum</h1>
<h2 class="h2 mb-1 mt-4">Angaben gemäß § 5 TMG</h2>

{#await data.impressum}
	<LoadingMessage>Lade allgemeine Impressums-Angaben</LoadingMessage>
{:then impressum}
	<p>
		{impressum.betreiber_name}
	</p>
	<p>
		{impressum.strasse}
	</p>
	<p>
		{impressum.plz}
		{impressum.ort}
	</p>
	<br />
	<p>
		<strong class="font-semibold text-gray-900 dark:text-white">Vereinsregister: </strong>
		{impressum.vereinsregister}
	</p>
	<p>
		<strong class="font-semibold text-gray-900 dark:text-white">Registergericht: </strong>
		{impressum.registergericht}
	</p>

	<h3 class="h3 mt-2">Vertreten durch</h3>
	<p>{impressum.erster_vorstand} (Erster Vorstand)</p>
	<p>{impressum.zweiter_vorstand} (Zweiter Vorstand)</p>
	<p>{impressum.schatzmeister} (Schatzmeister)</p>

	<h2 class="h2 mb-1 mt-4">Kontakt</h2>
	<p>
		<strong class="font-semibold text-gray-900 dark:text-white">Telefon: </strong>
		{impressum.telefon}
	</p>
	<p>
		<strong class="font-semibold text-gray-900 dark:text-white">E-Mail: </strong>
		<a class="underline decoration-dotted underline-offset-4" href={`mailto:${impressum.email}`}>
			{impressum.email}
		</a>
	</p>

	<h2 class="h2 mb-1 mt-4">Redaktionell verantwortlich</h2>
	<p>{impressum.webmaster_name}</p>
	<p>
		{impressum.webmaster_strasse}
	</p>
	<p>
		{impressum.webmaster_plz}
		{impressum.webmaster_ort}
	</p>
{/await}

<h2 class="h2 mb-1 mt-4">Copyright</h2>
<p
	class="[&>h3]:h3 [&>h3]:mt-2 [&>p:not(:last-of-type)]:mb-2 [&>p>a]:underline [&>p>a]:decoration-dotted [&>p>a]:underline-offset-4 [&>p>a]:underline-offset-4 [&>p]:text-justify [&>p]:first-letter:text-2xl"
>
	{#await data.copyrightNotice}
		<LoadingMessage>Lade Copyright-Angaben</LoadingMessage>
	{:then copyrightNotice}
		{@html copyrightNotice?.code}
	{/await}
</p>

<h2 class="h2 mb-1 mt-4">Haftungsausschluss</h2>
<p class=" mb-2 text-justify first-letter:text-2xl">
	{#await data.impressum}
		<LoadingMessage>Lade Impressums-Angaben zum Haftungsausschluss</LoadingMessage>
	{:then impressum}
		{impressum.haftungsausschluss}
	{/await}
</p>

<h2 class="h2 mb-1 mt-4">Streitbeilegung</h2>
<p class="mb-2 text-justify first-letter:text-2xl">
	{#await data.impressum}
		<LoadingMessage>Lade Impressums-Angaben zur Schlichtungsstelle</LoadingMessage>
	{:then impressum}
		{impressum.schlichtungsstelle}
	{/await}
</p>
