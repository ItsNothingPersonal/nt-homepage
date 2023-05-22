import { z } from 'zod';

export const sabbatPacks = z.object({
	name: z.string()
});

export type SabbatPacks = z.infer<typeof sabbatPacks>;
