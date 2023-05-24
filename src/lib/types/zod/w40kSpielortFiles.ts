import { z } from 'zod';

export const w40KSpielortFiles = z.object({
	w40k_spielort_id: z.string().or(z.number()),
	directus_files_id: z.string()
});

export type W40KSpielortFiles = z.infer<typeof w40KSpielortFiles>;
