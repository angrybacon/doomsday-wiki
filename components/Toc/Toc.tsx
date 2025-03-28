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
  type ElementRef,
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
      ({ mixins, vars }) => ({
        [`.${drawerClasses.paper}`]: {
          ...mixins.blur('strong'),
          bgcolor: `rgba(${vars.palette.background.paperChannel} / .75)`,
          maxWidth: '80vw',
          width: 300,
        },
      }),
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
  const root = useRef<ElementRef<'div'>>();
  /** Cache for headings found in the page */
  const headings = useRef<ReturnType<typeof findHeadings>>([]);
  /** Cache for links contained in the table */
  const links = useRef<HTMLAnchorElement[]>([]);
  const throttler = useRef(0);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 900 });
  const [current, setCurrent] = useState<string>();

  const findCurrent = useCallback(() => {
    const heading = headings.current.findLast(({ node }) => {
      if (!node) return false;
      const { clientHeight, scrollTop } = document.documentElement;
      return node.offsetTop < scrollTop + clientHeight / 2;
    });
    if (heading) setCurrent(heading.url);
  }, []);

  const animate = useCallback(() => {
    throttler.current = requestAnimationFrame(findCurrent);
  }, [findCurrent]);

  useEffect(() => {
    if (!links.current.length) {
      links.current = Array.from(root.current?.getElementsByTagName('a') || []);
    }
    if (current) {
      const link = links.current.find(({ href }) => href.includes(current));
      link?.scrollIntoView({ block: 'nearest' });
    }
  }, [current]);

  useEffect(() => {
    window.addEventListener('scroll', animate);
    return () => window.removeEventListener('scroll', animate);
  }, [animate]);

  useEffect(() => {
    headings.current = findHeadings(items);
    if (headings.current.length) {
      toggleTable(false)();
      animate();
    }
    return () => {
      toggleTable(null)();
      cancelAnimationFrame(throttler.current);
    };
  }, [animate, items, toggleTable]);

  return (
    // NOTE Reset margin from the layout,
    <Box
      ref={root}
      sx={[{ mt: 0, width: WIDTH }, ...(Array.isArray(sx) ? sx : [sx])]}
    >
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
        <TocMobile onClose={toggleTable(false)} open={!!hasTable}>
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
