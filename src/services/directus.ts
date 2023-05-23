import type { CamarillaAemter } from '$lib/types/zod/camarillaAemter';
import type { CamarillaBrujahKonflikt } from '$lib/types/zod/camarillaBrujahKonflikt';
import type { CamarillaCharaktere } from '$lib/types/zod/camarillaCharaktere';
import type { CamarillaSpielortFiles } from '$lib/types/zod/camarillaSpielortFiles';
import type { CamarillaUebersichtFiles } from '$lib/types/zod/camarillaUebersichtFiles';
import type { CamarillaZeittafelProtektorat } from '$lib/types/zod/camarillaZeittafelProtektorat';
import type { CharakterStatus } from '$lib/types/zod/charakterStatus';
import type { Clan } from '$lib/types/zod/clan';
import type { ClansFiles } from '$lib/types/zod/clansFiles';
import type { Impressum } from '$lib/types/zod/impressum';
import type { Orga } from '$lib/types/zod/orga';
import type { OrgaRollen } from '$lib/types/zod/orgaRollen';
import type { ProjektUebersicht } from '$lib/types/zod/projektUebersicht';
import type { SabbatAemter } from '$lib/types/zod/sabbatAemter';
import type { SabbatCharakter } from '$lib/types/zod/sabbatCharakter';
import type { SabbatCharakterStatus } from '$lib/types/zod/sabbatCharakterStatus';
import type { SabbatPacks } from '$lib/types/zod/sabbatPacks';
import type { SabbatSpielortFiles } from '$lib/types/zod/sabbatSpielortFiles';
import type { SabbatUebersichtFiles } from '$lib/types/zod/sabbatUebersichtFiles';
import type { Sekten } from '$lib/types/zod/sekten';
import type { Spielort } from '$lib/types/zod/spielort';
import type { W40KUebersichtFiles } from '$lib/types/zod/w40KUebersichtFiles';
import type { WasIstVampireLive } from '$lib/types/zod/wasIstVampireLive';
import type { WasSindClans } from '$lib/types/zod/wasSindClans';
import { Directus } from '@directus/sdk';

type DirectusCollections = {
	impressum: Impressum;
	was_ist_vampire_live: WasIstVampireLive;
	clans: Clan;
	clans_files: ClansFiles;
	was_sind_clans: WasSindClans;
	camarilla_uebersicht: ProjektUebersicht;
	camarilla_uebersicht_files: CamarillaUebersichtFiles;
	camarilla_charaktere: CamarillaCharaktere;
	charakter_status: CharakterStatus;
	camarilla_aemter: CamarillaAemter;
	camarilla_spielort: Spielort;
	camarilla_spielort_files: CamarillaSpielortFiles;
	camarilla_zeittafel_protektorat: CamarillaZeittafelProtektorat;
	camarilla_brujah_konflikt: CamarillaBrujahKonflikt;
	camarilla_orga: Orga;
	orga_rollen: OrgaRollen;
	sekten: Sekten;
	sabbat_uebersicht: ProjektUebersicht;
	sabbat_uebersicht_files: SabbatUebersichtFiles;
	sabbat_charakter_status: SabbatCharakterStatus;
	sabbat_aemter: SabbatAemter;
	sabbat_packs: SabbatPacks;
	sabbat_charaktere: SabbatCharakter;
	sabbat_spielort: Spielort;
	sabbat_spielort_files: SabbatSpielortFiles;
	sabbat_orga: Orga;
	w40k_uebersicht: ProjektUebersicht;
	w40k_uebersicht_files: W40KUebersichtFiles;
};

export const directus = new Directus<DirectusCollections>(import.meta.env.VITE_DIRECTUS_URL);

export function getImageUrl(
	filesId: string,
	width = 768,
	height = 512,
	fit: 'cover' | 'contain' | 'inside' | 'outside' = 'contain',
	format: 'auto' | 'jpg' | 'png' | 'webp' | 'tiff' = 'auto'
) {
	return `${
		import.meta.env.VITE_DIRECTUS_URL
	}/assets/${filesId}?format=${format}&width=${width}&height=${height}&fit=${fit}`;
}
