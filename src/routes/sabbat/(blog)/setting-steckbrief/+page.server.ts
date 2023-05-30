import { settingSteckbrief } from '$lib/types/zod/settingSteckbrief';
import { compile } from 'mdsvex';
import { directus } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const response = settingSteckbrief
		.array()
		.parse((await directus.items('sabbat_steckbrief').readByQuery({ limit: 1 })).data);

	const data = response.length !== 1 ? undefined : response[0];

	const beschreibungCompiled = data?.beschreibung ? await compile(data.beschreibung) : undefined;

	return { steckbrief: data, beschreibung: beschreibungCompiled };
}) satisfies PageServerLoad;
