import { CamarillaAemterName } from '$lib/types/camarillaAemterName';
import { ClanName } from '$lib/types/clanName';
import type { SubMenuConfig } from '$lib/types/subMenuConfig';
import { camarillaCharakter, type CamarillaCharakter } from '$lib/types/zod/camarillaCharaktere';
import { isNullOrUndefined } from '$lib/util';
import { get, type Writable } from 'svelte/store';

export function getClanSubMenu(
	clanFilter: Writable<string | null>,
	charaktere: CamarillaCharakter[]
): SubMenuConfig[] {
	return [...Object.keys(ClanName), 'Lasombra antitribu', 'Caitiff', 'Unbekannt']
		.filter((clan) =>
			clan === 'Unbekannt'
				? charaktere.find(
						(charakter) =>
							charakter.clan?.name === undefined && charakter.blutlinie?.name === undefined
					)
				: charaktere.find(
						(charakter) => charakter.clan?.name === clan || charakter.blutlinie?.name === clan
					)
		)
		.map((e) => {
			return {
				label: e,
				onClick: () => swapClanFilter(clanFilter, e === 'Unbekannt' ? null : e)
			};
		});
}

export function swapSectFilter(sectFilter: Writable<string>, filter: string) {
	if (get(sectFilter).match(filter)) {
		sectFilter.set('.*');
	} else {
		sectFilter.set(filter);
	}
}

export function swapOffizierFilter(offizierFilter: Writable<string>, filter: string) {
	if (get(offizierFilter).match(filter)) {
		offizierFilter.set('');
	} else {
		offizierFilter.set(filter);
	}
}

export function swapClanFilter(clanFilter: Writable<string | null>, filter: string | null) {
	if ((get(clanFilter) === null && filter === null) || (filter && get(clanFilter)?.match(filter))) {
		clanFilter.set('.*');
	} else {
		clanFilter.set(filter);
	}
}

export function getOfficers(
	charaktere: CamarillaCharakter[],
	sectFilter: string,
	jahrFilter: string = '.*'
): CamarillaCharakter[] {
	return camarillaCharakter
		.array()
		.parse(charaktere)
		.filter(
			(e) =>
				!isNullOrUndefined(e.offizier) &&
				e.offizier.name !== CamarillaAemterName.Prinz &&
				e.offizier.name !== CamarillaAemterName.Baron
		)
		.filter((e) => e.sekte.name.match(sectFilter))
		.filter(
			(e) =>
				isNullOrUndefined(e.abgelegt_am) ||
				e.abgelegt_am?.getFullYear().toString().match(jahrFilter)
		);
}

export function getLeader(
	charaktere: CamarillaCharakter[],
	sectFilter: string,
	jahrFilter: string = '.*'
): CamarillaCharakter[] {
	return camarillaCharakter
		.array()
		.parse(charaktere)
		.filter(
			(e) =>
				!isNullOrUndefined(e.offizier) &&
				(e.offizier.name === CamarillaAemterName.Baron ||
					e.offizier.name === CamarillaAemterName.Prinz)
		)
		.filter((e) => e.sekte.name.match(sectFilter))
		.filter(
			(e) =>
				isNullOrUndefined(e.abgelegt_am) ||
				e.abgelegt_am?.getFullYear().toString().match(jahrFilter)
		);
}

export function getGefilterteCharaktere(
	charaktere: CamarillaCharakter[],
	sectFilter: string,
	clanFilter: string | null,
	offizierFilter: string,
	jahrFilter: string = '.*'
): CamarillaCharakter[] {
	return camarillaCharakter
		.array()
		.parse(charaktere)
		.filter(
			(c) =>
				(sectFilter !== '.*' ? c.sekte.name.match(sectFilter) : true) &&
				(clanFilter === '.*'
					? offizierFilter === ''
						? isNullOrUndefined(c.offizier)
						: c.offizier
					: filterClansUndBlutlinien(c.clan?.name, c.blutlinie?.name, clanFilter)) &&
				(offizierFilter === '' ? true : c.offizier)
		)
		.filter(
			(e) =>
				isNullOrUndefined(e.abgelegt_am) ||
				e.abgelegt_am?.getFullYear().toString().match(jahrFilter)
		);
}

function filterClansUndBlutlinien(
	clanName: string | null | undefined,
	blutlinienName: string | null | undefined,
	clanFilter: string | null
): boolean {
	return Boolean(
		(isNullOrUndefined(clanName) && isNullOrUndefined(clanFilter)) ||
			(!isNullOrUndefined(clanFilter) && clanName?.match(/^clanFilter$/)) ||
			(!isNullOrUndefined(clanFilter) && blutlinienName?.match(/^clanFilter$/))
	);
}
