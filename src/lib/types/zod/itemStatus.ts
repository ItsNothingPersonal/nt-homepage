import { z } from 'zod';

export const itemStatus = z.enum(['draft', 'published', 'archived']);

export type ItemStatus = z.infer<typeof itemStatus>;
