'use client';

import type { PropsWithChildren } from 'react';
import type { Category } from '~/tools/markdown/schemas';

import { useParams, usePathname } from 'next/navigation';
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { CategorySchema } from '~/tools/markdown/schemas';

export const LayoutContext = createContext({
  category: null as Category | null,
  hasMenu: false,
  /** Whether the current page does have a table */
  hasTable: false,
  /** Whether we should show the table */
  showTable: false,
  toggleMenu: (_?: boolean) => {},
  /**
   * Toggle the table visibility.
   *
   * Support a special case where VALUE can be `null` instead in order to
   * indicate that the current page has no table at all.
   */
  toggleTable: (_?: boolean | null) => () => {},
});

export const LayoutProvider = ({ children }: PropsWithChildren) => {
  const [hasMenu, setHasMenu] = useState(false);
  const [hasTable, setHasTable] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const { chapter = null } = useParams();
  const pathname = usePathname();
  const category = CategorySchema.nullable().parse(chapter);

  const toggleMenu = useCallback(
    (value?: boolean) => setHasMenu((previous) => value ?? !previous),
    [],
  );

  const toggleTable = useCallback(
    (value?: boolean | null) => () => {
      if (value === null) {
        setHasTable(false);
      } else {
        setHasTable(true);
        setShowTable((previous) => value ?? !previous);
      }
    },
    [],
  );

  useEffect(() => {
    // NOTE With the page router, this used to be handled with router events
    //      directly where the drawer would close as soon as the navigation
    //      started. However the current implementation requires the navigation
    //      to complete successfully.
    //      router.events.on('routeChangeStart', onClose);
    toggleMenu(false);
  }, [pathname, toggleMenu]);

  const value = useMemo(
    () => ({
      category,
      hasMenu,
      hasTable,
      showTable,
      toggleMenu,
      toggleTable,
    }),
    [category, hasMenu, hasTable, showTable, toggleMenu, toggleTable],
  );

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
};
