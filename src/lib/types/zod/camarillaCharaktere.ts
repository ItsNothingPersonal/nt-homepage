import { z } from 'zod';
import { blutlinie } from './blutlinie';
import { camarillaAemter } from './camarillaAemter';
import { charakterStatus } from './charakterStatus';
import { clan } from './clan';
import { itemStatus } from './itemStatus';
import { sekten } from './sekten';

export const camarillaCharakter = z.object({
	status: itemStatus,
	name: z.string(),
	clan: clan.nullable(),
	blutlinie: blutlinie.nullable(),
	charakter_status: charakterStatus.nullable(),
	offizier: camarillaAemter.nullable(),
	zusatzfunktion: camarillaAemter.nullable(),
	sekte: sekten,
	beschreibung: z.string(),
	bild: z.string(),
	abgelegt_am: z.coerce
		.date()
		.min(new Date('2021-01-01'), 'Daten vor dem Jahr des Chronik-Starts sind ungültig'),
	letzte_worte: z.string().nullable().optional()
});

export type CamarillaCharakter = z.infer<typeof camarillaCharakter>;
