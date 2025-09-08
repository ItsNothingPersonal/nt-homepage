import { z } from 'zod';
import { AnarchenAemterName } from '../anarchenAemterName';

export const anarchenAemter = z.object({
	name: z.nativeEnum(AnarchenAemterName)
});

export type AnarchenAemter = z.infer<typeof anarchenAemter>;
