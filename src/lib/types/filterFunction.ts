import type { Writable } from 'svelte/store';
import type { SabbatPacks } from './zod/sabbatPacks';

export type FilterFunction = (
	store: Writable<string | boolean | SabbatPacks | undefined>,
	filter: string
) => void;
