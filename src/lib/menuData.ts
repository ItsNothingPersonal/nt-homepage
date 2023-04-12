export const menuData: {
	id: number;
	label: string;
	href?: string;
	subData?: { href: string; label: string }[];
}[] = [
	{
		id: 0,
		href: '/',
		label: 'Startseite'
	},
	{
		id: 1,
		label: 'Über Vampire',
		subData: [
			{ href: '/13-clans', label: '13 Clans' },
			{ href: '/was-ist-vampire-live', label: 'Was ist Vampire Live?' }
		]
	},
	{
		id: 2,
		href: '/verein',
		label: 'Verein',
		subData: [
			{ href: '/verein/ansprechpersonen', label: 'Ansprechpersonen' },
			{ href: '/verein/downloads', label: 'Downloads' },
			{ href: '/verein/datenschutz', label: 'Datenschutz' },
			{ href: '/verein/paragraph-86-und-86a', label: '§86/86a' }
		]
	},
	{
		id: 3,
		label: 'Camarilla',
		subData: [
			{ href: '/camarilla/termine', label: 'Termine' },
			{ href: '/camarilla/spielort', label: 'Spielort' },
			{ href: '/camarilla/orga', label: 'Orga-Team' },
			{ href: '/camarilla/zeittafel-protektorat', label: 'Zeittafel d. Protektorats' },
			{ href: '/camarilla/charakter-galerie', label: 'Charaktergalerie' },
			{ href: '/camarilla/jagdgebiete-und-orte', label: 'Jagdgebiete und relevante Orte' }
		]
	},
	{
		id: 4,
		label: 'Sabbat',
		subData: [
			{ href: '/sabbat/termine', label: 'Termine' },
			{ href: '/sabbat/spielort', label: 'Spielort' },
			{ href: '/sabbat/orga', label: 'Orga-Team' },
			{ href: '/sabbat/charakter-galerie', label: 'Charaktergalerie' },
			{ href: '/sabbat/karte-von-nuernberg', label: 'Karte von Nürnberg' }
		]
	},
	{
		id: 5,
		label: '40K',
		subData: [
			{ href: '/40k/termine', label: 'Termine' },
			{ href: '/40k/spielort', label: 'Spielort' },
			{ href: '/40k/orga', label: 'Orga-Team' },
			{ href: '/40k/spieler-galerie', label: 'Spielergalerie' },
			{ href: '/40k/kampfberichte', label: 'Kampfberichte' }
		]
	},
	{
		id: 6,
		href: '/impressum',
		label: 'Impressum'
	}
];
