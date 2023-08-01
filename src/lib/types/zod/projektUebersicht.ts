import { z } from 'zod';

export const projektUebersicht = z.object({
	id: z.string().or(z.number()).optional(),
	beschreibung: z.string(),
	spieltermine: z.string(),
	email: z.string().email(),
	google_calendar_link: z.string().url().optional().nullable()
});

export type ProjektUebersicht = z.infer<typeof projektUebersicht>;
