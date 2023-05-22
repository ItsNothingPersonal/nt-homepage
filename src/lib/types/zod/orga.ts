import { z } from 'zod';
import { orgaRollen } from './orgaRollen';

export const orga = z.object({
	name: z.string(),
	rolle: orgaRollen,
	email: z.string().email().nullable(),
	bild: z.string().optional()
});

export type Orga = z.infer<typeof orga>;
