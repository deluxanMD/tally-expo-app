import { Easing } from 'react-native-reanimated';

/** Durations in ms, matched to the brand sheet's elevation & motion spec. */
export const Duration = {
  /** Screen changes. */
  fade: 250,
  /** Cards, toasts, parse result. */
  pop: 280,
  /** Bottom sheet. */
  up: 300,
  /** Toggles and selection. */
  state: 180,
} as const;

export const Easings = {
  fade: Easing.ease,
  pop: Easing.ease,
  up: Easing.bezier(0.2, 0.9, 0.3, 1),
  state: Easing.inOut(Easing.ease),
} as const;

/**
 * Everything else separates with a 1px line, not depth — reach for these
 * only where the sheet calls for real elevation (cards, the FAB).
 * Requires React Native's New Architecture (`boxShadow` style prop).
 */
export const Shadow = {
  card: '0px 1px 2px rgba(13, 17, 23, 0.05), 0px 8px 24px rgba(13, 17, 23, 0.06)',
  fabTint: '0px 8px 24px rgba(79, 70, 229, 0.35)',
} as const;
