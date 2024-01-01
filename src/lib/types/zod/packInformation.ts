import { z } from 'zod';
import { sabbatCharakter } from './sabbatCharakter';
import { sabbatPack } from './sabbatPacks';

export const packInformation = z.object({
	leaders: sabbatCharakter.array(),
	pack: sabbatPack
});

export type PackInformation = z.infer<typeof packInformation>;
