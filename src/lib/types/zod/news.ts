import { z } from 'zod';

export const news = z.object({
	id: z.string().or(z.number()).optional(),
	titel: z.string(),
	news: z.string(),
	synopsis: z.string(),
	user_created: z.string(),
	user_updated: z.string().nullable(),
	date_created: z.string(),
	date_updated: z.string().nullable()
});

export type News = z.infer<typeof news>;
