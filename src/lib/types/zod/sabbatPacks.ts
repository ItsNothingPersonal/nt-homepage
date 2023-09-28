import { z } from 'zod';

export const sabbatPacks = z.object({
	name: z.string(),
	logo: z.string().optional().nullable(),
	beschreibung: z.string().optional().nullable()
});

export type SabbatPacks = z.infer<typeof sabbatPacks>;
