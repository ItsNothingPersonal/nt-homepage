import { z } from 'zod';

export const folderInformation = z.object({
	id: z.string().uuid(),
	name: z.string(),
	parent: z.string().uuid()
});

export type FolderInformation = z.infer<typeof folderInformation>;
