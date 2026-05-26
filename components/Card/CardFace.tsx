import { type ScrySingleResponse } from '@korumite/scrydrop';
import { Box, Fade, Tooltip, type SxProps } from '@mui/material';

type Props = {
  active: boolean;
  face: ScrySingleResponse[number];
  sx?: SxProps;
};

export const CardFace = ({ active, face, sx }: Props) =>
  face.image_uris ? (
    <Tooltip title={face.alternate.join('\n')}>
      <Fade in={active}>
        <Box
          alt={face.alternate.join('. ')}
          component="img"
          decoding="async"
          loading="lazy"
          src={face.image_uris.normal}
          sx={[
            {
              bgcolor: 'action.disabled',
              borderRadius: '5.2% / 3.7%',
              display: 'block',
              height: 1,
              opacity: 0,
              pointerEvents: 'none',
              width: 1,
            },
            active && { pointerEvents: 'initial' },
            // oxlint-disable-next-line no-unsafe-assignment
            ...(Array.isArray(sx) ? sx : [sx]),
          ]}
        />
      </Fade>
    </Tooltip>
  ) : null;
