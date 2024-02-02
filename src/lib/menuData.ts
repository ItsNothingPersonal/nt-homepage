import type { MenuButtonConfig } from './types/menuButtonConfig';

export const menuData: MenuButtonConfig[] = [
	{
		id: 0,
		label: 'Über Vampire',
		subData: [
			{ href: '/13-clans', label: '13 Clans' },
			{ href: '/was-ist-vampire-live', label: 'Was ist Vampire Live?' }
		]
	},
	{
		id: 1,
		label: 'Camarilla',
		subData: [
			{ href: '/camarilla/uebersicht', label: 'Übersicht' },
			{ href: '/camarilla/spielort', label: 'Spielort' },
			{ href: '/camarilla/orga', label: 'Orga-Team' },
			{ href: '/camarilla/zeittafel-protektorat', label: 'Zeittafel' },
			{ href: '/camarilla/charakter-galerie', label: 'Charakter-Galerie' },
			{ href: '/camarilla/charakter-friedhof', label: 'Charakter-Friedhof' },
			{ href: '/camarilla/galerie', label: 'Galerie' }
		]
	},
	{
		id: 2,
		label: 'Sabbat',
		subData: [
			{ href: '/sabbat/uebersicht', label: 'Übersicht' },
			{ href: '/sabbat/spielort', label: 'Spielort' },
			{ href: '/sabbat/orga', label: 'Orga-Team' },
			{ href: '/sabbat/setting-steckbrief', label: 'Setting-Steckbrief' },
			{ href: '/sabbat/zeittafel-sabbat', label: 'Zeittafel' },
			{ href: '/sabbat/charakter-galerie', label: 'Charakter-Galerie' },
			{ href: '/sabbat/charakter-friedhof', label: 'Charakter-Friedhof' },
			{ href: '/sabbat/galerie', label: 'Galerie' }
		]
	},
	{
		id: 3,
		label: 'Wh40k',
		subData: [
			{ href: '/wh40k/uebersicht', label: 'Übersicht' },
			{ href: '/wh40k/spielort', label: 'Spielort' },
			{ href: '/wh40k/galerie', label: 'Galerie' }
		]
	},
	{
		id: 4,
		href: '/verein',
		label: 'Verein',
		subData: [
			{ href: '/verein/ansprechpersonen', label: 'Ansprechpersonen' },
			{ href: '/verein/kontakt', label: 'Kontakt' },
			{ href: '/verein/downloads', label: 'Downloads' },
			{ href: '/verein/datenschutz', label: 'Datenschutz' },
			{ href: '/verein/paragraph-86-und-86a', label: '§86/86a' }
		]
	},
	{
		id: 5,
		href: 'http://user.naechtlichestheater.de',
		label: 'Login'
	},
	{
		id: 6,
		href: '/impressum',
		label: 'Impressum'
	}
];
