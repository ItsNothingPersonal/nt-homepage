<script lang="ts">
	import { Heading, P } from 'flowbite-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Heading tag="h1" class="mb-4">Impressum</Heading>
<Heading tag="h2" class="mt-2">Angaben gemäß § 5 TMG</Heading>
<P>
	{data.impressum.betreiber_name}
</P>
<P>
	{data.impressum.strasse}
</P>
<P>
	{data.impressum.plz}
	{data.impressum.ort}
</P>
<br />
<P>
	<strong class="font-semibold text-gray-900 dark:text-white">Vereinsregister: </strong>
	{data.impressum.vereinsregister}
</P>
<P>
	<strong class="font-semibold text-gray-900 dark:text-white">Registergericht: </strong>
	{data.impressum.registergericht}
</P>

<Heading tag="h3" class="mt-2">Vertreten durch</Heading>
<P>{data.impressum.erster_vorstand} (Erster Vorstand)</P>
<P>{data.impressum.zweiter_vorstand} (Zweiter Vorstand)</P>
<P>{data.impressum.schatzmeister} (Schatzmeister)</P>

<Heading tag="h2" class="mt-2">Kontakt</Heading>
<P>
	<strong class="font-semibold text-gray-900 dark:text-white">Telefon: </strong>
	{data.impressum.telefon}
</P>
<P>
	<strong class="font-semibold text-gray-900 dark:text-white">E-Mail: </strong>
	<a class="underline decoration-dotted" href={`mailto:${data.impressum.email}`}>
		{data.impressum.email}
	</a>
</P>

<Heading tag="h2" class="mt-2">Redaktionell verantwortlich</Heading>
<P>{data.impressum.webmaster_name}</P>
<P>
	{data.impressum.webmaster_strasse}
</P>
<P>
	{data.impressum.webmaster_plz}
	{data.impressum.webmaster_ort}
</P>

<Heading tag="h2" class="mt-2">Copyright</Heading>
<P
	uppercase
	class="[&>p]:first-letter:text-2xl [&>p]:text-justify [&>p]:mb-2 [&>p>a]:underline [&>p>a]:decoration-dotted"
>
	{@html data.copyrightNotice?.code}
</P>

<Heading tag="h2" class="mt-2">Haftungsausschluss</Heading>
<P uppercase class="first-letter:text-2xl text-justify mb-2">
	{data.impressum.haftungsausschluss}
</P>

<Heading tag="h2" class="mt-2">Streitbeilegung</Heading>
<P uppercase class="first-letter:text-2xl text-justify mb-2">
	{data.impressum.schlichtungsstelle}
</P>
