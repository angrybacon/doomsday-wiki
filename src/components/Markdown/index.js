import c from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import htmlParser from 'react-markdown/plugins/html-parser';
import Divider from '@material-ui/core/Divider';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Decklist from '../Decklist';
import Mana from '../Mana';
import Prettylink from '../Prettylink';
import Quote from '../Quote';
import Table from '../Table';
import Tweet from '../Tweet';
import useStyles from './styles';


export default function Markdown({ barf, className, source }) {

  const classes = useStyles();

  const renderers = {
    /* eslint-disable react/display-name, react/prop-types */
    blockquote: ({ children }) => <Quote children={children} />,
    code: ({ value }) => <pre className={classes.code}><code>{value}</code></pre>,
    heading: ({ children, level }) => (
      <Typography children={children} gutterBottom variant={`h${level + 2}`} />
    ),
    image: rest => <img {...rest} className={classes.image} />,
    link: Prettylink,
    linkReference: Prettylink,
    table: ({ children }) => <Table children={children} className={c({[classes.barf]: barf})} />,
    tableBody: ({ children }) => <TableBody children={children} />,
    tableCell: ({ align, children }) => <TableCell {...{align: align || undefined, children}} />,
    tableHead: ({ children }) => <TableHead children={children} />,
    tableRow: ({ children }) => <TableRow children={children} />,
    thematicBreak: () => <Divider className={c(classes.divider, {[classes.barf]: barf})} />,
    /* eslint-enable react/display-name, react/prop-types */
  };

  const parseHtml = htmlParser({
    isValidNode: node => node.type !== 'script',
    processingInstructions: [
      /* eslint-disable react/display-name, react/prop-types */
      {
        processNode: node => React.createElement(Decklist, {
          barf,
          collapsible: true,
          path: node.attribs['deckfile'],
        }),
        replaceChildren: true,
        shouldProcessNode: ({ attribs }) => attribs && attribs['deckfile'],
      },
      {
        processNode: () => React.createElement(Mana),
        shouldProcessNode: node => node.name === 'mana',
      },
      {
        processNode: () => React.createElement('span', {className: classes.pile}),
        shouldProcessNode: ({ name }) => name === 'pile',
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
  barf: PropTypes.bool,
  className: PropTypes.string,
  source: PropTypes.string.isRequired,
};
