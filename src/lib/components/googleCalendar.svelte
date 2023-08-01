<script lang="ts">
	export let src: string;
	export let size: 'normal' | 'small' = 'normal';
</script>

<div class="w-full shadow-lg dark:shadow-gray-800 overflow-hidden mt-4 border-2 border-gray-300">
	<iframe
		title="Spielort Karte"
		src={`${src}&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FBerlin&showCalendars=0&showTabs=0&showDate=1&showNav=1&showTitle=0&showPrint=0&mode=${
			size === 'normal' ? 'MONTH' : 'AGENDA'
		}&hl=de`}
		style="width: 100%;"
		allowfullscreen={true}
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
		scrolling="no"
		frameborder="0"
		height="600"
	/>
</div>
