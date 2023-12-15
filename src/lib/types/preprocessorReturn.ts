export type PreprocessorReturn = Promise<
	| {
			code: string;
			data?: Record<string, unknown>;
			map?: string;
	  }
	| undefined
>;
