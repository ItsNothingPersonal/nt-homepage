import { ClanName } from '$lib/types/clanName';
import { z } from 'zod';

export const clan = z.object({
	id: z.string().or(z.number()).optional(),
	name: z.nativeEnum(ClanName),
	nickname: z.string().optional(),
	sekte: z.string().optional(),
	logo: z.string().optional(),
	beschreibung_synopsis: z.string().nullish(),
	beschreibung: z.string().nullish()
});

export type Clan = z.infer<typeof clan>;
