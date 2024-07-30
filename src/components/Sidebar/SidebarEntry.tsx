import { mdiChevronDown } from '@mdi/js';
import Icon from '@mdi/react';
import {
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import {
  forwardRef,
  useState,
  type ElementType,
  type FunctionComponent,
} from 'react';

import { type Category } from '@/tools/markdown/constants/Category';
import { type ChapterCard, type MenuEntry } from '@/tools/markdown/types';

type Props = Omit<MenuEntry, 'category' | 'pages'> & {
  category?: keyof typeof Category;
  children?: never;
  component?: ElementType;
  href?: string;
  pages?: ChapterCard[];
};

export const SidebarEntry: FunctionComponent<Props> = forwardRef<
  HTMLDivElement,
  Props
>(({ category, pages = [], subtitle, title, ...rest }, ref) => {
  const { asPath, query } = useRouter();
  const routeCategory = `${query.category}`.toUpperCase();
  const routeChapter = `${query.chapter}`;
  const hasPages = pages.length > 0;
  const [isOpen, setIsOpen] = useState(hasPages && category === routeCategory);

  /** Toggle the drawer in mobile viewport. */
  const onToggle = () => setIsOpen((previous) => !previous);

  return (
    <>
      <ListItemButton
        ref={ref}
        selected={rest.href === asPath}
        sx={({ transitions }) => ({
          '> svg': { transition: transitions.create('transform') },
        })}
        {...rest}
        {...(hasPages && { onClick: onToggle })}
      >
        <ListItemText
          primary={title}
          secondary={subtitle}
          secondaryTypographyProps={{ variant: 'caption' }}
        />
        {hasPages && (
          <Icon path={mdiChevronDown} rotate={isOpen ? -180 : 0} size={1} />
        )}
      </ListItemButton>
      {hasPages && (
        <Collapse in={isOpen} timeout="auto">
          <Divider />
          <List
            component="div"
            dense
            sx={{ backgroundColor: 'background.default' }}
          >
            {pages.map(({ category, matter, route, slug }) => (
              <ListItemButton
                component={NextLink}
                href={route}
                key={`page-${route}`}
                selected={category === routeCategory && slug === routeChapter}
              >
                <ListItemText primary={matter?.title || route} />
              </ListItemButton>
            ))}
          </List>
          <Divider />
        </Collapse>
      )}
    </>
  );
});
