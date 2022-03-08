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
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import type { Category, Document } from '@/tools/markdown/types';

type OnToggle = (event: MouseEvent<HTMLDivElement>) => void;

type Props = Category & { children?: never } & (
    | { component?: ElementType; pages?: never }
    | { component?: never; pages: Document[] }
  );

export const Entry: FunctionComponent<Props> = forwardRef<
  HTMLDivElement,
  Props
>(({ icon, id, pages, subtitle, title, ...rest }, ref) => {
  const { query } = useRouter();
  const [isOpen, setIsOpen] = useState(id === query.category);
  const hasPages = !!pages?.length;

  /** Toggle the drawer in mobile viewport. */
  const onToggle: OnToggle = () => {
    setIsOpen((previous) => !previous);
  };

  const props = hasPages ? { onClick: onToggle, ...rest } : { ...rest };

  return (
    <>
      <ListItemButton
        ref={ref}
        sx={{
          '& > svg': {
            transition: (theme) => theme.transitions.create('transform'),
          },
        }}
        {...props}
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
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <Divider />
          <List
            component="div"
            dense
            sx={{ backgroundColor: 'background.default' }}
          >
            {pages?.map(({ matter, route, slug }) => (
              <NextLink href={route} key={`page-${route}`} passHref>
                <ListItemButton
                  component="a"
                  selected={id === query.category && slug === query.chapter}
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
