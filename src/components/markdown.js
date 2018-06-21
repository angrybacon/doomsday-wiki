import React from 'react';

import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import ReactMarkdown from 'react-markdown';

import PrettyLink from './prettylink';


const styles = theme => ({
  code: {
    borderColor: theme.palette.divider,
    borderRadius: 2,
    borderStyle: 'solid',
    borderWidth: 1,
    padding: theme.spacing.unit,
  },
  padding: theme.mixins.padding({x: true}),
});


function getHeading(level) {
  return {
    component: 'h' + level,
    variant: {1: 'display3', 2: 'display2', 3: 'display1', 4: 'subheading'}[level] || 'display1',
  };
}


class Markdown extends React.Component {

  // NOTE: We relies on the fact that object key-values pairs are now ordered,
  //       sort of.

  state = {content: null};

  componentDidMount() {
    this.update();
  }

  componentDidUpdate(props) {
    if (this.props.match && props.match) {
      const path = Object.values(this.props.match.params).reduce((result, it) => result.concat(it), '');
      const oldPath = Object.values(props.match.params).reduce((result, it) => result.concat(it), '');
      if (path !== oldPath) {
        this.update();
      }
    }
  }

  update() {
    const parameters = (
      this.props.match
        ? [this.props.match.url.split('/')[1]].concat(Object.values(this.props.match.params))
        : []
    );
    const path = this.props.source || parameters.join('/') + '.md';
    import('../pages/' + path).then(
      content => this.setState({content: content}),
      () => this.setState({content: null}),
    );
  }

  render() {

    const { className, classes, noPadding, theme } = this.props;
    const { content } = this.state;

    const renderers = {
      code: props => (
        <div className={noPadding ? {} : classes.padding}>
          <pre className={classes.code} style={{overflowY: 'auto'}}>
            <code>{props.value}</code>
          </pre>
        </div>
      ),
      heading: props => (
        <Typography {...getHeading(props.level)}
                    children={props.children}
                    className={noPadding ? {} : classes.padding}
                    gutterBottom />
      ),
      link: PrettyLink,
      linkReference: PrettyLink,
      list: (props, a, b) => (
        <div className={noPadding ? {} : classes.padding}>
          {React.createElement(props.ordered ? 'ol' : 'ul', {}, props.children)}
        </div>
      ),
      paragraph: props => <p className={noPadding ? {} : classes.padding}>{props.children}</p>,
      table: props => <Table children={props.children} className={classes.table} />,
      tableHead: props => <TableHead children={props.children} />,
      tableBody: props => <TableBody children={props.children} />,
      tableRow: props => <TableRow children={props.children} />,
      tableCell: props => (
        <TableCell children={props.children}
                   padding="checkbox"
                   style={{borderBottomColor: theme.palette.divider}}
                   // NOTE: There might soon be a better way.
                   //       See https://github.com/rexxars/react-markdown/issues/138.
                   {...this.props.tableCellProps} />
      ),
      thematicBreak: Divider,
    };

    return content ? (
      <Typography component="div">
        <ReactMarkdown className={className} renderers={renderers} source={content} />
      </Typography>
    ) : null;
  }
}


export default withStyles(styles, {withTheme: true})(Markdown);
