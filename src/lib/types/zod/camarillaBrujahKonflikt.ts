import { z } from 'zod';

export const camarillaBrujahKonflikt = z.object({
	datum: z.string(),
	text: z.string(),
	titel: z.string().nullable(),
	sort: z.number()
});

export type CamarillaBrujahKonflikt = z.infer<typeof camarillaBrujahKonflikt>;
