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
	logo: number;
	beschreibung_synopsis: string;
	beschreibung: string;
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

type MyCollections = {
	impressum: Impressum;
	was_ist_vampire_live: WasIstVampireLive;
	clans: Clans;
	clans_files: ClansFiles;
	was_sind_clans: WasSindClans;
};

export const directus = new Directus<MyCollections>(import.meta.env.VITE_DIRECTUS_URL);
