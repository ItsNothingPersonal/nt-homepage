import { z } from 'zod';
import { blutlinie } from './blutlinie';
import { clan } from './clan';
import { itemStatus } from './itemStatus';
import { sabbatAemter } from './sabbatAemter';
import { sabbatCharakterStatus } from './sabbatCharakterStatus';
import { sabbatPacks } from './sabbatPacks';

export const sabbatCharakter = z.object({
	status: itemStatus,
	name: z.string(),
	clan: clan.nullable(),
	blutlinie: blutlinie.nullable(),
	charakter_status: sabbatCharakterStatus.optional(),
	offizier: sabbatAemter.nullable(),
	pack: sabbatPacks.nullable(),
	beschreibung: z.string().nullish(),
	bild: z.string(),
	letzte_worte: z.string().nullable().optional(),
	date_updated: z.coerce.date()
});

export type SabbatCharakter = z.infer<typeof sabbatCharakter>;
