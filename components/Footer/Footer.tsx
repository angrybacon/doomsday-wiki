import {
  Box,
  ThemeProvider as MuiThemeProvider,
  type SxProps,
} from '@mui/material';
import { type FunctionComponent, type ReactNode } from 'react';

import { Link } from '@/components/Link/Link';
import { darkTheme } from '@/theme/theme';

type Props = {
  isClear: boolean;
  sx?: SxProps;
};

export const Footer: FunctionComponent<Props> = ({ isClear, sx }) => {
  const footer: ReactNode = (
    <Box
      component="footer"
      sx={[
        { color: 'text.secondary', textAlign: 'center', typography: 'caption' },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <p>
        &copy; 2017-2024 Doomsday Wiki contributors. Read the notice about{' '}
        <Link href="/license">licenses and resources</Link>.
      </p>
      <p>
        This page collects anonymous analytics in order to improve its contents.
        By browsing the Wiki, you consent to the collection and use of that
        data.
      </p>
    </Box>
  );
  return isClear ? (
    <MuiThemeProvider theme={darkTheme}>{footer}</MuiThemeProvider>
  ) : (
    footer
  );
};
