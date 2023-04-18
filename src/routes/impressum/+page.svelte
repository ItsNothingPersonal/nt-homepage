<script lang="ts">
	import { Heading, P } from 'flowbite-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="max-w-screen-xl">
	<Heading tag="h1" class="mb-4">Impressum</Heading>
	<Heading tag="h2" class="mt-2">Betreiber</Heading>
	<P>
        <strong class="font-semibold text-gray-900 dark:text-white">Name: </strong>
        {data.impressum?.betreiber_name}</P>
	<P>
		<strong class="font-semibold text-gray-900 dark:text-white">Geschäftsadresse: </strong>
		{data.impressum?.geschaeftsadresse}
	</P>
	<P>
		<strong class="font-semibold text-gray-900 dark:text-white">E-Mail: </strong>
        <a class="underline decoration-dotted" href={`mailto:${data.impressum?.email}`}>{data.impressum?.email}</a>		
	</P>
	<P>
		<strong class="font-semibold text-gray-900 dark:text-white">Kontodaten: </strong>
		{data.impressum?.kontodaten}
	</P>

	<Heading tag="h2" class="mt-2">Vertretungsorgane</Heading>
	<Heading tag="h3">Erster Vorstand</Heading>
	<P>{data.impressum?.erster_vorstand}</P>
	<Heading tag="h3">Zweiter Vorstand</Heading>
	<P>{data.impressum?.zweiter_vorstand}</P>
	<Heading tag="h3">Schatzmeister</Heading>
	<P>{data.impressum?.schatzmeister}</P>

	<Heading tag="h2" class="mt-2">Webmaster</Heading>
	<Heading tag="h3">Name</Heading>
	<P>{data.impressum?.webmaster_name}</P>
	<Heading tag="h3">Kontakt & Anschrift</Heading>
	<P>
		<strong class="font-semibold text-gray-900 dark:text-white">Anschrift: </strong>
		{data.impressum?.webmaster_anschrift}
	</P>
	<P>
		<strong class="font-semibold text-gray-900 dark:text-white">E-Mail: </strong>
        <a class="underline decoration-dotted" href={`mailto:${data.impressum?.webmaster_email}`}>{data.impressum?.webmaster_email}</a>
	</P>
	{#if data.impressum?.webmaster_telefon}
		<P>
			<strong class="font-semibold text-gray-900 dark:text-white">Telefon: </strong>
			{data.impressum.webmaster_telefon}
		</P>
	{/if}

	<Heading tag="h2" class="mt-2">Copyright</Heading>
	<P>{@html data.impressum?.copyright_notice}</P>
	<Heading tag="h2" class="mt-2">Haftungsausschluss</Heading>
	<P>{@html data.impressum?.haftungsausschluss}</P>
</div>
