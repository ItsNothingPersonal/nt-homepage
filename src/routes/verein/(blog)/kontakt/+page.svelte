<script lang="ts">
	import SocialButton from '$lib/components/socialButton.svelte';
	import { Heading, P } from 'flowbite-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="grid grid-cols-1 lg:grid-cols-3 gap-2">
	<Heading tag="h1" class="mb-4 md:col-span-3">Kontakt</Heading>
	<Heading tag="h2" class="mb-2 md:col-span-3">Social-Media</Heading>
	<div class="md:col-span-3">
		<P align="center">Der Verein ist auf den folgenden Social-Media-Kanälen vertreten.</P>
	</div>
	<SocialButton icon="discord" />
	<SocialButton icon="facebook" />
	<SocialButton icon="instagram" />

	<Heading tag="h2" class="md:mt-2 md:col-span-3">E-Mail</Heading>
	<div class="md:col-span-3">
		<P align="center">
			Der Verein und seine Projekte können über die folgenden E-Mail-Adressen kontaktiert werden.
		</P>
	</div>

	<Heading tag="h3" class="md:col-span-3">Verein</Heading>
	<SocialButton icon="email" href={`mailto:${data.kontakt.email_allgemein}`} text="Allgemein" />
	<SocialButton icon="email" href={`mailto:${data.kontakt.email_vorstand}`} text="Vorstand" />
	<SocialButton icon="email" href={`mailto:${data.kontakt.email_webmaster}`} text="Webmaster" />

	<Heading tag="h3" class="md:col-span-3">Projekte</Heading>
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
		href={`mailto:${data.kontakt.email_wh40k}`}
		text="Projektleitung Wh40k"
	/>
</div>
