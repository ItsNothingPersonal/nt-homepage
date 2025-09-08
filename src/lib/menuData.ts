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
			{ href: '/camarilla/galerie', label: 'Galerie' },
			{ href: '/camarilla/zeittafel-protektorat', label: 'Zeittafel' },
			{ href: '/camarilla/charakter-galerie', label: 'Charakter-Galerie' },
			{ href: '/camarilla/charakter-friedhof', label: 'Charakter-Friedhof' },
			{ href: '/camarilla/downloads', label: 'Downloads' }
		]
	},
	{
		id: 2,
		label: 'Anarchen',
		subData: [
			{ href: '/anarchen/uebersicht', label: 'Übersicht' },
			{ href: '/anarchen/spielort', label: 'Spielort' },
			{ href: '/anarchen/orga', label: 'Orga-Team' },
			{ href: '/anarchen/galerie', label: 'Galerie' },
			{ href: '/anarchen/charakter-galerie', label: 'Charakter-Galerie' },
			{ href: '/anarchen/downloads', label: 'Downloads' }
		]
	},
	{
		id: 3,
		label: 'Sabbat',
		subData: [
			{ href: '/sabbat/uebersicht', label: 'Übersicht' },
			{ href: '/sabbat/spielort', label: 'Spielort' },
			{ href: '/sabbat/orga', label: 'Orga-Team' },
			{ href: '/sabbat/setting-steckbrief', label: 'Setting-Steckbrief' },
			{ href: '/sabbat/galerie', label: 'Galerie' },
			{ href: '/sabbat/zeittafel-sabbat', label: 'Zeittafel' },
			{ href: '/sabbat/charakter-galerie', label: 'Charakter-Galerie' },
			{ href: '/sabbat/charakter-friedhof', label: 'Charakter-Friedhof' },
			{ href: '/sabbat/downloads', label: 'Downloads' },
			{ href: '/sabbat/charaktererstellung', label: 'Charaktererstellung' }
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
		label: 'Logins',
		subData: [
			{
				href: 'https://elysium.naechtlichestheater.de',
				label: 'Elysium'
			},
			{
				href: 'http://user.naechtlichestheater.de',
				label: 'Sabbat-Charakter'
			},
			{
				href: 'https://www.beta-cc.de/osticket/tickets.php',
				label: 'Ticketsystem'
			}
		]
	},
	{
		id: 8,
		href: '/impressum',
		label: 'Impressum'
	}
];
