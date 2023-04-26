import type { CamarillaOffizier } from '$lib/types/camarillaOffizier';
import type { CharakterStatusName } from '$lib/types/charakterStatusName';
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
	name: string;
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
	charakter_status: CharakterStatus;
	offizier?: ChamarillaAemter;
	zusatzfunktion?: ChamarillaAemter;
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
};

export const directus = new Directus<MyCollections>(import.meta.env.VITE_DIRECTUS_URL);
