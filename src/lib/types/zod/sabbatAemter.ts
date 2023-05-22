import { SabbatAemterName } from '$lib/types/sabbatOffizier';
import { z } from 'zod';

export const sabbatAemter = z.object({
	name: z.nativeEnum(SabbatAemterName)
});

export type SabbatAemter = z.infer<typeof sabbatAemter>;
