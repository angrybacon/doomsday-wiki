'use client';

import { useParams, usePathname } from 'next/navigation';
import {
  createContext,
  useCallback,
  useEffect,
  useState,
  type PropsWithChildren,
} from 'react';
import { z } from 'zod';

import { zCategory } from '@/tools/z/schemas';

export const LayoutContext = createContext({
  category: null as z.infer<typeof zCategory> | null,
  hasMenu: false,
  hasTable: null as boolean | null,
  toggleMenu: (_?: boolean) => () => {},
  toggleTable: (_?: boolean | null) => () => {},
});

export const LayoutProvider = ({ children }: PropsWithChildren) => {
  const [hasMenu, setHasMenu] = useState(false);
  // NOTE The infamous 3-values boolean: `null` means the table is empty
  const [hasTable, setHasTable] = useState<boolean | null>(null);
  const { chapter = null } = useParams();
  const pathname = usePathname();
  const category = zCategory.nullable().parse(chapter);

  const toggleMenu = useCallback(
    (value?: boolean) => () =>
      setHasMenu((previous) => (value === undefined ? !previous : value)),
    [],
  );

  const toggleTable = useCallback(
    (value?: boolean | null) => () =>
      setHasTable((previous) => (value === undefined ? !previous : value)),
    [],
  );

  useEffect(() => {
    // NOTE With the page router, this used to be handled with router events
    //      directly where the drawer would close as soon as the navigation
    //      started. However the current implementation requires the navigation
    //      to complete successfully.
    //      router.events.on('routeChangeStart', onClose);
    toggleMenu(false)();
  }, [pathname]);

  return (
    <LayoutContext.Provider
      value={{
        category,
        hasMenu,
        hasTable,
        toggleMenu,
        toggleTable,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
