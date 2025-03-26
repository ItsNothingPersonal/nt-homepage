import typography from '@tailwindcss/typography';
import { join } from 'path';
import type { Config } from 'tailwindcss';

const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 3. Append the path to the Skeleton package
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			gridTemplateColumns: {
				'min-content-first': 'min-content 1fr;',
				'desktop-top-menu':
					'minmax(min-content,1fr) minmax(min-content, 3fr) minmax(min-content,1fr)',
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
	plugins: [typography],
	darkMode: 'class'
} satisfies Config;

export default config;
