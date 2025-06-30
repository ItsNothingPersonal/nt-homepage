import { z } from 'zod';

export const sabbatCharaktererstellung = z.object({
	formular_link: z.string().url(),
	charakter_boegen_links: z
		.string()
		.url()
		.transform((val) => val.split(/\r?\n/))
});

export type SabbatCharaktererstellung = z.infer<typeof sabbatCharaktererstellung>;
