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


function injectCardArt(content) {
  return content
    .replace(/!IC/g, '![IC](https://img.scryfall.com/cards/small/en/mir/129.jpg)')
    .replace(/!LP/g, '![LP](https://img.scryfall.com/cards/small/en/tmp/294.jpg)')
    .replace(/!DR/g, '![DR](https://img.scryfall.com/cards/small/en/mmq/129.jpg)')
    .replace(/!ToA/g, '![ToA](https://img.scryfall.com/cards/small/en/scg/75.jpg)')
    .replace(/!BW/g, '![BW](https://img.scryfall.com/cards/small/en/jud/83.jpg)')
    .replace(/!CB/g, '![CB](https://img.scryfall.com/cards/small/en/5dn/112.jpg)')
    .replace(/!LED/g, '![LED](https://img.scryfall.com/cards/small/en/mir/307.jpg)')
    .replace(/!BS/g, '![BS](https://img.scryfall.com/cards/small/en/mmq/61.jpg)')
    .replace(/!Pre/g, '![Pre](https://img.scryfall.com/cards/small/en/m11/70.jpg)')
    .replace(/!Dur/g, '![Dur](https://img.scryfall.com/cards/small/en/usg/132.jpg)')
    .replace(/!CoV/g, '![CoV](https://img.scryfall.com/cards/small/en/ons/73.jpg)')
    .replace(/!RoF/g, '![RoF](https://img.scryfall.com/cards/small/en/usg/151.jpg)')
    .replace(/!CR/g, '![CR](https://img.scryfall.com/cards/small/en/tor/51.jpg)')
    .replace(/!IU/g, '![IU](https://img.scryfall.com/cards/small/en/sok/40.jpg)')
    .replace(/!SW/g, '![SW](https://img.scryfall.com/cards/small/en/fut/90.jpg)')
    .replace(/!D4/g, '![D4](https://img.scryfall.com/cards/small/en/por/86.jpg)')
    .replace(/!LM/g, '![LM](https://img.scryfall.com/cards/small/front/8/0/809205f3-acf5-4244-b360-09ce4ba76795.jpg)')
    .replace(/!SI/g, '![SI](https://img.scryfall.com/cards/small/en/lrw/272.jpg)')
    .replace(/!Em/g, '![Em](https://img.scryfall.com/cards/small/en/roe/4.jpg)');
}


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
      axios(resource).then(response => this.setState({content: injectCardArt(response.data)}));
    }
    catch (e) {
      console.error(`Could not find document at '${path}'`);
    }
  }

  render() {

    const { className, classes, gutter } = this.props;
    const { content } = this.state;

    const renderers = {
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
      thematicBreak: () => <Divider className={gutter && classes.gutter} />,
    };

    return content ? (
      <Typography className={className} component={ReactMarkdown} renderers={renderers} source={content} />
    ) : null;
  }
}


export default withStyles(styles)(Markdown);
