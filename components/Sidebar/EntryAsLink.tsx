'use client';

import { ListItemButton, ListItemText } from '@mui/material';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  href: string;
  subtitle: string;
  title: string;
};

export const EntryAsLink = ({ href, subtitle, title }: Props) => {
  const pathname = usePathname();
  return (
    <ListItemButton
      component={NextLink}
      href={href}
      selected={href === pathname}
    >
      <ListItemText
        primary={title}
        secondary={subtitle}
        slotProps={{ secondary: { variant: 'caption' } }}
      />
    </ListItemButton>
  );
};
