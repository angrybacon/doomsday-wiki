import {
  Box,
  ThemeProvider as MuiThemeProvider,
  Typography,
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
        { color: 'text.secondary', textAlign: 'center' },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Typography component="p" variant="caption">
        Copyright &copy; 2017-2024 Doomsday Wiki contributors. Read the notice
        about <Link href="/license">licenses and resources</Link>.
      </Typography>
      <Typography component="p" variant="caption">
        This page collects anonymous analytics through Vercel. See their
        GDPR-compliant{' '}
        <Link href="https://vercel.com/legal/privacy-policy">
          privacy policy
        </Link>
        .
      </Typography>
    </Box>
  );
  return isClear ? (
    <MuiThemeProvider theme={darkTheme}>{footer}</MuiThemeProvider>
  ) : (
    footer
  );
};
