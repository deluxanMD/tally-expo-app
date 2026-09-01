import MonthlySpent from '@/components/common/monthly-spent/monthly-spent';
import { ThemedView } from '@/components/themed-view';
import { useAppTheme } from '@/hooks/use-app-theme';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Onboarding() {
  const { spacing } = useAppTheme();

  return (
    <SafeAreaView>
      <ThemedView style={{ margin: spacing.listRowPadding * 2 }}>
        <MonthlySpent
          title="Spent in September"
          amount={2148.98}
          percentage={14}
          categories={[50, 30, 20, 10, 50, 25, 10]}
        />
      </ThemedView>
    </SafeAreaView>
  );
}
