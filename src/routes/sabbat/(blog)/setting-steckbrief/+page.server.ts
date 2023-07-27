import { readSingleton } from '@directus/sdk';
import { compile } from 'mdsvex';
import { client } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const data = client.request(readSingleton('sabbat_steckbrief'));

	return { steckbrief: data, beschreibung: compile((await data).beschreibung ?? '') };
}) satisfies PageServerLoad;
