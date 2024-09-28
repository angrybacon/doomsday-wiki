import { Box, type SxProps } from '@mui/material';
import { type FunctionComponent } from 'react';

import { useScroll } from '@/hooks/useScroll';

type Props = {
  sx?: SxProps;
};

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
