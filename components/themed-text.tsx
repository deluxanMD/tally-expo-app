import { Text, type TextProps } from 'react-native';

import type { ColorToken } from '@/constants/theme/colors';
import { Typography, type TypographyVariant } from '@/constants/theme/typography';
import { useThemeColor } from '@/hooks/use-theme-color';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  /** Type scale entry from the brand sheet. Defaults to `body`. */
  variant?: TypographyVariant;
  /** Semantic color token for the text color. Defaults to `ink`. */
  tone?: ColorToken;
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  variant = 'body',
  tone = 'ink',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, tone);

  return <Text style={[{ color }, Typography[variant], style]} {...rest} />;
}
