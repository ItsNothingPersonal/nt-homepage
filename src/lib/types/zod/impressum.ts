import { z } from 'zod';

export const impressum = z.object({
	betreiber_name: z.string(),
	strasse: z.string(),
	plz: z.number().int(),
	ort: z.string(),
	vereinsregister: z.number().int(),
	registergericht: z.string(),
	email: z.string().email(),
	telefon: z.string(),
	erster_vorstand: z.string(),
	zweiter_vorstand: z.string(),
	schatzmeister: z.string(),
	webmaster_name: z.string(),
	webmaster_strasse: z.string(),
	webmaster_plz: z.number().int(),
	webmaster_ort: z.string(),
	copyright_notice: z.string(),
	haftungsausschluss: z.string(),
	schlichtungsstelle: z.string()
});

export type Impressum = z.infer<typeof impressum>;
