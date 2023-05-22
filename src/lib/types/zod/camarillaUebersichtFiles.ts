import { z } from 'zod';

export const camarillaUebersichtFiles = z.object({
	camarilla_uebersicht_id: z.string().or(z.number()),
	directus_files_id: z.string()
});

export type CamarillaUebersichtFiles = z.infer<typeof camarillaUebersichtFiles>;
