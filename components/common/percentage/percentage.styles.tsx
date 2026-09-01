import { StyleSheet } from 'react-native';

import { ColorToken, Spacing } from '@/constants/theme';

export const createStyles = (
  colors: Record<ColorToken, string>,
  spacing: typeof Spacing,
  arrowColor: string,
  isPositive: boolean
) =>
  StyleSheet.create({
    percentage: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.base * 0.5,
      paddingHorizontal: spacing.base,
      borderRadius: spacing.base * 2,
      backgroundColor: isPositive ? colors.positiveSoft : colors.roseSoft,
    },
    text: {
      color: arrowColor,
    },
  });
