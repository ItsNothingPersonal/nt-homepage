import { projektName } from '$lib/types/zod/projektName';
import type { ParamMatcher } from '@sveltejs/kit';

export const match = ((param) => {
	return projektName.safeParse(param).success;
}) satisfies ParamMatcher;
