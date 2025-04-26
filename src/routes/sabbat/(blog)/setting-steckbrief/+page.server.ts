import { renderMarkdown } from '$lib/markdownUtil';
import { readSingleton } from '@directus/sdk';
import { client } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const data = client.request(readSingleton('sabbat_steckbrief'));

	return { steckbrief: data, beschreibung: renderMarkdown((await data).beschreibung ?? '') };
}) satisfies PageServerLoad;
