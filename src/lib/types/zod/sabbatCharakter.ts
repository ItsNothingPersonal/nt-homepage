import { z } from 'zod';
import { blutlinie } from './blutlinie';
import { clan } from './clan';
import { sabbatAemter } from './sabbatAemter';
import { sabbatCharakterStatus } from './sabbatCharakterStatus';
import { sabbatPacks } from './sabbatPacks';

export const sabbatCharakter = z.object({
	name: z.string(),
	clan: clan.nullable(),
	blutlinie: blutlinie.nullable(),
	charakter_status: sabbatCharakterStatus.optional(),
	offizier: sabbatAemter.nullable(),
	pack: sabbatPacks.nullable(),
	beschreibung: z.string().nullish(),
	bild: z.string()
});

export type SabbatCharakter = z.infer<typeof sabbatCharakter>;
