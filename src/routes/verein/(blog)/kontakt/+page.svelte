<script lang="ts">
	import SocialButton from '$lib/components/socialButton.svelte';
	import { Heading, P } from 'flowbite-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Heading tag="h1" class="mb-4">Kontakt</Heading>
<Heading tag="h2" class="mb-2">Social-Media</Heading>
<P align="center">Der Verein ist auf den folgenden Social-Media-Kanälen vertreten.</P>
<div class="flex flex-col md:flex-row gap-1 w-50 mt-2 mb-4 justify-center">
	<SocialButton icon="discord" />
	<SocialButton icon="facebook" />
	<SocialButton icon="instagram" />
</div>

<Heading tag="h2" class="mb-2">E-Mail</Heading>
<P align="center">
	Der Verein und seine Projekte können über die folgenden E-Mail-Adressen kontaktiert werden.
</P>

<Heading tag="h3" class="mb-1">Verein</Heading>
<div class="flex flex-col md:flex-row gap-1 w-50 mt-2 mb-4 justify-center">
	<SocialButton icon="email" href={`mailto:${data.kontakt.email_allgemein}`} text="Allgemein" />
	<SocialButton icon="email" href={`mailto:${data.kontakt.email_vorstand}`} text="Vorstand" />
	<SocialButton icon="email" href={`mailto:${data.kontakt.email_webmaster}`} text="Webmaster" />
</div>

<Heading tag="h3" class="mb-2">Projekte</Heading>
<div class="flex flex-col md:flex-row gap-1 w-50 mt-2 mb-4 justify-center">
	<SocialButton
		icon="email"
		href={`mailto:${data.kontakt.email_camarilla}`}
		text="Projektleitung Protektorat"
	/>
	<SocialButton
		icon="email"
		href={`mailto:${data.kontakt.email_sabbat}`}
		text="Projektleitung Sabbat"
	/>
	<SocialButton
		icon="email"
		href={`mailto:${data.kontakt.email_w40k}`}
		text="Projektleitung W40K"
	/>
</div>
