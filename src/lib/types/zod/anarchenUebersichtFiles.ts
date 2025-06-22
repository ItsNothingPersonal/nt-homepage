import { z } from 'zod';

export const anarchenUebersichtFiles = z.object({
	anarchen_uebersicht_id: z.string().or(z.number()),
	directus_files_id: z.string()
});

export type AnarchenUebersichtFiles = z.infer<typeof anarchenUebersichtFiles>;
