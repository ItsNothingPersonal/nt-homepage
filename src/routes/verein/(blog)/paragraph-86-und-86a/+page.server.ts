import { readSingleton } from '@directus/sdk';
// @ts-expect-error compile is fine, just doesn't export types anymore
import { compile } from 'mdsvex';
import { client } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const paragraph86und86a = client.request(readSingleton('verein_paragraph_86_und_86a'));

	return {
		paragraph86und86a: compile((await paragraph86und86a).inhalt)
	};
}) satisfies PageServerLoad;
