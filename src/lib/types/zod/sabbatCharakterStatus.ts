import { SabbatCharakterStatusName } from '$lib/types/sabbatCharakterStatusName';
import { z } from 'zod';

export const sabbatCharakterStatus = z.object({
	name: z.nativeEnum(SabbatCharakterStatusName)
});

export type SabbatCharakterStatus = z.infer<typeof sabbatCharakterStatus>;
