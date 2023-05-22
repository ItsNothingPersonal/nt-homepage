import { z } from 'zod';

export const sabbatUebersichtFiles = z.object({
	sabbat_uebersicht_id: z.string().or(z.number()),
	directus_files_id: z.string()
});

export type SabbatUebersichtFiles = z.infer<typeof sabbatUebersichtFiles>;
