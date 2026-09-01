import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useAppTheme } from '@/hooks/use-app-theme';
import { formattedAmount } from '@/utils/currency';
import React from 'react';

import Card from '../card/card';
import Percentage from '../percentage/percentage';
import { createStyles } from './monthly-spent.styles';
import { MonthlySpentProps } from './monthly-spent.types';

export default function MonthlySpent({ title, amount, percentage, categories }: MonthlySpentProps) {
  const { typography, spacing, colors } = useAppTheme();
  const styles = createStyles(percentage, spacing, typography, colors);

  return (
    <Card>
      <ThemedView style={styles.titleContainer}>
        <ThemedText style={[typography.eyebrow, styles.title]}>{title}</ThemedText>
        <Percentage percentage={percentage} />
      </ThemedView>

      <ThemedText style={[typography.heroFigure, styles.amount]}>
        {formattedAmount(amount)}
      </ThemedText>

      {/* Bar Chart */}
      <ThemedView style={styles.chart}>
        {categories.map((category, index) => (
          <ThemedView
            key={index}
            style={[
              ,
              ,
              styles.bar,
              {
                height: category,
                backgroundColor: index === 4 ? colors.accent : colors.surface2,
              },
            ]}
          />
        ))}
      </ThemedView>
    </Card>
  );
}
