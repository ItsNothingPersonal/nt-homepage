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
	abgelegt_am: z.coerce
		.date()
		.min(new Date('2021-01-01'), 'Daten vor dem Jahr des Chronik-Starts sind ungültig')
		.nullable()
		.optional(),
	letzte_worte: z.string().nullable().optional()
});

export type SabbatCharakter = z.infer<typeof sabbatCharakter>;
