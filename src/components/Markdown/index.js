import c from 'classnames';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
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


export default function Markdown({ barf, className, source }) {

  const classes = useStyles();

  const renderers = {
    blockquote: ({ children }) => <Quote children={children} />,
    code: ({ value }) => <pre className={classes.code}><code>{value}</code></pre>,
    heading: ({ children, level }) => (
      <Typography children={children} gutterBottom variant={`h${level + 2}`} />
    ),
    link: Prettylink,
    linkReference: Prettylink,
    table: ({ children }) => (
      <TableContainer className={c({[classes.barf]: barf})}>
        <Table children={children} size="small" />
      </TableContainer>
    ),
    tableHead: ({ children }) => <TableHead children={children} />,
    tableBody: ({ children }) => <TableBody children={children} />,
    tableRow: ({ children }) => <TableRow children={children} />,
    tableCell: ({ align, children }) => <TableCell {...{align: align || undefined, children}} />,
    thematicBreak: () => <Divider className={c(classes.divider, {[classes.barf]: barf})} />,
  };

  const parseHtml = htmlParser({
    isValidNode: node => node.type !== 'script',
    processingInstructions: [
      {
        processNode: node => React.createElement(Decklist, {
          className: classes.barf,
          deckFile: node.attribs['deckfile'],
        }),
        replaceChildren: true,
        shouldProcessNode: ({ attribs }) => attribs && attribs['deckfile'],
      },
      {
        processNode: () => React.createElement('span', {className: classes.pile}),
        shouldProcessNode: node => node.name === 'pile',
      },
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
