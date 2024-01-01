import { z } from 'zod';
import { itemStatus } from './itemStatus';

export const sabbatPack = z.object({
	status: itemStatus,
	name: z.string(),
	logo: z.string().optional().nullable(),
	beschreibung: z.string().optional().nullable()
});

export type SabbatPack = z.infer<typeof sabbatPack>;
