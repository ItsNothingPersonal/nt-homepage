import type { Blutlinie } from '$lib/types/zod/blutlinie';
import type { CamarillaBrujahKonflikt } from '$lib/types/zod/camarillaBrujahKonflikt';
import type { CamarillaCharaktere } from '$lib/types/zod/camarillaCharaktere';
import type { CamarillaSpielortFiles } from '$lib/types/zod/camarillaSpielortFiles';
import type { CamarillaUebersichtFiles } from '$lib/types/zod/camarillaUebersichtFiles';
import type { Clan } from '$lib/types/zod/clan';
import type { ClansFiles } from '$lib/types/zod/clansFiles';
import type { Impressum } from '$lib/types/zod/impressum';
import type { Orga } from '$lib/types/zod/orga';
import type { ProjektUebersicht } from '$lib/types/zod/projektUebersicht';
import type { SabbatCharakter } from '$lib/types/zod/sabbatCharakter';
import type { SabbatPacks } from '$lib/types/zod/sabbatPacks';
import type { SabbatSpielortFiles } from '$lib/types/zod/sabbatSpielortFiles';
import type { SabbatUebersichtFiles } from '$lib/types/zod/sabbatUebersichtFiles';
import type { SettingSteckbrief } from '$lib/types/zod/settingSteckbrief';
import type { Spielort } from '$lib/types/zod/spielort';
import type { VereinAnsprechpersonen } from '$lib/types/zod/vereinAnsprechpersonen';
import type { VereinKontakt } from '$lib/types/zod/vereinKontakt';
import type { VereinParagraph86 } from '$lib/types/zod/vereinParagraph86';
import type { VereinRollen } from '$lib/types/zod/vereinRollen';
import type { VereinDatenschutz } from '$lib/types/zod/vereindatenschutz';
import type { W40KUebersichtFiles } from '$lib/types/zod/w40KUebersichtFiles';
import type { W40KSpielortFiles } from '$lib/types/zod/w40kSpielortFiles';
import type { WasIstVampireLive } from '$lib/types/zod/wasIstVampireLive';
import type { WasSindClans } from '$lib/types/zod/wasSindClans';
import type { Zeittafel } from '$lib/types/zod/zeittafel';
import { createDirectus, rest } from '@directus/sdk';

export interface DirectusSchema {
	blutlinien: Blutlinie[];
	camarilla_brujah_konflikt: CamarillaBrujahKonflikt[];
	camarilla_charaktere: CamarillaCharaktere[];
	camarilla_orga: Orga[];
	camarilla_spielort: Spielort;
	camarilla_spielort_files: CamarillaSpielortFiles[];
	camarilla_uebersicht: ProjektUebersicht;
	camarilla_uebersicht_files: CamarillaUebersichtFiles[];
	camarilla_zeittafel_protektorat: Zeittafel[];
	clans: Clan[];
	clans_files: ClansFiles[];
	impressum: Impressum;
	sabbat_charaktere: SabbatCharakter[];
	sabbat_orga: Orga[];
	sabbat_packs: SabbatPacks[];
	sabbat_spielort: Spielort;
	sabbat_spielort_files: SabbatSpielortFiles[];
	sabbat_steckbrief: SettingSteckbrief;
	sabbat_uebersicht: ProjektUebersicht;
	sabbat_uebersicht_files: SabbatUebersichtFiles[];
	sabbat_zeittafel: Zeittafel[];
	verein_ansprechpersonen: VereinAnsprechpersonen[];
	verein_datenschutz: VereinDatenschutz;
	verein_kontakt: VereinKontakt;
	verein_paragraph_86_und_86a: VereinParagraph86;
	verein_rollen: VereinRollen[];
	w40k_spielort: Spielort;
	w40k_spielort_files: W40KSpielortFiles[];
	w40k_uebersicht: ProjektUebersicht;
	w40k_uebersicht_files: W40KUebersichtFiles[];
	was_ist_vampire_live: WasIstVampireLive;
	was_sind_clans: WasSindClans;
}

export const client = createDirectus<DirectusSchema>(import.meta.env.VITE_DIRECTUS_URL).with(
	rest()
);
