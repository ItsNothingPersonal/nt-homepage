export const menuData: {
	id: number;
	label: string;
	href?: string;
	subData?: { href: string; label: string }[];
}[] = [
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
			{ href: '/camarilla/zeittafel-protektorat', label: 'Zeittafel d. Protektorats' },
			{ href: '/camarilla/charakter-galerie', label: 'Charaktergalerie' }
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
			{ href: '/sabbat/zeittafel-sabbat', label: 'Zeittafel d. Diozöse' },
			{ href: '/sabbat/charakter-galerie', label: 'Charaktergalerie' }
		]
	},
	{
		id: 3,
		label: 'Wh40k',
		subData: [
			{ href: '/wh40k/uebersicht', label: 'Übersicht' },
			{ href: '/wh40k/spielort', label: 'Spielort' }
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
		href: '/impressum',
		label: 'Impressum'
	}
];
