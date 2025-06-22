import { z } from 'zod';

export const projektName = z.enum(['Camarilla', 'Sabbat', 'Verein']);

export type ProjektName = z.infer<typeof projektName>;
