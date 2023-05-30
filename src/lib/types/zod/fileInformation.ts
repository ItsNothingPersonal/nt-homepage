import { z } from 'zod';

export const fileInformation = z.object({
	id: z.string(),
	storage: z.string(),
	filename_disk: z.string(),
	filename_download: z.string(),
	type: z.string(),
	folder: z.string().nullable(),
	uploaded_by: z.string().uuid(),
	uploaded_on: z.string().datetime(),
	modified_by: z.string().uuid().nullable(),
	modified_on: z.string().datetime(),
	charset: z.string().nullable(),
	filesize: z.string(),
	width: z.number().nullable(),
	height: z.number().nullable(),
	duration: z.string().nullable(),
	embed: z.string().nullable(),
	description: z.string().nullable(),
	location: z.string().nullable(),
	tags: z.string().nullable(),
	metadata: z.any()
});

export type FileInformation = z.infer<typeof fileInformation>;
