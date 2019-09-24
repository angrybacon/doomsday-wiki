import classNames from 'classnames';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import Prettylink from './Prettylink';
import Quote from './Quote';
import Scryfall from './Scryfall';


const SCRYFALL_RE = /{{([^{}]+)}}/g;


const styles = theme => ({
  code: {
    borderColor: theme.palette.divider,
    borderRadius: 2,
    borderStyle: 'solid',
    borderWidth: 1,
    overflowY: 'auto',
    padding: theme.spacing(1),
  },
  divider: {
    marginBottom: '1em',
    marginTop: '1em',
  },
  gutter: {
    marginLeft: -theme.overrides.MuiPaper.root.padding,
    width: `calc(100% + ${theme.overrides.MuiPaper.root.padding * 2 + 1}px)`,
  },
  table: {overflowX: 'auto'},
});


class Markdown extends React.PureComponent {
  render() {

    const { className, classes, gutter, source } = this.props;

    const renderers = {
      blockquote: props => <Quote children={props.children} />,
      code: props => <pre className={classes.code}><code>{props.value}</code></pre>,
      heading: props => (
        <Typography children={props.children} gutterBottom variant={`h${props.level + 2}`} />
      ),
      link: props => <Prettylink {...props} />,
      linkReference: props => <Prettylink {...props} />,
      table: props => (
        <Table children={props.children} className={gutter && classes.gutter} size="small" />
      ),
      tableHead: props => <TableHead children={props.children} />,
      tableBody: props => <TableBody children={props.children} />,
      tableRow: props => <TableRow children={props.children} />,
      tableCell: props => <TableCell children={props.children} />,
      text: props => {
        const nodes = props.value.split(SCRYFALL_RE).map((it, index) => (
          index % 2 ? <Scryfall query={it} key={index} /> : it
        ));
        return <React.Fragment children={nodes} />;
      },
      thematicBreak: () => (
        <Divider className={classNames(classes.divider, {[classes.gutter]: gutter})} />
      ),
    };

    return (
      <Typography className={className}
                  component={ReactMarkdown}
                  renderers={renderers}
                  source={source} />
    );
  }
}


export default withStyles(styles)(Markdown);
