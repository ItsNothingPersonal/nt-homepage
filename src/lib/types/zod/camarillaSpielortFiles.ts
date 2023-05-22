import { z } from 'zod';

export const camarillaSpielortFiles = z.object({
	camarilla_spielort_id: z.string().or(z.number()),
	directus_files_id: z.string()
});

export type CamarillaSpielortFiles = z.infer<typeof camarillaSpielortFiles>;
