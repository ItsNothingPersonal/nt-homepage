import { z } from 'zod';

export const sabbatSpielortFiles = z.object({
	sabbat_spielort_id: z.string().or(z.number()),
	directus_files_id: z.string()
});

export type SabbatSpielortFiles = z.infer<typeof sabbatSpielortFiles>;
