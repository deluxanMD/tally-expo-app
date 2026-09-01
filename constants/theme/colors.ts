/**
 * Semantic color tokens for light and dark mode.
 * Source of truth: Tally brand identity sheet.
 */
export const Colors = {
  light: {
    bg: '#F5F7FB',
    surface: '#FFFFFF',
    surface2: '#EEF2F8',
    line: '#E5E9F0',
    ink: '#0D1117',
    ink2: '#5A6472',
    ink3: '#98A2B3',
    accent: '#4F46E5',
    accentSoft: '#EEF0FE',
    positive: '#0FA97D',
    positiveSoft: '#D2F0E1',
    rose: '#E5484D',
    roseSoft: '#F8D7D9',
    warn: '#E8833A',
    sky: '#0EA5E9',
    violet: '#8B5CF6',
    amber: '#F0B429',
  },
  dark: {
    bg: '#0B0E14',
    surface: '#151A23',
    surface2: '#1D2430',
    line: '#242C39',
    ink: '#F2F5FA',
    ink2: '#9AA5B5',
    ink3: '#6C7789',
    accent: '#6D7BFF',
    accentSoft: '#1B2038',
    positive: '#2ED3A7',
    positiveSoft: '#10241F',
    rose: '#FF6169',
    roseSoft: '#2B161A',
    warn: '#F59B54',
    sky: '#38BDF8',
    violet: '#A78BFA',
    amber: '#FBBF24',
  },
} as const;

export type ColorScheme = keyof typeof Colors;
export type ColorToken = keyof typeof Colors.light;
