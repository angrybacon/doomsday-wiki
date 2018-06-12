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
});


function getHeading(level) {
  return {
    component: 'h' + level,
    variant: {1: 'display3', 2: 'display2', 3: 'display1', 4: 'subheading'}[level] || 'display1',
  };
}


class Markdown extends React.Component {

  state = {content: null};

  componentDidMount() {
    const path = this.props.source || this.props.match.params.chapter + '/' + this.props.match.params.page + '.md';
    import('../pages/' + path).then(
      content => this.setState({content: content}),
      () => this.setState({content: null})
    );
  }

  render() {

    const { className, classes, theme } = this.props;
    const { content } = this.state;

    const renderers = {
      code: props => (
        <pre className={classes.code} style={{overflowY: 'auto'}}><code>{props.value}</code></pre>
      ),
      heading: props => (
        <Typography children={props.children} gutterBottom {...getHeading(props.level)} />
      ),
      link: PrettyLink,
      linkReference: PrettyLink,
      table: props => <Table children={props.children} />,
      tableHead: props => <TableHead children={props.children} />,
      tableBody: props => <TableBody children={props.children} />,
      tableRow: props => <TableRow children={props.children} />,
      tableCell: props => (
        <TableCell children={props.children}
                   padding="dense"
                   style={{borderBottomColor: theme.palette.divider}} />
      ),
      thematicBreak: Divider,
    };

    return content ? (
      <Typography
        children={<ReactMarkdown className={className} renderers={renderers} source={content} />}
        component="div" />
    ) : null;
  }
}


export default withStyles(styles, {withTheme: true})(Markdown);
