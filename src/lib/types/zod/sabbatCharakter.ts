import { z } from 'zod';
import { clan } from './clan';
import { sabbatAemter } from './sabbatAemter';
import { sabbatCharakterStatus } from './sabbatCharakterStatus';
import { sabbatPacks } from './sabbatPacks';

export const sabbatCharakter = z.object({
	name: z.string(),
	clan: clan,
	charakter_status: sabbatCharakterStatus.optional(),
	offizier: sabbatAemter.nullable(),
	pack: sabbatPacks,
	beschreibung: z.string().nullish(),
	bild: z.string()
});

export type SabbatCharakter = z.infer<typeof sabbatCharakter>;
