<script lang="ts">
	import { A, Heading, Img } from 'flowbite-svelte';
</script>

<Heading class="p-8 text-center" tag="h1">Willkommen beim Nächtlichen Theater</Heading>

<div class="grid grid-cols-1 md:row-start-1 md:grid-cols-3 grid-rows-3 md:grid-rows-1 gap-y-4">
	<div class="row-start-1 md:col-start-1 flex flex-col text-center gap-2 items-center">
		<Heading tag="h2">Sabbat</Heading>
		<A href="/sabbat/uebersicht">
			<Img src="/images/NT_MT_009.webp" alt="Beispielbild Sabbat" />
		</A>
	</div>
	<div
		class="row-start-2 md:row-start-1 md:col-start-2 flex flex-col text-center gap-2 items-center"
	>
		<Heading tag="h2">Camarilla</Heading>
		<A href="/camarilla/uebersicht">
			<Img src="/images/NT_VS_013.webp" alt="Beispielbild Camarilla" />
		</A>
	</div>
	<div
		class="row-start-3 md:row-start-1 md:col-start-3 flex flex-col text-center gap-2 items-center"
	>
		<Heading tag="h2">40K</Heading>
		<A href="/w40k/uebersicht">
			<Img src="/images/NT_MT_013.webp" alt="Beispielbild W40K" />
		</A>
	</div>
</div>
