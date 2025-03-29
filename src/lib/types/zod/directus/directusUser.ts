import { z } from 'zod';
import { directusFile } from './directusFile';

export const directusUser = z.object({
	id: z.string(),
	first_name: z.string().nullable(),
	last_name: z.string().nullable(),
	email: z.string().nullable(),
	password: z.string().nullable(),
	location: z.string().nullable(),
	title: z.string().nullable(),
	description: z.string().nullable(),
	tags: z.string().array().nullable(),
	avatar: z.union([directusFile, z.string()]).nullable(),
	language: z.string().nullable(),
	theme: z.string().nullable(),
	tfa_secret: z.string().nullable(),
	status: z.string(),
	token: z.string().nullable(),
	last_access: z.string().datetime().nullable(),
	last_page: z.string().nullable(),
	provider: z.string(),
	external_identifier: z.string().nullable(),
	auth_data: z.record(z.string(), z.any()).nullable(),
	email_notifications: z.boolean().nullable(),
	appearance: z.string().nullable(),
	theme_dark: z.string().nullable(),
	theme_light: z.string().nullable(),
	theme_light_overrides: z.record(z.string(), z.unknown()).nullable(),
	theme_dark_overrides: z.record(z.string(), z.unknown()).nullable()
});
