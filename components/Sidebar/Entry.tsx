'use client';

import type { MENU } from '~/tools/markdown/menu';

import ExpandMoreIcon from '@mui/icons-material/ExpandMoreRounded';
import { Collapse, List, ListItemButton, ListItemText } from '@mui/material';
import NextLink from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';

type Props = {
  chapter: string;
  pages: (typeof MENU)[number]['pages'];
  subtitle?: string;
  title?: string;
};

export const Entry = ({ chapter, pages, subtitle, title }: Props) => {
  const { chapter: currentChapter, slug: currentSlug } = useParams();
  const [isOpen, setIsOpen] = useState(chapter === currentChapter);

  if (!subtitle || !title) return null;

  const onToggle = () => setIsOpen((previous) => !previous);

  return (
    <>
      <ListItemButton onClick={onToggle}>
        <ListItemText
          primary={title}
          secondary={subtitle}
          slotProps={{ secondary: { variant: 'caption' } }}
        />
        <ExpandMoreIcon
          sx={[
            (theme) => ({ transition: theme.transitions.create('transform') }),
            isOpen && { transform: 'rotate(.5turn)' },
          ]}
        />
      </ListItemButton>
      <Collapse in={isOpen} timeout="auto">
        <List component="div" dense sx={(theme) => theme.mixins.recess('Y')}>
          {pages.map((it) => (
            <ListItemButton
              component={NextLink}
              href={it.href}
              key={it.slug}
              selected={chapter === currentChapter && it.slug === currentSlug}
            >
              <ListItemText primary={it.title} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
};
