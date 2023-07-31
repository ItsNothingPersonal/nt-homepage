import { z } from 'zod';
import { basicUser } from './basicUser';
import { projektName } from './projektName';

export const newsWithUser = z.object({
	id: z.string().or(z.number()).optional(),
	titel: z.string(),
	news: z.string(),
	synopsis: z.string(),
	user_created: basicUser,
	user_updated: basicUser.optional(),
	date_created: z.date(),
	date_updated: z.date().nullish(),
	project: projektName
});

export type NewsWithUser = z.infer<typeof newsWithUser>;
