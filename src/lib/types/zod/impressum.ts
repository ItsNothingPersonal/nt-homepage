import { z } from 'zod';

export const impressum = z.object({
	betreiber_name: z.string(),
	geschaeftsadresse: z.string(),
	email: z.string().email(),
	kontodaten: z.string(),
	erster_vorstand: z.string(),
	zweiter_vorstand: z.string(),
	schatzmeister: z.string(),
	webmaster_name: z.string(),
	webmaster_anschrift: z.string(),
	webmaster_email: z.string().email(),
	webmaster_telefon: z.string().nullable(),
	copyright_notice: z.string(),
	haftungsausschluss: z.string()
});

export type Impressum = z.infer<typeof impressum>;
