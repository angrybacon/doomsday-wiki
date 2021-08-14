import NextLink from 'next/link';
import React, { FunctionComponent, MouseEvent, useState } from 'react';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { mdiChevronDown } from '@mdi/js';
import Icon from '@mdi/react';
import type { ChapterEntry } from '@/tools/markdown/types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    chevron: {
      transition: theme.transitions.create('transform'),
    },
    pages: {
      backgroundColor: theme.palette.background.default,
    },
  })
);

type OnToggle = (event: MouseEvent<HTMLDivElement>) => void;

type Props = ChapterEntry;

export const SidebarEntry: FunctionComponent<Props> = ({
  icon,
  pages,
  subtitle,
  title,
}) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  /** Toggle the drawer in mobile viewport. */
  const onToggle: OnToggle = () => {
    setIsOpen((previous) => !previous);
  };

  return (
    <>
      <ListItem button onClick={onToggle}>
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
        <Icon
          className={classes.chevron}
          path={mdiChevronDown}
          rotate={isOpen ? -180 : 0}
          size={1}
        />
      </ListItem>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <Divider />
        <List className={classes.pages} component="div" dense disablePadding>
          {pages.map(({ route, title: pageTitle }) => (
            <NextLink href={route} key={`page-${route}`} passHref>
              <ListItem button component="a">
                <ListItemText primary={pageTitle} />
              </ListItem>
            </NextLink>
          ))}
        </List>
        <Divider />
      </Collapse>
    </>
  );
};
