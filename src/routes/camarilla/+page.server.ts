import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	throw redirect(301, '/camarilla/uebersicht');
}) satisfies PageServerLoad;
