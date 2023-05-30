import { z } from 'zod';

export const settingSteckbrief = z.object({
	name: z.string(),
	thema: z.string(),
	stimmung: z.string(),
	setting: z.string(),
	spielart: z.string(),
	beschreibung: z.string(),
	erfahrung_start: z.number(),
	erfahrung_beginn_menge: z.number(),
	erfahrung_beginn_dauer_monate: z.number(),
	erfahrung_rest: z.number(),
	clan_ueblich: z.string(),
	clan_unueblich: z.string(),
	clan_selten: z.string(),
	clan_sehr_selten: z.string(),
	clan_verboten: z.string().nullable(),
	clans_kosten: z.string(),
	pfad_kosten: z.string()
});

export type SettingSteckbrief = z.infer<typeof settingSteckbrief>;
