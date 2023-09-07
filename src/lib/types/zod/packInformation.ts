import { z } from 'zod';
import { sabbatCharakter } from './sabbatCharakter';
import { sabbatPacks } from './sabbatPacks';

export const packInformation = z.object({
	leaders: sabbatCharakter.array(),
	pack: sabbatPacks
});

export type PackInformation = z.infer<typeof packInformation>;
