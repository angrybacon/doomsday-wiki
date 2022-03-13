import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, {
  ElementType,
  FunctionComponent,
  MouseEvent,
  forwardRef,
  useState,
} from 'react';
import { mdiChevronDown } from '@mdi/js';
import Icon from '@mdi/react';
import {
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import type { Category, Document } from '@/tools/markdown/types';

type OnToggle = (event: MouseEvent<HTMLDivElement>) => void;

type Props = Category & { children?: never; href?: string } & (
    | { component?: ElementType; pages?: never }
    | { component?: never; pages: Document[] }
  );

export const SidebarEntry: FunctionComponent<Props> = forwardRef<
  HTMLDivElement,
  Props
>(({ icon, id: category, pages = [], subtitle, title, ...rest }, ref) => {
  const { asPath, query } = useRouter();
  const hasPages = pages.length > 0;
  const [isOpen, setIsOpen] = useState(hasPages && category === query.category);

  /** Toggle the drawer in mobile viewport. */
  const onToggle: OnToggle = () => setIsOpen((previous) => !previous);

  return (
    <>
      <ListItemButton
        ref={ref}
        sx={{
          '& > svg': {
            transition: (theme) => theme.transitions.create('transform'),
          },
        }}
        selected={rest.href === asPath}
        {...rest}
        {...(hasPages && { onClick: onToggle })}
      >
        {icon && (
          <ListItemIcon>
            <Icon path={icon} size={1} />
          </ListItemIcon>
        )}
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
            {pages.map(({ matter, route, slug }) => (
              <NextLink href={route} key={`page-${route}`} passHref>
                <ListItemButton
                  component="a"
                  selected={isOpen && slug === query.chapter}
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
