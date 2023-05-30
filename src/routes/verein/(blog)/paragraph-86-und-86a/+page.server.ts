import { vereinParagraph86 } from '$lib/types/zod/vereinParagraph86';
import { compile } from 'mdsvex';
import { directus } from 'services/directus';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const response = vereinParagraph86
		.array()
		.parse((await directus.items('verein_paragraph_86_und_86a').readByQuery({ limit: 1 })).data);

	const data = response.length !== 1 ? undefined : response[0];

	const paragraph86und86aCompiled = data?.inhalt ? await compile(data.inhalt) : undefined;

	return {
		paragraph86und86aCompiled: paragraph86und86aCompiled
	};
}) satisfies PageServerLoad;
