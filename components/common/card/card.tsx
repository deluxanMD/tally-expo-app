import { ThemedView } from '@/components/themed-view';
import React from 'react';
import { createStyles } from './card.styles';
import { CardProps } from './card.types';

export default function Card({ children }: CardProps) {
  const styles = createStyles();

  return <ThemedView style={styles.card}>{children}</ThemedView>;
}
