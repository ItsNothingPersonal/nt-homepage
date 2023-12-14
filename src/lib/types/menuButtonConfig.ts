import type { SubMenuConfig } from './subMenuConfig';

export type MenuButtonConfig = {
	id: number;
	label: string;
	href?: string;
	subData?: SubMenuConfig[];
};
