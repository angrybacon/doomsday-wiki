import NextLink from 'next/link';
import React from 'react';
import type { FunctionComponent } from 'react';
import {
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import type { Chapter } from '@/tools/markdown/types';

interface Props {
  currentCategory: string;
  currentChapter: string;
  isOpen: boolean;
  pages: Chapter[];
}

export const SidebarEntryPages: FunctionComponent<Props> = ({
  currentCategory,
  currentChapter,
  isOpen,
  pages,
}) => (
  <Collapse in={isOpen} timeout="auto">
    <Divider />
    <List component="div" dense sx={{ backgroundColor: 'background.default' }}>
      {pages.map(({ category, matter, route, slug }) => (
        <NextLink href={route} key={`page-${route}`} passHref>
          <ListItemButton
            component="a"
            selected={
              isOpen && category === currentCategory && slug === currentChapter
            }
          >
            <ListItemText primary={matter?.title || route} />
          </ListItemButton>
        </NextLink>
      ))}
    </List>
    <Divider />
  </Collapse>
);
