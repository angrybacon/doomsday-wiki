'use client';

import type { SxProps, TypographyProps } from '@mui/material';
import type { Toc as TocModel } from '@/tools/markdown/types';

import { Box, Typography } from '@mui/material';

import { Divider } from '@/components/Divider/Divider';
import { Link } from '@/components/Link/Link';

const Entry = ({
  current,
  items,
  onJump,
  title,
  url,
  variant,
}: TocModel & {
  current?: string;
  onJump?: () => void;
  variant: TypographyProps['variant'];
}) =>
  title && url ? (
    <Typography
      component="li"
      sx={{ display: 'grid', gap: 1, justifyItems: 'inherit' }}
      variant={variant}
    >
      <Link
        color="primary"
        href={url}
        onClick={onJump}
        sx={[
          {
            borderRadius: 1,
            display: 'block',
            overflow: 'hidden',
            position: 'relative',
            px: [1, 0.5],
            py: [0.5, 0],
            '&:hover:after': {
              bgcolor: 'action.hover',
              content: '""',
              inset: 0,
              position: 'absolute',
            },
          },
          current === url && {
            color: 'primary.contrastText',
            '[data-dark] &': { bgcolor: 'primary.dark' },
            '[data-light] &': { bgcolor: 'primary.light' },
          },
        ]}
        underline="none"
      >
        {title}
      </Link>
      {items && (
        <Entries
          current={current}
          entries={items}
          onJump={onJump}
          variant="caption"
        />
      )}
    </Typography>
  ) : null;

type Props = {
  current?: string;
  entries: TocModel[];
  onJump?: () => void;
  root?: boolean;
  sx?: SxProps;
  variant?: TypographyProps['variant'];
  withBackToTop?: boolean;
};

export const Entries = ({
  current,
  entries,
  onJump,
  root = false,
  sx,
  variant = 'subtitle2',
  withBackToTop,
}: Props) => (
  <Box
    component="ol"
    sx={[
      {
        display: 'grid',
        gap: 1,
        justifyItems: 'inherit',
        listStyleType: 'none',
        pl: 1,
      },
      root &&
        ((theme) => ({
          gap: 1,
          overflowY: 'auto',
          overscrollBehavior: 'contain',
          pl: 0,
          scrollBehavior: 'smooth',
          scrollPadding: theme.spacing(1),
        })),
      // oxlint-disable-next-line no-unsafe-assignment
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
  >
    {root && (
      <Box
        component="li"
        sx={{
          color: 'text.secondary',
          pl: [1, 0.5],
          textTransform: 'uppercase',
          typography: 'caption',
        }}
      >
        Table of Contents
      </Box>
    )}
    {entries.map((entry) => (
      <Entry
        current={current}
        key={entry.title}
        onJump={onJump}
        variant={variant}
        {...entry}
      />
    ))}
    {withBackToTop && (
      <>
        <Divider component="li" role="presentation" sx={{ my: 1, width: 1 }} />
        <Entry
          title="Back to top"
          // NOTE This is hardcoded in the layout
          url="#root"
          variant="subtitle2"
        />
      </>
    )}
  </Box>
);
