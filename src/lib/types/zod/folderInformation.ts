import { z } from 'zod';

type FolderShape = {
	id: string;
	name: string;
	parent: string | { id: string; name: string; parent: string | FolderShape | null } | null;
};

export const folderInformation: z.ZodType<FolderShape> = z.lazy(() =>
	z.object({
		id: z.string().uuid(),
		name: z.string(),
		parent: z.union([z.string().uuid(), z.lazy(() => folderInformation), z.null()])
	})
);

export type FolderInformation = z.infer<typeof folderInformation>;
