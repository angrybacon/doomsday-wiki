import c from 'classnames';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';
import PropTypes from 'prop-types';
import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

export default function Collapsible({ barf, children, className, title, zoom }) {
  const classes = useStyles();
  return !!children && (
    <div className={c({[classes.barf]: barf}, className)}>
      <Accordion square classes={{root: classes.root}} elevation={0}>
        {!!title && (
          <AccordionSummary classes={{root: classes.summary}} expandIcon={<ChevronDownIcon />}>
            <Typography>{title}</Typography>
          </AccordionSummary>
        )}
        <AccordionDetails classes={{root: c(classes.details, {[classes.zoom]: zoom})}}>
          {children}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

Collapsible.propTypes = {
  barf: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.node.isRequired,
  zoom: PropTypes.bool,
};
