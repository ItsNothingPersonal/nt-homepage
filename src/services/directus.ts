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

type MyCollections = {
	impressum: Impressum;
};

export const directus = new Directus<MyCollections>(import.meta.env.VITE_DIRECTUS_URL);
