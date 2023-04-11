<script lang="ts">
	import { Button, Heading, Img } from 'flowbite-svelte';
</script>

<Heading class="p-8 text-center" tag="h1">Willkommen beim Nächtlichen Theater</Heading>

<div class="grid grid-cols-1 md:row-start-1 md:grid-cols-3 grid-rows-3 md:grid-rows-1 gap-y-4">
	<div class="row-start-1 md:col-start-1 flex flex-col text-center gap-2 items-center">
		<Heading tag="h2">Sabbat</Heading>
		<Img src="/images/NT_MT_009.jpg" alt="Beispielbild Sabbat" />
		<div class="w-full">
			<Button href="/" gradient color="pinkToOrange">
				Schließe dich dem Schwert Kains an und vernichte die Vorsintflutlichen!
				<svg
					class="ml-2 -mr-1 w-5 h-5"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/>
				</svg>
			</Button>
		</div>
	</div>
	<div class="row-start-2 md:row-start-1 md:col-start-2 flex flex-col text-center gap-2 items-center">
		<Heading tag="h2">Camarilla</Heading>
		<Img src="/images/NT_VS_013.jpg" alt="Beispielbild Camarilla" />
		<div class="w-full">
			<Button href="/" gradient color="purpleToPink">
				Eine Camarilla Domäne und eine Enklave der Anarchen: Wie lange wird das Pulverfass noch
				halten?
				<svg
					class="ml-2 -mr-1 w-5 h-5"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/>
				</svg>
			</Button>
		</div>
	</div>
	<div class="row-start-3 md:row-start-1 md:col-start-3 flex flex-col text-center gap-2 items-center">
		<Heading tag="h2">40K</Heading>
		<Img src="/images/NT_MT_013.jpg" alt="Beispielbild 40K" />
		<div class="w-full">
			<Button href="/" gradient color="greenToBlue">
				In The Grim Dark Future, There Is Only War
				<svg
					class="ml-2 -mr-1 w-5 h-5"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/>
				</svg>
			</Button>
		</div>
	</div>
</div>
