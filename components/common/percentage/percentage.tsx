import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useAppTheme } from '@/hooks/use-app-theme';
import { useThemeColor } from '@/hooks/use-theme-color';
import React from 'react';

import { createStyles } from './percentage.styles';
import { PercentageProps } from './percentage.types';

export default function Percentage({ percentage }: PercentageProps) {
  const { typography, colors, spacing } = useAppTheme();
  const isPositive = percentage > 0;
  const arrowColor = useThemeColor({}, isPositive ? 'positive' : 'rose');

  const styles = createStyles(colors, spacing, arrowColor, isPositive);

  return (
    <ThemedView style={styles.percentage}>
      <IconSymbol name={isPositive ? 'arrow.up' : 'arrow.down'} size={10} color={arrowColor} />
      <ThemedText style={[typography.eyebrow, styles.text]}>{percentage}%</ThemedText>
    </ThemedView>
  );
}
