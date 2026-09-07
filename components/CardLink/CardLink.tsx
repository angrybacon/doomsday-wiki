'use client';

import type { ScrySingleResponse } from '@korumite/scrydrop';
import type { ComponentRef } from 'react';

import ThreeSixtyIcon from '@mui/icons-material/ThreeSixtyRounded';
import { IconButton, Tooltip } from '@mui/material';
import { useRef } from 'react';

import { Card } from '~/components/Card/Card';
import { Link } from '~/components/Link/Link';

const SCRYFALL_SEARCH = 'https://scryfall.com/search';

type Props = {
  faces: ScrySingleResponse;
};

export const CardLink = ({ faces }: Props) => {
  const root = useRef<ComponentRef<typeof Card>>(null);
  const [front, back] = faces;

  if (!front) return null;

  const onFlip = () => root.current?.flip();

  return (
    <Tooltip
      disableTouchListener={false}
      followCursor
      slotProps={{
        tooltip: {
          sx: (theme) => ({
            ...theme.mixins.frame(front.set),
            // NOTE Undo the default styles that come with a blurred background
            backdropFilter: 'none',
            background: 'none',
            border: 0,
            filter: 'none',
            p: 0,
            '> *': { maxWidth: '50vw', width: 240 },
          }),
        },
      }}
      title={<Card faces={faces} floating ref={root} />}
    >
      <span>
        <Link href={`${SCRYFALL_SEARCH}?q=!"${front.name}"`}>{front.name}</Link>
        {back && front.layout !== 'split' && (
          <>
            &nbsp;
            <Tooltip title="Flip">
              <IconButton onClick={onFlip} size="small">
                <ThreeSixtyIcon color="primary" fontSize="small" />
              </IconButton>
            </Tooltip>
          </>
        )}
      </span>
    </Tooltip>
  );
};
