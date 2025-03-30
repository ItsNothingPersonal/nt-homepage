import { z } from 'zod';
import { fileInformation } from '../fileInformation';

export const directusUser = z.object({
	id: z.string(),
	first_name: z.string().nullable(),
	last_name: z.string().nullable(),
	avatar: z.union([z.string(), fileInformation]).nullable()
});

export type DirectusUser = z.infer<typeof directusUser>;
