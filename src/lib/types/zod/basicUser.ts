import { z } from 'zod';
import { fileInformation } from './fileInformation';

export const basicUser = z.object({
	id: z.string().or(z.number()).optional(),
	first_name: z.string().nullish(),
	last_name: z.string().nullish(),
	avatar: z.union([fileInformation, z.string()]).optional().nullable()
});

export type BasicUser = z.infer<typeof basicUser>;
