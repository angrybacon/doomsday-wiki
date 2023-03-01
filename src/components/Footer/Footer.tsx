import type { FunctionComponent, ReactNode } from 'react';
import { Box, Typography } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
import type { SxProps } from '@mui/system';
import { Link } from '@/components/Link/Link';
import { darkTheme } from '@/theme/theme';

interface Props {
  isClear: boolean;
  sx?: SxProps<Theme>;
}

export const Footer: FunctionComponent<Props> = ({ isClear, sx }) => {
  const footer: ReactNode = (
    <Box
      component="footer"
      sx={[
        { color: 'text.secondary', display: 'flex', justifyContent: 'center' },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Typography variant="caption">
        Copyright &copy; 2017-2023 doomsday.wiki contributors. Read the notice
        about <Link href="/license">licenses and resources</Link>.
      </Typography>
    </Box>
  );
  return isClear ? (
    <MuiThemeProvider theme={darkTheme}>{footer}</MuiThemeProvider>
  ) : (
    footer
  );
};
