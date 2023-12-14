import type { FilterFunction } from './filterFunction';
import type { SubMenuConfig } from './subMenuConfig';

export type FilterButtonConfig = {
	label: string;
	onClick?: FilterFunction;
	indicator?: boolean;
	subMenu?: SubMenuConfig[];
};
