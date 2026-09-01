/** 4px base grid. Layout uses flex/grid gaps, never margins between siblings. */
export const Spacing = {
  base: 4,
  /** Gaps inside a card or row (source range 8-14). */
  rowGap: 12,
  /** Card padding (source range 14-22). */
  cardPadding: 18,
  /** Screen gutter, left and right. */
  screenGutter: 22,
  /** List row vertical padding (source range 10-13). */
  listRowPadding: 12,
  /** Bottom spacer clearing the tab bar. */
  tabBarClearance: 120,
} as const;

/** Corner radii. Ranges in the source sheet are collapsed to a single value. */
export const Radii = {
  /** Icon radius (source range 9-12). */
  icon: 10,
  key: 14,
  /** Card radius (source range 16-20). */
  card: 18,
  tabBar: 22,
  sheet: 26,
  pill: 9999,
} as const;
