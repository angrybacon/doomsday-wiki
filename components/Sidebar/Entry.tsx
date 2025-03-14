import { mdiChevronDown } from '@mdi/js';
import { Icon } from '@mdi/react';
import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { type MENU } from '@/tools/markdown/menu';

type Props = {
  chapter: string;
  pages: (typeof MENU)[number]['pages'];
  subtitle?: string;
  title?: string;
};

export const Entry = ({ chapter, pages, subtitle, title }: Props) => {
  const { query } = useRouter();
  const currentChapter = `${query.category}`.toUpperCase();
  const currentSlug = `${query.chapter}`;
  const [isOpen, setIsOpen] = useState(chapter === currentChapter);

  if (!subtitle || !title) return null;

  const onToggle = () => setIsOpen((previous) => !previous);

  return (
    <>
      <ListItemButton onClick={onToggle}>
        <ListItemText
          primary={title}
          secondary={subtitle}
          secondaryTypographyProps={{ variant: 'caption' }}
        />
        <Box
          component={Icon}
          path={mdiChevronDown}
          rotate={isOpen ? -180 : 0}
          size={1}
          sx={({ transitions }) => ({
            transition: transitions.create('transform'),
          })}
        />
      </ListItemButton>
      <Collapse in={isOpen} timeout="auto">
        <List
          component="div"
          dense
          sx={{
            backgroundColor: 'background.default',
            borderBottom: 1,
            borderTop: 1,
            borderColor: 'divider',
          }}
        >
          {pages.map(({ href, slug, title }) => (
            <ListItemButton
              component={NextLink}
              href={href}
              key={slug}
              selected={chapter === currentChapter && slug === currentSlug}
            >
              <ListItemText primary={title} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
};
