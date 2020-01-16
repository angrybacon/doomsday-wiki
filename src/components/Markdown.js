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
import htmlParser from 'react-markdown/plugins/html-parser';

import Decklist from './Decklist';
import Prettylink from './Prettylink';
import Quote from './Quote';


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
        <Typography children={props.children} paragraph variant={`h${props.level + 2}`} />
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
      thematicBreak: () => (
        <Divider className={classNames(classes.divider, {[classes.gutter]: gutter})} />
      ),
    };

    const parseHtml = htmlParser({
      isValidNode: node => node.type !== 'script',
      processingInstructions: [
        // Custom processing instructions
        {
          replaceChildren: true,
          // Inserts decklist component into element with 'decklist'
          // attribute, ex. <div deckfile="EchoDoomsday.json" />
          shouldProcessNode: node => node.attribs && node.attribs['deckfile'],
          // Perform the insertion
          processNode: node => React.createElement(Decklist, {deckFile: node.attribs['deckfile']}),
        },
        {
          // Handle anything you don't have custom processing for
          shouldProcessNode: () => true,
          // processNode: processNodeDefinitions.processDefaultNode,
        },
      ]
    });

    return (
      <Typography component={ReactMarkdown}
                  escapeHtml={false}
                  renderers={renderers}
                  source={source}
                  astPlugins={[parseHtml]}
                  className={className} />
    );
  }
}


export default withStyles(styles)(Markdown);
