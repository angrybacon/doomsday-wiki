import c from 'classnames';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';
import PropTypes from 'prop-types';
import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';


export default function Collapsible({ barf, children, className, title, zoom }) {
  const classes = useStyles();
  return !!children && (
    <div className={c({[classes.barf]: barf}, className)}>
      <ExpansionPanel classes={{root: classes.root}} elevation={0} square>
        {!!title && (
          <ExpansionPanelSummary expandIcon={<ChevronDownIcon />}>
            <Typography children={title} />
          </ExpansionPanelSummary>
        )}
        <ExpansionPanelDetails classes={{root: c(classes.details, {[classes.zoom]: zoom})}}>
          {children}
        </ExpansionPanelDetails>
      </ExpansionPanel>
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
