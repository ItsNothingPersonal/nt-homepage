import { z } from 'zod';

export const directusFolder = z.object({
	id: z.string(),
	name: z.string(),
	parent: z.union([z.lazy((): z.ZodType<unknown> => directusFolder), z.string()]).nullable()
});
