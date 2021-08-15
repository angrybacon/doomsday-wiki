import NextLink from 'next/link';
import React, {
  ElementType,
  FunctionComponent,
  MouseEvent,
  useState,
} from 'react';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { mdiChevronDown } from '@mdi/js';
import Icon from '@mdi/react';
import type { CategoryMeta, Document } from '@/tools/markdown/types';
import { useStyles } from '@/components/Sidebar/Entry.styles';

type OnToggle = (event: MouseEvent<HTMLDivElement>) => void;

type Props = CategoryMeta &
  (
    | { component?: ElementType; pages?: never }
    | { component?: never; pages: Document[] }
  );

export const Entry: FunctionComponent<Props> = ({
  icon,
  pages,
  subtitle,
  title,
  ...rest
}) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const hasPages = !!pages?.length;

  /** Toggle the drawer in mobile viewport. */
  const onToggle: OnToggle = () => {
    setIsOpen((previous) => !previous);
  };

  const props = hasPages ? { onClick: onToggle, ...rest } : { ...rest };

  return (
    <>
      <ListItem button {...props}>
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
          <List className={classes.pages} component="div" dense disablePadding>
            {pages?.map(({ data, route }) => (
              <NextLink href={route} key={`page-${route}`} passHref>
                <ListItem button component="a">
                  <ListItemText primary={data?.title || route} />
                </ListItem>
              </NextLink>
            ))}
          </List>
          <Divider />
        </Collapse>
      )}
    </>
  );
};
