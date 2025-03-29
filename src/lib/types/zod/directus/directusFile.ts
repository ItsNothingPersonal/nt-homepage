import { z } from 'zod';
import { directusFolder } from './directusFolder';
import { directusUser } from './directusUser';

export const directusFile: z.ZodType<any> = z.object({
	id: z.string(),
	storage: z.string(),
	filename_disk: z.string().nullable(),
	filename_download: z.string(),
	title: z.string().nullable(),
	type: z.string().nullable(),
	folder: z.union([directusFolder, z.string()]).optional().nullable(),
	uploaded_by: z.union([directusUser, z.string()]).nullable(),
	uploaded_on: z.date(),
	modified_by: z.union([directusUser, z.string()]).nullable(),
	modified_on: z.date(),
	charset: z.string().nullable(),
	filesize: z.string().nullable(),
	width: z.number().nullable(),
	height: z.number().nullable(),
	duration: z.number().nullable(),
	embed: z.unknown(),
	description: z.string().nullable(),
	location: z.string().nullable(),
	tags: z.string().array().nullable(),
	metadata: z.record(z.string(), z.any()).nullable(),
	focal_point_x: z.number().nullable(),
	focal_point_y: z.number().nullable()
});

export type DirectusFile = z.infer<typeof directusFile>;
