import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		colors: {
			primary: colors.amber,
			light: colors.slate,
			dark: colors.gray
		},
		extend: {
			gridTemplateColumns: {
				'min-content-first': 'min-content 1fr;',
				'news-header': '1.75rem auto'
			},
			gridTemplateRows: {
				'min-content-first': 'min-content 1fr;',
				'body-template': '1fr auto',
				'news-preview':
					'minmax(min-content,15%) minmax(min-content,15%) minmax(min-content, 55%) min-content'
			},
			screens: {
				'gal-sm': '1060px',
				gal: '1400px',
				xxl: '1450px'
			}
		}
	},
	plugins: [require('flowbite/plugin')],
	darkMode: 'class'
};
