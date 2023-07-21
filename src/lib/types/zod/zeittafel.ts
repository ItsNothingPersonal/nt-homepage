import { z } from 'zod';

export const zeittafel = z.object({
	datum: z.string(),
	text: z.string(),
	titel: z.string().nullable(),
	link: z.string().nullable()
});

export type Zeittafel = z.infer<typeof zeittafel>;
