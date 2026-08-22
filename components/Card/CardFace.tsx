import type { ScrySingleResponse } from '@korumite/scrydrop';

import { Box, Tooltip, Typography } from '@mui/material';
import { useCallback, useState } from 'react';

type Props = {
  /** Whether this specific face is currently active and visible */
  active: boolean;
  face: ScrySingleResponse[number];
  flipped?: boolean;
};

export const CardFace = ({ active, face, flipped = false }: Props) => {
  const [broken, setBroken] = useState(false);
  const [ready, setReady] = useState(false);

  const onLoad = useCallback(() => setReady(true), []);

  const image = useCallback(
    (element: HTMLImageElement | null) => {
      // NOTE The image's `onLoad` fires before React even finishes loading so
      //      server-rendered components need a jQuery approach to have the fade
      //      animation.
      if (element?.complete) onLoad();
    },
    [onLoad],
  );

  if (!face.image_uris?.normal) return null;

  const onError = () => {
    setBroken(true);
    setReady(true);
  };

  return (
    <Box
      sx={[
        (theme) => ({
          ...theme.mixins.frame(face.set),
          alignItems: 'center',
          backgroundImage: face.lqip?.card
            ? `url(${face.lqip.card})`
            : undefined,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          bgcolor: 'action.disabled',
          display: 'grid',
          // NOTE We use a hardcoded blur in order to fade the LQIP borders
          filter: 'blur(4px)',
          height: 1,
          justifyItems: 'center',
          overflow: 'hidden',
          // NOTE The inactive face is still hit-testable despite being rotated
          //      away. Disable pointer events so it can't steal scroll.
          pointerEvents: active ? 'auto' : 'none',
          transition: theme.transitions.create('filter'),
          width: 1,
          img: {
            display: 'block',
            height: 1,
            position: 'relative',
            width: 1,
          },
        }),
        flipped && {
          // NOTE For some reason `backface-visibility` doesn't work both ways
          //      on Firefox so we force an opaque texture for the back face.
          //      How surprising.
          bgcolor: 'background.paper',
          transform: 'rotateY(180deg)',
        },
        ready && { boxShadow: 4, filter: 'initial' },
      ]}
    >
      {broken ? (
        <Typography
          component="div"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            height: 1,
            minHeight: 0,
            overflowBlock: 'auto',
            p: 1,
            scrollbarWidth: 'thin',
            width: 1,
          }}
          variant="caption"
        >
          <p>{face.name}</p>
          {face.oracle_text?.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </Typography>
      ) : (
        <Tooltip
          title={
            <>
              {face.alternate.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </>
          }
        >
          <Box
            alt={face.alternate.join('. ')}
            component="img"
            decoding="async"
            loading="lazy"
            onError={onError}
            onLoad={onLoad}
            ref={image}
            src={face.image_uris.normal}
          />
        </Tooltip>
      )}
    </Box>
  );
};
