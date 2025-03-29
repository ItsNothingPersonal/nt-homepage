import { readSingleton } from '@directus/sdk';
// @ts-ignore
import { compile } from 'mdsvex';
import { client } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const wasIstVampireLive = client.request(readSingleton('was_ist_vampire_live'));

	return {
		wasIstVampireLive,
		erklaerung: compile((await wasIstVampireLive).erklaerung)
	};
}) satisfies PageServerLoad;
