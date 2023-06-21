import { z } from 'zod';

export const projektUebersicht = z.object({
	id: z.string().or(z.number()).optional(),
	beschreibung: z.string(),
	spieltermine: z.string(),
	email: z.string().email()
});

export type ProjektUebersicht = z.infer<typeof projektUebersicht>;
