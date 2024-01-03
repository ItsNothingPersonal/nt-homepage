import type { Writable } from 'svelte/store';

export type FilterFunction = (
	store: Writable<string | boolean | undefined | null>,
	filter: string
) => void;
