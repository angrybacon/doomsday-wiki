import type { Toc as TocModel } from '@korumite/kiwi';
import type { SxProps, TypographyProps } from '@mui/material';
import type { ComponentRef } from 'react';

import { Box, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';

import { Link } from '~/components/Link/Link';

type EntriesProps = {
  current: string | undefined;
  entries: TocModel[];
  onJump: () => void;
  root?: boolean;
  sx?: SxProps;
};

export const Entries = ({
  current,
  entries,
  onJump,
  root = false,
  sx,
}: EntriesProps) => (
  <Box
    component="ol"
    sx={[
      {
        display: 'grid',
        listStyleType: 'none',
        pl: 2,
      },
      root && { pl: 0 },
      // oxlint-disable-next-line typescript/no-unsafe-assignment
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
  >
    {entries.map((entry) => (
      <Entry
        component="li"
        current={current}
        key={entry.url}
        onJump={onJump}
        {...entry}
      />
    ))}
  </Box>
);

type EntryProps = TocModel & {
  component?: TypographyProps['component'];
  current?: string | undefined;
  onJump: () => void;
};

export const Entry = ({
  component = 'div',
  current,
  items,
  onJump,
  title,
  url,
}: EntryProps) => {
  const root = useRef<ComponentRef<'li'>>(null);
  const active = current !== undefined && url === `#${current}`;

  useEffect(() => {
    if (active) root.current?.scrollIntoView({ block: 'nearest' });
  }, [active]);

  if (!title || !url) return null;

  return (
    <Typography
      component={component}
      ref={root}
      sx={{ display: 'grid', justifyItems: 'start' }}
      variant="caption"
    >
      <Link
        href={url}
        onClick={onJump}
        sx={[
          {
            borderRadius: 2,
            color: 'inherit',
            textDecoration: 'none',
            '&:hover': { bgcolor: 'action.hover' },
          },
          active && { color: 'secondary.main' },
        ]}
      >
        {title}
      </Link>
      {items && (
        <Entries
          current={current}
          entries={items}
          onJump={onJump}
          sx={{ color: 'text.secondary' }}
        />
      )}
    </Typography>
  );
};
