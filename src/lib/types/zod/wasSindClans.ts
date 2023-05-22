import { z } from 'zod';

export const wasSindClans = z.object({
	beschreibung: z.string()
});

export type WasSindClans = z.infer<typeof wasSindClans>;
