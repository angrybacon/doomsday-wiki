import c from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import htmlParser from 'react-markdown/plugins/html-parser';
import Typography from '@material-ui/core/Typography';
import Decklist from '../Decklist';
import Mana from '../Mana';
import Prettylink from '../Prettylink';
import Tweet from '../Tweet';
import Blockquote from './renderers/Blockquote';
import Code from './renderers/Code';
import Heading from './renderers/Heading';
import Image from './renderers/Image';
import Paragraph from './renderers/Paragraph';
import Table, { TableBody, TableCell, TableHead, TableRow } from './renderers/Table';
import ThematicBreak from './renderers/ThematicBreak';
import useStyles from './styles';


export default function Markdown({ className, source }) {

  const classes = useStyles();

  const renderers = {
    blockquote: Blockquote,
    code: Code,
    heading: Heading,
    image: Image,
    link: Prettylink,
    linkReference: Prettylink,
    paragraph: Paragraph,
    table: Table,
    tableBody: TableBody,
    tableCell: TableCell,
    tableHead: TableHead,
    tableRow: TableRow,
    thematicBreak: ThematicBreak,
  };

  const parseHtml = htmlParser({
    isValidNode: node => node.type !== 'script',
    processingInstructions: [
      /* eslint-disable react/display-name, react/prop-types */
      {
        processNode: ({ attribs }) => React.createElement(Decklist, {
          barf: true,
          collapsible: true,
          path: attribs.deckfile,
        }),
        replaceChildren: true,
        shouldProcessNode: ({ attribs }) => attribs && attribs['deckfile'],
      },
      {
        processNode: () => React.createElement(Mana),
        shouldProcessNode: ({ name }) => name === 'mana',
      },
      {
        processNode: ({ attribs }) => {
          const classnames = c(classes.row, {
            centered: classes.rowCentered,
            pile: classes.rowPile,
          }[attribs.variant]);
          return React.createElement('span', {className: classnames});
        },
        shouldProcessNode: ({ name }) => name === 'row',
      },
      {
        processNode: ({ attribs }) => React.createElement(Tweet, {id: attribs.id}),
        shouldProcessNode: ({ name }) => name === 'tweet',
      },
      /* eslint-enable react/display-name, react/prop-types */
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


Markdown.propTypes = {
  className: PropTypes.string,
  source: PropTypes.string.isRequired,
};
