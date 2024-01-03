import { z } from 'zod';

export const zeittafel = z.object({
	id: z.string().optional(),
	datum: z.string(),
	text: z.string(),
	titel: z.string().nullable(),
	link: z.string().nullable().optional(),
	sort: z.number().optional()
});

export type Zeittafel = z.infer<typeof zeittafel>;
