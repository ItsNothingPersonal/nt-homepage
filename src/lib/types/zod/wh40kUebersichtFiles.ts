import { z } from 'zod';

export const wh40kUebersichtFiles = z.object({
	wh40k_uebersicht_id: z.string().or(z.number()),
	directus_files_id: z.string()
});

export type wh40kUebersichtFiles = z.infer<typeof wh40kUebersichtFiles>;
