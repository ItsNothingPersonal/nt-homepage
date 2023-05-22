import { z } from 'zod';
import { CharakterStatusName } from '../charakterStatusName';

export const charakterStatus = z.object({
	name: z.nativeEnum(CharakterStatusName)
});

export type CharakterStatus = z.infer<typeof charakterStatus>;
