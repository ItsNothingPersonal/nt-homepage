import { readSingleton } from '@directus/sdk';
import { compile } from 'mdsvex';
import { client } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const wasIstVampireLiveResponse = client.request(readSingleton('was_ist_vampire_live'));

	return {
		ueberschrift: (await wasIstVampireLiveResponse).ueberschrift,
		erklaerung: compile((await wasIstVampireLiveResponse).erklaerung)
	};
}) satisfies PageServerLoad;
