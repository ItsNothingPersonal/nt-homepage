import { z } from 'zod';
import { directusUser } from './directus/directusUser';
import { folderInformation } from './folderInformation';

export const fileInformation = z.object({
	id: z.string(),
	storage: z.string(),
	filename_disk: z.string().nullable(),
	filename_download: z.string(),
	title: z.string().nullable(),
	type: z.string().nullable(),
	folder: z.union([z.string(), folderInformation]).optional().nullable(),
	uploaded_by: z.union([directusUser, z.string()]).nullable(),
	uploaded_on: z.string().datetime(),
	modified_by: z.union([directusUser, z.string()]).nullable(),
	modified_on: z.string().datetime().nullable(),
	charset: z.string().nullable(),
	filesize: z.string().nullable(),
	width: z.number().nullable(),
	height: z.number().nullable(),
	duration: z.number().nullable(),
	embed: z.unknown(),
	description: z.string().nullable(),
	location: z.string().nullable(),
	tags: z.array(z.string()).nullable(),
	metadata: z.record(z.string(), z.any()).nullable()
});

export type FileInformation = z.infer<typeof fileInformation>;
