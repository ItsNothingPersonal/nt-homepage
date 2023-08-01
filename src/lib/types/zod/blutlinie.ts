import { z } from 'zod';
import { clan } from './clan';

export const blutlinie = z.object({
	id: z.string().or(z.number()).optional(),
	clan: clan.optional(),
	name: z.string()
});

export type Blutlinie = z.infer<typeof blutlinie>;
