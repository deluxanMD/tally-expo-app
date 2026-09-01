import { ColorToken, Spacing, Typography } from '@/constants/theme';
import { StyleSheet } from 'react-native';

export const createStyles = (
  percentage: number,
  spacing: typeof Spacing,
  typography: typeof Typography,
  colors: Record<ColorToken, string>
) =>
  StyleSheet.create({
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#ffffff',
    },
    title: {
      textTransform: 'uppercase',
      opacity: 0.4,
    },
    amount: {
      paddingTop: spacing.listRowPadding * 3,
      fontSize: typography.heroFigure.fontSize * 0.75,
    },
    chart: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      gap: spacing.base * 2,
      marginTop: spacing.listRowPadding,
      backgroundColor: colors.surface,
    },
    bar: {
      flex: 1,
      borderRadius: spacing.base * 1.5,
    },
  });
