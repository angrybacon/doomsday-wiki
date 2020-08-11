import { Link } from 'gatsby';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';
import ChevronUpIcon from 'mdi-react/ChevronUpIcon';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useMatch } from '@reach/router';
import useStyles from './styles';

export default function Entry({ entries, extra, icon, namespace, subtitle, title, ...rest }) {

  const match = useMatch(`/${namespace}/*`);
  const classes = useStyles();
  const [ open, setOpen ] = useState(false);
  const [ ready, setReady ] = useState(false);

  const onToggle = () => setOpen(previous => !previous);

  useEffect(() => {
    if (!ready && !!match) {
      setOpen(!!match);
      setReady(true);
    }
  }, [match, ready]);

  return (
    <React.Fragment {...rest}>
      <ListItem button onClick={entries.length ? onToggle : null} {...extra}>
        {!!icon && <ListItemIcon children={icon} />}
        <ListItemText
          primary={title}
          secondary={subtitle}
          secondaryTypographyProps={{variant: 'caption'}}
        />
        {entries.length > 0 && (
          <div
            children={open ? <ChevronUpIcon /> : <ChevronDownIcon />}
            className={classes.entryChevron}
          />
        )}
      </ListItem>
      {entries.length > 0 && (
        <Collapse in={open} timeout="auto">
          <Divider />
          <List>
            {entries.map(({ childMarkdownRemark, fields }, index) => (
              <ListItem
                key={index}
                button
                dense
                activeClassName={classes.entryActive}
                component={Link}
                to={fields.slug}
              >
                <ListItemText primary={childMarkdownRemark.frontmatter.title} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </Collapse>
      )}
    </React.Fragment>
  );
}

Entry.defaultProps = {
  entries: [],
};

Entry.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    childMarkdownRemark: PropTypes.object.isRequired,
    fields: PropTypes.object.isRequired,
  })),
  extra: PropTypes.object,
  icon: PropTypes.node,
  namespace: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string,
};
