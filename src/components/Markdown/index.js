import axios from 'axios';
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

import Prettylink from '../Prettylink';
import Quote from '../Quote';
import Scryfall from '../Scryfall';


const SCRYFALL_RE = /{{([^{}]+)}}/g;


const styles = theme => ({
  code: {
    borderColor: theme.palette.divider,
    borderRadius: 2,
    borderStyle: 'solid',
    borderWidth: 1,
    overflowY: 'auto',
    padding: theme.spacing.unit,
  },
  gutter: {
    marginLeft: -theme.overrides.MuiPaper.root.padding,
    width: `calc(100% + ${theme.overrides.MuiPaper.root.padding * 2 + 1}px)`,
  },
  table: {overflowX: 'auto'},
});


class Markdown extends React.PureComponent {

  state = {content: null};

  componentDidMount() {
    this.update();
  }

  componentDidUpdate(props) {
    if (props.match && this.props.match && props.match.url !== this.props.match.url) {
      this.update();
    }
  }

  update() {
    const path = this.props.source || ((
      this.props.match
        ? [this.props.match.url.split('/')[1]].concat(Object.values(this.props.match.params))
        : []
    ).join('/') + '.md');
    try {
      const resource = require('../../pages/' + path);
      axios(resource).then(response => this.setState({content: response.data}));
    }
    catch (e) {
      console.error(`Could not find document at '${path}'`);
    }
  }

  render() {

    const { className, classes, gutter } = this.props;
    const { content } = this.state;

    const renderers = {
      blockquote: props => <Quote children={props.children} />,
      code: props => <pre className={classes.code}><code>{props.value}</code></pre>,
      heading: props => <Typography children={props.children} gutterBottom variant={`h${props.level + 1}`} />,
      image: props => <img alt={props.alt} src={props.src} style={{height: '8em'}} />,
      link: Prettylink,
      linkReference: Prettylink,
      table: props => <Table children={props.children} className={gutter && classes.gutter} />,
      tableHead: props => <TableHead children={props.children} />,
      tableBody: props => <TableBody children={props.children} />,
      tableRow: props => <TableRow children={props.children} />,
      tableCell: props => <TableCell children={props.children} padding="checkbox" />,
      text: props => {
        const nodes = props.value.split(SCRYFALL_RE).map((it, index) => (
          index % 2 ? <Scryfall query={it} key={index} /> : it
        ));
        return <React.Fragment children={nodes} />;
      },
      thematicBreak: () => <Divider className={gutter && classes.gutter} />,
    };

    return content ? (
      <Typography className={className} component={ReactMarkdown} renderers={renderers} source={content} />
    ) : null;
  }
}


export default withStyles(styles)(Markdown);
