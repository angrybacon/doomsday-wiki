import React from 'react';
import c from 'classnames';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import htmlParser from 'react-markdown/plugins/html-parser';
import gfm from 'remark-gfm';
import slug from 'remark-slug';
import Typography from '@material-ui/core/Typography';
import mana from '../../tools/mana';
import Deck from '../Deck';
import Mana from '../Mana';
import Prettylink from '../Prettylink';
import Soundcloud from '../Soundcloud';
import Tweet from '../Tweet';
import Youtube from '../Youtube';
import Blockquote from './renderers/Blockquote';
import Code from './renderers/Code';
import Heading from './renderers/Heading';
import Image from './renderers/Image';
import Paragraph from './renderers/Paragraph';
import Table, { TableBody, TableCell, TableHead, TableRow } from './renderers/Table';
import ThematicBreak from './renderers/ThematicBreak';
import useStyles from './styles';

export default function Markdown({ className, source, ...rest }) {

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
        processNode: ({ attribs }) => <Deck barf collapsible path={attribs.path} />,
        shouldProcessNode: ({ name }) => name === 'deck',
      },
      {
        processNode: ({ attribs }) => (
          <Mana loyalty={attribs.loyalty} symbol={attribs.symbol} />
        ),
        shouldProcessNode: ({ name }) => name === 'mana',
      },
      {
        processNode: ({ attribs }) => {
          const classnames = c(classes.row, {
            centered: classes.rowCentered,
            hand: classes.rowHand,
            pile: classes.rowPile,
          }[attribs.variant]);
          return <span className={classnames} />;
        },
        shouldProcessNode: ({ name }) => name === 'row',
      },
      {
        processNode: ({ attribs }) => <Soundcloud url={attribs.url} />,
        shouldProcessNode: ({ name }) => name === 'soundcloud',
      },
      {
        processNode: ({ attribs }) => <Tweet id={attribs.id} />,
        shouldProcessNode: ({ name }) => name === 'tweet',
      },
      {
        processNode: ({ attribs }) => <Youtube id={attribs.id} />,
        shouldProcessNode: ({ name }) => name === 'youtube',
      },
      /* eslint-enable react/display-name, react/prop-types */
    ],
  });

  return (
    <Typography
      astPlugins={[parseHtml]}
      className={className}
      component={ReactMarkdown}
      escapeHtml={false}
      plugins={[gfm, slug]}
      renderers={renderers}
      source={mana.replace(source)}
      {...rest}
    />
  );
}

Markdown.propTypes = {
  className: PropTypes.string,
  source: PropTypes.string.isRequired,
};
