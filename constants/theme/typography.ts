import type { TextStyle } from 'react-native';

import { FontFamily } from '@/constants/theme/fonts';

/**
 * Named type scale from the brand sheet. Ranges in the source sheet
 * (e.g. card heading 13.5-15.5, body 13-14.5) are collapsed to a single
 * value here rather than exposed as separate density variants.
 */
export const Typography = {
  heroFigure: {
    fontFamily: FontFamily.extraBold,
    fontSize: 54,
    letterSpacing: -2.43,
  },
  screenTitle: {
    fontFamily: FontFamily.extraBold,
    fontSize: 26,
    letterSpacing: -0.91,
  },
  cardHeading: {
    fontFamily: FontFamily.bold,
    fontSize: 14.5,
  },
  listItem: {
    fontFamily: FontFamily.semiBold,
    fontSize: 14,
  },
  amount: {
    fontFamily: FontFamily.bold,
    fontSize: 14.5,
    letterSpacing: -0.29,
  },
  body: {
    fontFamily: FontFamily.medium,
    fontSize: 13.75,
    lineHeight: 21,
  },
  meta: {
    fontFamily: FontFamily.medium,
    fontSize: 12.25,
  },
  eyebrow: {
    fontFamily: FontFamily.semiBold,
    fontSize: 10.5,
    letterSpacing: 1.37,
  },
  tabLabel: {
    fontFamily: FontFamily.semiBold,
    fontSize: 9,
  },
} as const satisfies Record<string, TextStyle>;

export type TypographyVariant = keyof typeof Typography;
