import type { CamarillaOffizier } from '$lib/types/camarillaOffizier';
import type { CharakterStatusName } from '$lib/types/charakterStatusName';
import type { ClanName } from '$lib/types/clanName';
import type { SabbatCharakterStatusName } from '$lib/types/sabbatCharakterStatusName';
import type { SabbatOffizier } from '$lib/types/sabbatOffizier';
import type { SektenName } from '$lib/types/sektenName';
import { Directus, type ID } from '@directus/sdk';

type Impressum = {
	id: ID;
	betreiber_name: string;
	geschaeftsadresse: string;
	email: string;
	kontodaten: string;
	erster_vorstand: string;
	zweiter_vorstand: string;
	schatzmeister: string;
	webmaster_name: string;
	webmaster_anschrift: string;
	webmaster_email: string;
	webmaster_telefon: string;
	copyright_notice: string;
	haftungsausschluss: string;
};

type WasIstVampireLive = {
	id: ID;
	ueberschrift: string;
	erklaerung: string;
};

export type Clans = {
	id: ID;
	name: ClanName;
	nickname: string;
	sekte: string;
	logo?: number;
	beschreibung_synopsis?: string;
	beschreibung?: string;
};

export type ClansFiles = {
	id: ID;
	clans_id: ID;
	directus_files_id: string;
};

type WasSindClans = {
	id: ID;
	beschreibung: string;
};

type CamarillaUebersicht = {
	id: ID;
	beschreibung: string;
	spieltermine: string;
	email: string;
	discord: string;
};

type CamarillaUebersichtFiles = {
	id: ID;
	camarilla_uebersicht_id: ID;
	directus_files_id: string;
};

export type CamarillaCharaktere = {
	id: ID;
	name: string;
	clan: Clans;
	charakter_status?: CharakterStatus;
	offizier?: ChamarillaAemter;
	zusatzfunktion?: ChamarillaAemter;
	sekte: Sekten;
	beschreibung: string;
	bild: string;
};

export type CharakterStatus = {
	id: ID;
	name: CharakterStatusName;
};

export type ChamarillaAemter = {
	id: ID;
	name: CamarillaOffizier;
};

export type Sekten = {
	id: ID;
	name: SektenName;
};

export type Spielort = {
	id: ID;
	spielort_name: string;
	spielort_strasse: string;
	spielort_plz: string;
	spielort_ort: string;
	spielort_karte: string;
};

export type CamarillaSpielortFiles = {
	id: ID;
	camarilla_spielort_id: ID;
	directus_files_id: string;
};

export type CamarillaZeittafelProtektorat = {
	id: ID;
	titel?: string;
	datum: string;
	text: string;
	link?: string;
};

export type CamarillaBrujahKonflikt = {
	id: ID;
	sort: number;
	titel?: string;
	datum: string;
	text: string;
};

export type Orga = {
	id: ID;
	name: string;
	rolle: OrgaRollen;
	email?: string;
	bild?: string;
};

export type OrgaRollen = {
	id: ID;
	name: string;
};

type SabbatUebersicht = {
	id: ID;
	beschreibung: string;
	spieltermine: string;
	email: string;
	discord: string;
};

type SabbatUebersichtFiles = {
	id: ID;
	sabbat_uebersicht_id: ID;
	directus_files_id: string;
};

export type SabbatCharakterStatus = {
	id: ID;
	name: SabbatCharakterStatusName;
};

export type SabbatAemter = {
	id: ID;
	name: SabbatOffizier;
};

export type SabbatPacks = {
	id: ID;
	name: string;
};

export type SabbatCharaktere = {
	id: ID;
	name: string;
	clan: Clans;
	charakter_status?: CharakterStatus;
	offizier?: SabbatAemter;
	pack: SabbatPacks;
	beschreibung: string;
	bild: string;
};

export type SabbatSpielortFiles = {
	id: ID;
	sabbat_spielort_id: ID;
	directus_files_id: string;
};

type MyCollections = {
	impressum: Impressum;
	was_ist_vampire_live: WasIstVampireLive;
	clans: Clans;
	clans_files: ClansFiles;
	was_sind_clans: WasSindClans;
	camarilla_uebersicht: CamarillaUebersicht;
	camarilla_uebersicht_files: CamarillaUebersichtFiles;
	camarilla_charaktere: CamarillaCharaktere;
	charakter_status: CharakterStatus;
	camarilla_aemter: ChamarillaAemter;
	camarilla_spielort: Spielort;
	camarilla_spielort_files: CamarillaSpielortFiles;
	camarilla_zeittafel_protektorat: CamarillaZeittafelProtektorat;
	camarilla_brujah_konflikt: CamarillaBrujahKonflikt;
	camarilla_orga: Orga;
	orga_rollen: OrgaRollen;
	sekten: Sekten;
	sabbat_uebersicht: SabbatUebersicht;
	sabbat_uebersicht_files: SabbatUebersichtFiles;
	sabbat_charakter_status: SabbatCharakterStatus;
	sabbat_aemter: SabbatAemter;
	sabbat_packs: SabbatPacks;
	sabbat_charaktere: SabbatCharaktere;
	sabbat_spielort: Spielort;
	sabbat_spielort_files: SabbatSpielortFiles;
};

export const directus = new Directus<MyCollections>(import.meta.env.VITE_DIRECTUS_URL);

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
