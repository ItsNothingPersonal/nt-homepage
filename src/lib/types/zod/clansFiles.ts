import { z } from 'zod';

export const clansFiles = z.object({
	clans_id: z.string().or(z.number()),
	directus_files_id: z.string()
});

export type ClansFiles = z.infer<typeof clansFiles>;
