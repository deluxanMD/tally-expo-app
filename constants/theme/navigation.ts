import { DarkTheme, DefaultTheme, type Theme } from '@react-navigation/native';

import { Colors } from '@/constants/theme/colors';
import { FontFamily } from '@/constants/theme/fonts';

const fonts: Theme['fonts'] = {
  regular: { fontFamily: FontFamily.regular, fontWeight: '400' },
  medium: { fontFamily: FontFamily.medium, fontWeight: '500' },
  bold: { fontFamily: FontFamily.bold, fontWeight: '700' },
  heavy: { fontFamily: FontFamily.extraBold, fontWeight: '800' },
};

export const NavigationThemes: Record<'light' | 'dark', Theme> = {
  light: {
    ...DefaultTheme,
    dark: false,
    colors: {
      ...DefaultTheme.colors,
      background: Colors.light.bg,
      card: Colors.light.surface,
      text: Colors.light.ink,
      border: Colors.light.line,
      primary: Colors.light.accent,
      notification: Colors.light.rose,
    },
    fonts,
  },
  dark: {
    ...DarkTheme,
    dark: true,
    colors: {
      ...DarkTheme.colors,
      background: Colors.dark.bg,
      card: Colors.dark.surface,
      text: Colors.dark.ink,
      border: Colors.dark.line,
      primary: Colors.dark.accent,
      notification: Colors.dark.rose,
    },
    fonts,
  },
};
