import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { forwardRef, useState } from 'react';
import type { ElementType, FunctionComponent } from 'react';
import { mdiChevronDown } from '@mdi/js';
import Icon from '@mdi/react';
import {
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { Category } from '@/tools/markdown/constants/Category';
import type { Chapter, MenuEntry } from '@/tools/markdown/types';

type Props = Omit<MenuEntry, 'category' | 'pages'> & {
  category?: Category;
  children?: never;
  component?: ElementType;
  href?: string;
  pages?: Chapter[];
};

export const SidebarEntry: FunctionComponent<Props> = forwardRef<
  HTMLDivElement,
  Props
>(({ category, pages = [], subtitle, title, ...rest }, ref) => {
  const { asPath, query } = useRouter();
  const routeCategory = `${query.category}`;
  const routeChapter = `${query.chapter}`;
  const hasPages = pages.length > 0;
  const [isOpen, setIsOpen] = useState(hasPages && category === routeCategory);

  /** Toggle the drawer in mobile viewport. */
  const onToggle = () => setIsOpen((previous) => !previous);

  return (
    <>
      <ListItemButton
        ref={ref}
        sx={({ transitions }) => ({
          '> svg': { transition: transitions.create('transform') },
        })}
        selected={rest.href === asPath}
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
              <NextLink href={route} key={`page-${route}`} passHref>
                <ListItemButton
                  component="a"
                  selected={
                    isOpen &&
                    category === routeCategory &&
                    slug === routeChapter
                  }
                >
                  <ListItemText primary={matter?.title || route} />
                </ListItemButton>
              </NextLink>
            ))}
          </List>
          <Divider />
        </Collapse>
      )}
    </>
  );
});
