import { z } from 'zod';

export const wh40kSpielortFiles = z.object({
	wh40k_spielort_id: z.string().or(z.number()),
	directus_files_id: z.string()
});

export type Wh40kSpielortFiles = z.infer<typeof wh40kSpielortFiles>;
