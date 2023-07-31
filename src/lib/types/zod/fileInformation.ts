import { z } from 'zod';

export const fileInformation = z.object({
	id: z.string(),
	storage: z.string(),
	filename_disk: z.string().nullable(),
	filename_download: z.string(),
	type: z.string().nullable(),
	folder: z.string().or(z.custom<{ id: string; name: string; parent: unknown }>()).nullable(),
	uploaded_by: z.string().uuid(),
	uploaded_on: z.string().datetime(),
	modified_by: z.string().uuid().nullable(),
	modified_on: z.string().datetime(),
	charset: z.string().nullable(),
	filesize: z.string().nullable(),
	width: z.number().nullable(),
	height: z.number().nullable(),
	duration: z.number().nullable(),
	embed: z.unknown(),
	description: z.string().nullable(),
	location: z.string().nullable(),
	tags: z.string().array().nullable(),
	metadata: z.any()
});

export type FileInformation = z.infer<typeof fileInformation>;
