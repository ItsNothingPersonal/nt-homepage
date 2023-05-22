import { z } from 'zod';
import { camarillaAemter } from './camarillaAemter';
import { charakterStatus } from './charakterStatus';
import { clan } from './clan';
import { sekten } from './sekten';

export const camarillaCharaktere = z.object({
	name: z.string(),
	clan: clan,
	charakter_status: charakterStatus.nullable(),
	offizier: camarillaAemter.nullable(),
	zusatzfunktion: camarillaAemter.nullable(),
	sekte: sekten,
	beschreibung: z.string(),
	bild: z.string()
});

export type CamarillaCharaktere = z.infer<typeof camarillaCharaktere>;
