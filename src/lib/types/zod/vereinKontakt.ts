import { z } from 'zod';

export const vereinKontakt = z.object({
	email_allgemein: z.string().email(),
	email_vorstand: z.string().email(),
	email_webmaster: z.string().email(),
	email_camarilla: z.string().email(),
	email_sabbat: z.string().email(),
	email_w40k: z.string().email(),
	discord: z.string(),
	facebook: z.string(),
	instagram: z.string()
});

export type VereinKontakt = z.infer<typeof vereinKontakt>;
