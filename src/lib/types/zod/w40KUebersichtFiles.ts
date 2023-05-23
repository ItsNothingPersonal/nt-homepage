import { z } from 'zod';

export const w40KUebersichtFiles = z.object({
	w40k_uebersicht_id: z.string().or(z.number()),
	directus_files_id: z.string()
});

export type W40KUebersichtFiles = z.infer<typeof w40KUebersichtFiles>;
