import { z } from 'zod';

export const vereinRollen = z.object({
	name: z.string()
});

export type VereinRollen = z.infer<typeof vereinRollen>;
