import { readSingleton } from '@directus/sdk';
// @ts-ignore
import { compile } from 'mdsvex';
import { client } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const impressum = client.request(readSingleton('impressum'));

	return {
		impressum,
		copyrightNotice: compile((await impressum).copyright_notice)
	};
}) satisfies PageServerLoad;
