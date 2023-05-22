import { SektenName } from '$lib/types/sektenName';
import { z } from 'zod';

export const sekten = z.object({
	name: z.nativeEnum(SektenName)
});

export type Sekten = z.infer<typeof sekten>;
