import { z } from 'zod';

export const shortNews = z.object({
	id: z.string().or(z.number()).optional(),
	titel: z.string(),
	synopsis: z.string(),
	user_created: z.string(),
	user_updated: z.string().nullable().optional(),
	date_created: z.string(),
	date_updated: z.string().nullable()
});

export type ShortNews = z.infer<typeof shortNews>;
