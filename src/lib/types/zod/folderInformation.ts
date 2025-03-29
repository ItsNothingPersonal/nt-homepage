import { z } from 'zod';

export const folderInformation: z.ZodType<any> = z.object({
	id: z.string().uuid(),
	name: z.string(),
	parent: z.union([z.lazy(() => folderInformation), z.string().uuid()])
});

export type FolderInformation = z.infer<typeof folderInformation>;
