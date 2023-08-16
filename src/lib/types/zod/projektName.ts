import { z } from 'zod';

export const projektName = z.enum(['Camarilla', 'Sabbat', 'Wh40k', 'Verein']);

export type ProjektName = z.infer<typeof projektName>;
