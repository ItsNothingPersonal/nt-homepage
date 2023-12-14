<script lang="ts">
	export let data;
</script>

<h1 class="h1">Impressum</h1>
<h2 class="h2 mb-1 mt-4">Angaben gemäß § 5 TMG</h2>

<p>
	{data.impressum.betreiber_name}
</p>
<p>
	{data.impressum.strasse}
</p>
<p>
	{data.impressum.plz}
	{data.impressum.ort}
</p>
<br />
<p>
	<strong class="font-semibold text-gray-900 dark:text-white">Vereinsregister: </strong>
	{data.impressum.vereinsregister}
</p>
<p>
	<strong class="font-semibold text-gray-900 dark:text-white">Registergericht: </strong>
	{data.impressum.registergericht}
</p>

<h3 class="h3 mt-2">Vertreten durch</h3>
<p>{data.impressum.erster_vorstand} (Erster Vorstand)</p>
<p>{data.impressum.zweiter_vorstand} (Zweiter Vorstand)</p>
<p>{data.impressum.schatzmeister} (Schatzmeister)</p>

<h2 class="h2 mb-1 mt-4">Kontakt</h2>
<p>
	<strong class="font-semibold text-gray-900 dark:text-white">Telefon: </strong>
	{data.impressum.telefon}
</p>
<p>
	<strong class="font-semibold text-gray-900 dark:text-white">E-Mail: </strong>
	<a class="underline decoration-dotted underline-offset-4" href={`mailto:${data.impressum.email}`}>
		{data.impressum.email}
	</a>
</p>

<h2 class="h2 mb-1 mt-4">Redaktionell verantwortlich</h2>
<p>{data.impressum.webmaster_name}</p>
<p>
	{data.impressum.webmaster_strasse}
</p>
<p>
	{data.impressum.webmaster_plz}
	{data.impressum.webmaster_ort}
</p>

<h2 class="h2 mb-1 mt-4">Copyright</h2>
<p
	class="[&>h3]:h3 [&>h3]:mt-2 [&>p:not(:last-of-type)]:mb-2 [&>p>a]:underline [&>p>a]:decoration-dotted [&>p>a]:underline-offset-4 [&>p>a]:underline-offset-4 [&>p]:text-justify [&>p]:first-letter:text-2xl"
>
	{@html data.copyrightNotice?.code}
</p>

<h2 class="h2 mb-1 mt-4">Haftungsausschluss</h2>
<p class=" mb-2 text-justify first-letter:text-2xl">
	{data.impressum.haftungsausschluss}
</p>

<h2 class="h2 mb-1 mt-4">Streitbeilegung</h2>
<p class="mb-2 text-justify first-letter:text-2xl">
	{data.impressum.schlichtungsstelle}
</p>
