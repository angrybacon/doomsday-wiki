'use client';

import { useParams, usePathname } from 'next/navigation';
import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from 'react';
import { z } from 'zod';

import { zCategory } from '@/tools/z/schemas';

export const LayoutContext = createContext({
  category: null as z.infer<typeof zCategory> | null,
  hasMenu: false,
  hasTable: false,
  toggleMenu: (_?: boolean) => () => {},
  toggleTable: (_?: boolean) => () => {},
});

export const LayoutProvider = ({ children }: PropsWithChildren) => {
  const [hasMenu, setHasMenu] = useState(false);
  const [hasTable, setHasTable] = useState(false);
  const { chapter = null } = useParams();
  const pathname = usePathname();
  const category = zCategory.nullable().parse(chapter);

  const toggleMenu = (value?: boolean) => () =>
    setHasMenu((previous) => (value === undefined ? !previous : value));

  const toggleTable = (value?: boolean) => () =>
    setHasTable((previous) => (value === undefined ? !previous : value));

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
