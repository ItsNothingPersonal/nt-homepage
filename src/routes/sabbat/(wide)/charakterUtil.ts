import { SabbatCharakterStatusName } from '$lib/types/sabbatCharakterStatusName';
import { SabbatAemterName } from '$lib/types/sabbatOffizier';
import type { SubMenuConfig } from '$lib/types/subMenuConfig';
import type { PackInformation } from '$lib/types/zod/packInformation';
import { sabbatCharakter, type SabbatCharakter } from '$lib/types/zod/sabbatCharakter';
import type { SabbatPack } from '$lib/types/zod/sabbatPacks';
import { isNullOrUndefined } from '$lib/util';
import { get, type Writable } from 'svelte/store';

export function getPackSubMenu(
	packFilter: Writable<string>,
	selektiertesPack: Writable<SabbatPack | undefined>,
	einzelgaengerFilter: Writable<boolean>,
	packs: SabbatPack[],
	charaktere: SabbatCharakter[]
): SubMenuConfig[] {
	return packs
		.filter((p) => charaktere.map((c) => c.pack?.name).find((c) => c === p.name))
		.map((e) => {
			return {
				label: e.name,
				onClick: () =>
					swapPackFilter(packFilter, selektiertesPack, einzelgaengerFilter, packs, e.name)
			};
		});
}

export function swapPackFilter(
	packFilter: Writable<string>,
	selektiertesPack: Writable<SabbatPack | undefined>,
	einzelgaengerFilter: Writable<boolean>,
	packs: SabbatPack[],
	filter: string
) {
	if (get(packFilter).match(filter)) {
		packFilter.set('.*');
		selektiertesPack.set(undefined);
	} else {
		einzelgaengerFilter.set(false);
		packFilter.set(filter);
		selektiertesPack.set(packs.find((p) => p.name === get(packFilter)));
	}
}

export function swapOffizierFilter(offizierFilter: Writable<string>, filter: string) {
	if (get(offizierFilter).match(filter)) {
		offizierFilter.set('');
	} else {
		offizierFilter.set(filter);
	}
}

export function swapFilterEinzelgaenger(
	packFilter: Writable<string>,
	selektiertesPack: Writable<SabbatPack | undefined>,
	einzelgaengerFilter: Writable<boolean>
) {
	if (get(einzelgaengerFilter) === true) {
		einzelgaengerFilter.set(false);
		selektiertesPack.set(undefined);
	} else {
		packFilter.set('.*');
		einzelgaengerFilter.set(true);
		selektiertesPack.set(undefined);
	}
}

export function getLeader(
	charaktere: SabbatCharakter[],
	jahrFilter: string = '.*'
): SabbatCharakter[] {
	return sabbatCharakter
		.array()
		.parse(charaktere)
		.filter((e) => e.offizier?.name === SabbatAemterName.Erzbischof)
		.filter(
			(e) =>
				isNullOrUndefined(e.abgelegt_am) || e.abgelegt_am.getFullYear().toString().match(jahrFilter)
		);
}

export function getOfficers(
	charaktere: SabbatCharakter[],
	jahrFilter: string = '.*'
): SabbatCharakter[] {
	return sabbatCharakter
		.array()
		.parse(charaktere)
		.filter(
			(e) => !isNullOrUndefined(e.offizier) && e.offizier.name !== SabbatAemterName.Erzbischof
		)
		.filter(
			(e) =>
				isNullOrUndefined(e.abgelegt_am) || e.abgelegt_am.getFullYear().toString().match(jahrFilter)
		);
}

export function getPackLeaders(
	charaktere: SabbatCharakter[],
	name: string | undefined,
	jahrFilter: string = '.*'
): SabbatCharakter[] {
	return getPackByName(charaktere, name)
		.filter(
			(e) =>
				e.charakter_status?.name === SabbatCharakterStatusName.Ductus ||
				e.charakter_status?.name === SabbatCharakterStatusName.Priester
		)
		.filter(
			(e) =>
				isNullOrUndefined(e.abgelegt_am) || e.abgelegt_am.getFullYear().toString().match(jahrFilter)
		);
}

export function getPackByName(
	charaktere: SabbatCharakter[],
	name: string | undefined
): SabbatCharakter[] {
	return sabbatCharakter
		.array()
		.parse(charaktere)
		.filter((e) => e.pack?.name === name);
}

export function getPackInformation(
	charaktere: SabbatCharakter[],
	selektiertesPack: SabbatPack | undefined,
	jahrFilter: string = '.*'
): PackInformation | undefined {
	if (selektiertesPack) {
		return {
			pack: selektiertesPack,
			leaders: getPackLeaders(charaktere, selektiertesPack?.name, jahrFilter)
		};
	}
	return undefined;
}

export function getGefilterteCharaktere(
	charaktere: SabbatCharakter[],
	einzelgaengerFilter: boolean,
	packFilter: string,
	offizierFilter: string,
	jahrFilter: string = '.*'
): SabbatCharakter[] {
	return sabbatCharakter
		.array()
		.parse(charaktere)
		.filter((c) =>
			!(packFilter === '.*' && einzelgaengerFilter === false && offizierFilter === '')
				? ((einzelgaengerFilter === true && (c.pack === null || c.pack === undefined)) ||
						(packFilter === '.*' && einzelgaengerFilter === false) ||
						(einzelgaengerFilter === false &&
							c.pack?.name.match(packFilter) &&
							(c.charakter_status?.name === SabbatCharakterStatusName.TrueSabbat ||
								c.charakter_status?.name === SabbatCharakterStatusName.FalseSabbat))) &&
					(offizierFilter.length > 0 ? !isNullOrUndefined(c.offizier) : true)
				: isNullOrUndefined(c.offizier)
		)
		.filter(
			(e) =>
				isNullOrUndefined(e.abgelegt_am) || e.abgelegt_am.getFullYear().toString().match(jahrFilter)
		);
}
