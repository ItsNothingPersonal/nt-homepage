<script lang="ts">
	import LoadingMessage from '$lib/components/LoadingMessage/LoadingMessage.svelte';
	import SocialButton from '$lib/components/Socials/socialButton.svelte';

	let { data } = $props();
</script>

<div class="grid grid-cols-1 gap-2 lg:grid-cols-3">
	<h1 class="h1 mb-4 text-center font-bold md:col-span-3">Kontakt</h1>
	<h2 class="h2 mt-4 mb-2 flex justify-center font-bold md:col-span-3">Social-Media</h2>
	<p class="text-center md:col-span-3">
		Der Verein ist auf den folgenden Social-Media-Kanälen vertreten.
	</p>

	<SocialButton icon="discord" />
	<SocialButton icon="facebook" />
	<SocialButton icon="instagram" />

	<h2 class="h2 mt-4 mb-2 flex justify-center font-bold md:col-span-3">E-Mail</h2>
	<p class="text-center md:col-span-3">
		Der Verein und seine Projekte können über die folgenden E-Mail-Adressen kontaktiert werden.
	</p>

	<h3 class="h3 text-center md:col-span-3">Verein</h3>
	{#await data.kontakt}
		<LoadingMessage>Lade Vorstands-Kontakt-Informationen</LoadingMessage>
	{:then kontakt}
		<SocialButton icon="email" href={`mailto:${kontakt.email_allgemein}`} text="Allgemein" />
		<SocialButton icon="email" href={`mailto:${kontakt.email_vorstand}`} text="Vorstand" />
		<SocialButton icon="email" href={`mailto:${kontakt.email_webmaster}`} text="Webmaster" />
	{/await}

	<h3 class="h3 text-center md:col-span-3">Projekte</h3>
	{#await data.kontakt}
		<LoadingMessage>Lade Projekt-Kontakt-Informationen</LoadingMessage>
	{:then kontakt}
		<div class="flex w-full flex-col gap-2 md:col-span-3 md:flex-row">
			<SocialButton
				icon="email"
				href={`mailto:${kontakt.email_camarilla}`}
				text="Projektleitung Protektorat"
			/>
			<SocialButton
				icon="email"
				href={`mailto:${kontakt.email_sabbat}`}
				text="Projektleitung Sabbat"
			/>
		</div>
	{/await}
</div>
