import { FunctionComponent } from 'react';
import { mdiMenu } from '@mdi/js';
import Icon from '@mdi/react';
import {
  AppBar,
  Box,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Progress } from '@/components/Progress/Progress';

const HASH: string | undefined = process.env.NEXT_PUBLIC_HASH;

interface Props {
  isMobile: boolean;
  onSidebarOpen: () => void;
  withProgress?: boolean;
}

export const Header: FunctionComponent<Props> = ({
  isMobile,
  onSidebarOpen,
  withProgress = false,
}) => {
  const trigger = useScrollTrigger();
  const theme = useTheme();
  const offset = isMobile ? 0 : theme.drawer.width;
  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar
          elevation={4}
          position="sticky"
          sx={({ palette }) => ({
            backdropFilter: 'blur(24px)',
            backgroundColor: alpha(palette.background.paper, 0.75),
            pl: offset,
          })}
        >
          <Toolbar>
            {isMobile && (
              <IconButton
                aria-label="Menu"
                onClick={onSidebarOpen}
                sx={{ mr: 1 }}
              >
                <Icon path={mdiMenu} size={1} />
              </IconButton>
            )}
            {HASH && (
              <Typography sx={{ ml: 'auto', typography: 'caption' }}>
                {HASH}
              </Typography>
            )}
          </Toolbar>
        </AppBar>
      </Slide>
      {withProgress && (
        <Box
          sx={{
            left: offset,
            position: 'fixed',
            right: 0,
            top: 0,
            zIndex: ({ zIndex }) => zIndex.appBar,
          }}
        >
          <Progress />
        </Box>
      )}
    </>
  );
};
