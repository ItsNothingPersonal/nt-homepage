import { z } from 'zod';

export const projektName = z.enum(['Camarilla', 'Sabbat', 'W40K', 'Verein']);

export type ProjektName = z.infer<typeof projektName>;
