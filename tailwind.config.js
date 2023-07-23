/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		colors: {
			primary: {
				50: '#fffbeb',
				100: '#fef3c7',
				200: '#fde68a',
				300: '#fcd34d',
				400: '#fbbf24',
				500: '#f59e0b',
				600: '#d97706',
				700: '#b45309',
				800: '#92400e',
				900: '#78350f'
			}
		},
		extend: {
			gridTemplateColumns: {
				'min-content-first': 'min-content 1fr;'
			},
			gridTemplateRows: {
				'min-content-first': 'min-content 1fr;',
				'body-template': '1fr auto'
			}
		}
	},
	plugins: [require('flowbite/plugin')],
	darkMode: 'class'
};
