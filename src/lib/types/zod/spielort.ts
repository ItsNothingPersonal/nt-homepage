import { z } from 'zod';

export const spielort = z.object({
	id: z.string().or(z.number()).optional(),
	spielort_name: z.string(),
	spielort_strasse: z.string(),
	spielort_plz: z.string(),
	spielort_ort: z.string(),
	spielort_karte: z.string()
});

export type Spielort = z.infer<typeof spielort>;
