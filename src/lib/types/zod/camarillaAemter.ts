import { CamarillaAemterName } from '$lib/types/camarillaAemterName';
import { z } from 'zod';

export const camarillaAemter = z.object({
	name: z.nativeEnum(CamarillaAemterName)
});

export type CamarillaAemter = z.infer<typeof camarillaAemter>;
