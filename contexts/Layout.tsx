'use client';

import { useParams } from 'next/navigation';
import { createContext, useState, type PropsWithChildren } from 'react';
import { z } from 'zod';

import { zCategory } from '@/tools/z/schemas';

export const LayoutContext = createContext({
  category: null as z.infer<typeof zCategory> | null,
  isOpen: false,
  onClose: () => {},
  onOpen: () => {},
});

export const LayoutProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);
  const { chapter = null } = useParams();
  const category = zCategory.nullable().parse(chapter);
  return (
    <LayoutContext.Provider
      value={{
        category,
        isOpen,
        onClose: () => setIsOpen(false),
        onOpen: () => setIsOpen(true),
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
