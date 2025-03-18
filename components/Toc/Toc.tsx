'use client';

import {
  Box,
  Typography,
  useScrollTrigger,
  type SxProps,
  type TypographyProps,
} from '@mui/material';
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';

import { Divider } from '@/components/Divider/Divider';
import { Link } from '@/components/Link/Link';
import { findHeadings } from '@/components/Toc/findHeadings';
import { type Toc as TocModel } from '@/tools/markdown/types';

const WIDTH = 240;

const Entry = ({
  current,
  items,
  title,
  url,
  variant,
}: TocModel & { current?: string; variant: TypographyProps['variant'] }) =>
  title && url ? (
    <Typography
      component="li"
      sx={{ display: 'grid', gap: 0.5 }}
      variant={variant}
    >
      <Link
        color="primary"
        href={url}
        sx={[
          {
            borderRadius: 1,
            display: 'block',
            overflow: 'hidden',
            position: 'relative',
            px: 0.5,
            '&:hover:after': {
              bgcolor: 'action.hover',
              content: '""',
              inset: 0,
              position: 'absolute',
            },
          },
          current === url &&
            ((theme) => ({
              bgcolor: 'primary.light',
              color: 'primary.contrastText',
              ...theme.applyStyles('dark', { bgcolor: 'primary.dark' }),
            })),
        ]}
        underline="none"
      >
        {title}
      </Link>
      {items && <Entries current={current} entries={items} variant="caption" />}
    </Typography>
  ) : null;

const Entries = ({
  children,
  current,
  entries,
  root = false,
  sx,
  variant = 'subtitle2',
}: {
  children?: ReactNode;
  current?: string;
  entries: TocModel[];
  root?: boolean;
  sx?: SxProps;
  variant?: TypographyProps['variant'];
}) => (
  <Box
    component="ol"
    sx={[
      { display: 'grid', gap: 0.5, listStyleType: 'none', pl: 1 },
      root && { gap: 1, pl: 0 },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
  >
    {entries.map((entry) => (
      <Entry current={current} key={entry.title} variant={variant} {...entry} />
    ))}
    {children}
  </Box>
);

type Props = {
  items: TocModel[];
  sx: SxProps;
};

export const Toc = ({ items, sx }: Props) => {
  const headings = useRef<ReturnType<typeof findHeadings>>([]);
  const throttler = useRef<number>();
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 900 });
  const [current, setCurrent] = useState<string>();

  const findCurrent = useCallback(() => {
    const heading = headings.current.findLast(({ node }) => {
      if (!node) return false;
      return (
        node.offsetTop <
        document.documentElement.scrollTop +
          document.documentElement.clientHeight / 2
      );
    });
    if (heading) setCurrent(heading.url);
  }, []);

  const animate = useCallback(() => {
    throttler.current = requestAnimationFrame(findCurrent);
  }, [findCurrent]);

  useEffect(() => {
    window.addEventListener('scroll', animate);
    return () => window.removeEventListener('scroll', animate);
  }, [animate]);

  useEffect(() => {
    headings.current = findHeadings(items);
    return () => {
      if (throttler.current) {
        cancelAnimationFrame(throttler.current);
      }
    };
  }, [items]);

  const onScroll = () => document.body.scrollIntoView({ block: 'start' });

  return (
    <Box
      aria-label="Table of contents"
      component="nav"
      sx={[
        {
          alignSelf: 'start',
          display: { xs: 'none', md: 'block' },
          mt: 0, // NOTE Reset margin from the layout
          pl: 3,
          position: 'sticky',
          width: WIDTH,
        },
        ({ spacing, vars }) => ({
          '&:after': {
            background: `linear-gradient(to top, transparent, ${vars.palette.background.default} 90%)`,
            content: '""',
            display: 'block',
            height: spacing(3),
            left: 0,
            position: 'absolute',
            right: 0,
            top: 0,
          },
        }),
        ({ breakpoints }) => ({
          height: 'calc(100vh - 56px)', // NOTE Copied from the `toolbar` mixin
          top: 56,
          [breakpoints.up('xs')]: {
            '@media (orientation: landscape)': {
              height: 'calc(100vh - 48px)',
              top: 48,
            },
          },
          [breakpoints.up('sm')]: {
            height: 'calc(100vh - 64px)',
            top: 64,
          },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Entries
        current={current}
        entries={items}
        root
        sx={{ maxHeight: '100%', py: 3, overflowY: 'auto' }}
      >
        {trigger && (
          <>
            <li role="presentation">
              <Divider />
            </li>
            <Box
              component="li"
              onClick={onScroll}
              sx={{
                borderRadius: 1,
                color: 'primary.main',
                cursor: 'pointer',
                px: 0.5,
                '&:hover': {
                  bgcolor: 'action.hover',
                },
              }}
            >
              <Typography variant="subtitle2">Back to top</Typography>
            </Box>
          </>
        )}
      </Entries>
    </Box>
  );
};
