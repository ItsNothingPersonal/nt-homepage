import { z } from 'zod';
import { vereinRollen } from './vereinRollen';

export const vereinAnsprechpersonen = z.object({
	id: z.string().or(z.number()).optional(),
	name: z.string(),
	rolle: vereinRollen,
	email: z.string().email().nullable(),
	bild: z.string().nullable()
});

export type VereinAnsprechpersonen = z.infer<typeof vereinAnsprechpersonen>;
