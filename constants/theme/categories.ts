import type { ColorToken } from '@/constants/theme/colors';

/**
 * Fixed category identities. A category keeps its color token in every
 * chart, chip, monogram, and progress bar.
 */
export const Categories = {
  foodAndDrink: { label: 'Food & Drink', monogram: 'FD', color: 'rose' },
  groceries: { label: 'Groceries', monogram: 'GR', color: 'positive' },
  transport: { label: 'Transport', monogram: 'TR', color: 'sky' },
  home: { label: 'Home', monogram: 'HM', color: 'accent' },
  fun: { label: 'Fun', monogram: 'FN', color: 'violet' },
  health: { label: 'Health', monogram: 'HL', color: 'amber' },
} as const satisfies Record<string, { label: string; monogram: string; color: ColorToken }>;

export type CategoryKey = keyof typeof Categories;
