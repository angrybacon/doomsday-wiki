import { Link } from 'gatsby';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';
import ChevronUpIcon from 'mdi-react/ChevronUpIcon';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import useStyles from './styles';


export default function Entry({ entries, extra, icon, subtitle, title, ...rest }) {

  const classes = useStyles();
  const [ open, setOpen ] = useState(false);

  const onToggle = () => setOpen(previous => !previous);

  return (
    <React.Fragment {...rest}>
      <ListItem button onClick={entries.length ? onToggle : null} {...extra}>
        {!!icon && <ListItemIcon children={icon} />}
        <ListItemText primary={title}
                      secondary={subtitle}
                      secondaryTypographyProps={{variant: 'caption'}} />
        {entries.length > 0 && (
          <div children={open ? <ChevronUpIcon /> : <ChevronDownIcon />}
               className={classes.entryChevron} />
        )}
      </ListItem>
      {entries.length > 0 && (
        <Collapse in={open} timeout="auto">
          <Divider />
          <List>
            {entries.map(({ childMarkdownRemark, fields }, index) => (
              <ListItem activeClassName={classes.entryActive}
                        button
                        component={Link}
                        dense
                        key={index}
                        to={fields.slug}>
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
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string,
};
