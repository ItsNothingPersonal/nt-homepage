import { z } from 'zod';

export const orgaRollen = z.object({
	name: z.string()
});

export type OrgaRollen = z.infer<typeof orgaRollen>;
