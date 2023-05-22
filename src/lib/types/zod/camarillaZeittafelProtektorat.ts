import { z } from 'zod';

export const camarillaZeittafelProtektorat = z.object({
	datum: z.string(),
	text: z.string(),
	titel: z.string().nullable(),
	link: z.string().nullable()
});

export type CamarillaZeittafelProtektorat = z.infer<typeof camarillaZeittafelProtektorat>;
