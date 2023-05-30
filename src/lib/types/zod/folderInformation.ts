import { z } from 'zod';

export const folderInformation = z.object({
	id: z.string(),
	name: z.string(),
	parent: z.string()
});

export type FolderInformation = z.infer<typeof folderInformation>;
