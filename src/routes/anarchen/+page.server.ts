import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	redirect(301, '/anarchen/uebersicht');
}) satisfies PageServerLoad;
