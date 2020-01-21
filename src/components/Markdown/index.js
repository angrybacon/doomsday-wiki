import c from 'classnames';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import htmlParser from 'react-markdown/plugins/html-parser';

import Decklist from '../Decklist';
import Prettylink from '../Prettylink';
import Quote from '../Quote';
import useStyles from './styles';


export default function Markdown({ className, gutter, source }) {

  const classes = useStyles();

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
    thematicBreak: () => <Divider className={c(classes.divider, {[classes.gutter]: gutter})} />,
  };

  const parseHtml = htmlParser({
    isValidNode: node => node.type !== 'script',
    processingInstructions: [
      {
        processNode: node => React.createElement(Decklist, {
          barf: true,
          deckFile: node.attribs['deckfile'],
        }),
        replaceChildren: true,
        shouldProcessNode: ({ attribs }) => attribs && attribs['deckfile'],
      },
      {
        processNode: () => React.createElement('span', {className: classes.pile}),
        shouldProcessNode: node => node.name === 'pile',
      }
    ]
  });

  return (
    <Typography astPlugins={[parseHtml]}
                className={className}
                escapeHtml={false}
                renderers={renderers}
                source={source}
                component={ReactMarkdown} />
  );
}
