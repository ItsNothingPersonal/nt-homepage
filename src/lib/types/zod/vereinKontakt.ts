import { z } from 'zod';

export const vereinKontakt = z.object({
	email_allgemein: z.string().email(),
	email_vorstand: z.string().email(),
	email_webmaster: z.string().email(),
	email_camarilla: z.string().email(),
	email_sabbat: z.string().email(),
	email_wh40k: z.string().email()
});

export type VereinKontakt = z.infer<typeof vereinKontakt>;
