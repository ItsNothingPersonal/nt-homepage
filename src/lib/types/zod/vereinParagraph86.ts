import { z } from 'zod';

export const vereinParagraph86 = z.object({
	inhalt: z.string()
});

export type VereinParagraph86 = z.infer<typeof vereinParagraph86>;
