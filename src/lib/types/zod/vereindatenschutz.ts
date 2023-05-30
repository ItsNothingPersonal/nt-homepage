import { z } from 'zod';

export const vereinDatenschutz = z.object({
	datenverarbeitung_und_uebermittlung: z.string(),
	datenschutzerklaerung: z.string()
});

export type VereinDatenschutz = z.infer<typeof vereinDatenschutz>;
