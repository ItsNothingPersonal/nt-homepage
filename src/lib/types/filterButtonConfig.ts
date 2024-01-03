import type { Writable } from 'svelte/store';
import type { FilterFunction } from './filterFunction';
import type { SubMenuConfig } from './subMenuConfig';

export type FilterButtonConfig = {
	label: string;
	store: Writable<string | boolean | null>;
	onClick?: FilterFunction;
	indicator?: boolean;
	subMenu?: SubMenuConfig[];
};
