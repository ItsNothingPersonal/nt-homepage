import { z } from 'zod';

export const anarchenSpielortFiles = z.object({
	anarchen_spielort_id: z.string().or(z.number()),
	directus_files_id: z.string()
});

export type AnarchenSpielortFiles = z.infer<typeof anarchenSpielortFiles>;
