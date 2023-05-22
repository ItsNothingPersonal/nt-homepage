import { z } from 'zod';

export const wasIstVampireLive = z.object({
	ueberschrift: z.string(),
	erklaerung: z.string()
});

export type WasIstVampireLive = z.infer<typeof wasIstVampireLive>;
