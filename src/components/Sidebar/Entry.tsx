import c from 'classnames';
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
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import type { CategoryMeta, Document } from '@/tools/markdown/types';
import { useStyles } from './Entry.styles';

type OnToggle = (event: MouseEvent<HTMLDivElement>) => void;

type Props = CategoryMeta & { children?: never } & (
    | { component?: ElementType; pages?: never }
    | { component?: never; pages: Document[] }
  );

export const Entry: FunctionComponent<Props> = forwardRef<
  HTMLDivElement,
  Props
>(({ icon, id, pages, subtitle, title, ...rest }, ref) => {
  const { query } = useRouter();
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(id === query.category);
  const hasPages = !!pages?.length;

  /** Toggle the drawer in mobile viewport. */
  const onToggle: OnToggle = () => {
    setIsOpen((previous) => !previous);
  };

  const props = hasPages ? { onClick: onToggle, ...rest } : { ...rest };

  return (
    <>
      <ListItem button ref={ref} {...props}>
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
          <Icon
            className={classes.chevron}
            path={mdiChevronDown}
            rotate={isOpen ? -180 : 0}
            size={1}
          />
        )}
      </ListItem>
      {hasPages && (
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <Divider />
          <List className={classes.pages} component="div" dense>
            {pages?.map(({ matter, route, slug }) => (
              <NextLink href={route} key={`page-${route}`} passHref>
                <ListItem
                  button
                  className={c({
                    [classes.selected]:
                      id === query.category && slug === query.chapter,
                  })}
                  component="a"
                >
                  <ListItemText primary={matter?.title || route} />
                </ListItem>
              </NextLink>
            ))}
          </List>
          <Divider />
        </Collapse>
      )}
    </>
  );
});
