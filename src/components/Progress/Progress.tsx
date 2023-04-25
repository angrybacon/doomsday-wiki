import type { FunctionComponent } from 'react';
import { Box } from '@mui/material';
import type { Theme } from '@mui/material/styles';
import type { SxProps } from '@mui/system';
import { useScroll } from '@/hooks/useScroll';

interface Props {
  sx?: SxProps<Theme>;
}

export const Progress: FunctionComponent<Props> = ({ sx }) => {
  const scroll = useScroll();
  return (
    <Box
      sx={[
        ({ palette, transitions }) => ({
          backgroundColor: palette.secondary.main,
          borderBottomRightRadius: 2,
          height: 2,
          transition: transitions.create('width', {
            duration: 75,
            easing: 'linear',
          }),
          width: `${scroll}%`,
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    />
  );
};
