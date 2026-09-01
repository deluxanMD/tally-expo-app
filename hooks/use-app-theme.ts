import { useMemo } from 'react';

import { Categories } from '@/constants/theme/categories';
import { Colors } from '@/constants/theme/colors';
import { Duration, Easings, Shadow } from '@/constants/theme/motion';
import { Radii, Spacing } from '@/constants/theme/spacing';
import { Typography } from '@/constants/theme/typography';
import { useColorScheme } from '@/hooks/use-color-scheme';

/**
 * Single entry point for the full token set: colors resolved for the
 * active color scheme, plus typography, spacing, radii, motion, and
 * category identities. Prefer this over reaching into `constants/theme`
 * directly when a component needs more than one token.
 */
export function useAppTheme() {
  const scheme = useColorScheme() ?? 'light';

  return useMemo(
    () => ({
      scheme,
      colors: Colors[scheme],
      categories: Categories,
      typography: Typography,
      spacing: Spacing,
      radii: Radii,
      duration: Duration,
      easing: Easings,
      shadow: Shadow,
    }),
    [scheme]
  );
}
