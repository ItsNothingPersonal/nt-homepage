import { z } from 'zod';
import { anarchenAemter } from './anarchenAemter';
import { blutlinie } from './blutlinie';
import { camarillaAemter } from './camarillaAemter';
import { charakterStatus } from './charakterStatus';
import { clan } from './clan';
import { itemStatus } from './itemStatus';
import { sekten } from './sekten';

export const anarchenCharakter = z.object({
	status: itemStatus,
	name: z.string(),
	clan: clan.nullable(),
	blutlinie: blutlinie.nullable(),
	charakter_status: charakterStatus.nullable(),
	offizier: anarchenAemter.nullable(),
	zusatzfunktion: camarillaAemter.nullable(),
	sekte: sekten,
	beschreibung: z.string(),
	bild: z.string(),
	abgelegt_am: z.coerce
		.date()
		.min(new Date('2025-08-23'), 'Daten vor dem Chronik-Start sind ungültig')
		.nullable()
		.optional(),
	letzte_worte: z.string().nullable().optional()
});

export type AnarchenCharakter = z.infer<typeof anarchenCharakter>;
