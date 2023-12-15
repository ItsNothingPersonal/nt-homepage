import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	redirect(301, '/wh40k/uebersicht');
}) satisfies PageServerLoad;
