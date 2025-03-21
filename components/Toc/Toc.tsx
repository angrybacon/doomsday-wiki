'use client';

import {
  Box,
  Drawer,
  drawerClasses,
  useMediaQuery,
  useScrollTrigger,
  type BoxProps,
  type DrawerProps,
  type SxProps,
} from '@mui/material';
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PropsWithChildren,
} from 'react';

import { Entries } from '@/components/Toc/Entries';
import { findHeadings } from '@/components/Toc/findHeadings';
import { useLayout } from '@/hooks/useLayout';
import { type Toc as TocModel } from '@/tools/markdown/types';

const WIDTH: BoxProps['width'] = { xs: 0, sm: 200, lg: 260 };

const TocDesktop = ({ children, sx }: PropsWithChildren<{ sx?: SxProps }>) => (
  <Box
    aria-label="Table of contents"
    component="nav"
    sx={[
      {
        alignSelf: 'start',
        pl: 3,
        position: 'sticky',
      },
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
    {children}
  </Box>
);

const TocMobile = ({ sx, ...rest }: DrawerProps) => (
  <Drawer
    anchor="right"
    slotProps={{ root: { keepMounted: true } }}
    variant="temporary"
    sx={[
      { [`.${drawerClasses.paper}`]: { maxWidth: '80vw', width: 300 } },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
    {...rest}
  />
);

type Props = {
  items: TocModel[];
  sx: SxProps;
};

export const Toc = ({ items, sx }: Props) => {
  const { hasTable, toggleTable } = useLayout();
  const sm = useMediaQuery(({ breakpoints }) => breakpoints.up('sm'));
  const headings = useRef<ReturnType<typeof findHeadings>>([]);
  const throttler = useRef(0);
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
    return () => cancelAnimationFrame(throttler.current);
  }, [items]);

  return (
    // NOTE Reset margin from the layout,
    <Box sx={[{ mt: 0, width: WIDTH }, ...(Array.isArray(sx) ? sx : [sx])]}>
      {sm ? (
        <TocDesktop>
          <Entries
            current={current}
            entries={items}
            root
            sx={{
              justifyItems: 'start',
              maxHeight: '100%',
              pr: 1,
              py: 3,
              scrollbarWidth: 'thin',
            }}
            withBackToTop={trigger}
          />
        </TocDesktop>
      ) : (
        <TocMobile onClose={toggleTable(false)} open={hasTable}>
          <Entries
            current={current}
            entries={items}
            // NOTE Until a reliable hash change event can be used, we pass down
            //      the toggler.
            onJump={toggleTable(false)}
            root
            sx={{ justifyItems: 'initial', p: 3 }}
          />
        </TocMobile>
      )}
    </Box>
  );
};
