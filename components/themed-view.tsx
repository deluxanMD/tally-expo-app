import { View, type ViewProps } from 'react-native';

import type { ColorToken } from '@/constants/theme/colors';
import { useThemeColor } from '@/hooks/use-theme-color';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  /** Background surface token. Defaults to `bg` (the screen background). */
  surface?: ColorToken;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  surface = 'bg',
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, surface);

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
