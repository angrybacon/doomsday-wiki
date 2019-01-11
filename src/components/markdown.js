import React from 'react';

import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import ReactMarkdown from 'react-markdown/with-html';

import PrettyLink from './prettylink';


const styles = theme => ({
  code: {
    borderColor: theme.palette.divider,
    borderRadius: 2,
    borderStyle: 'solid',
    borderWidth: 1,
    padding: theme.spacing.unit,
  },
  padding: theme.mixins.padding({x: true}),
  table: {overflowX: 'auto'},
});


function getHeading(level) {
  return {
    component: 'h' + level,
    variant: {1: 'display3', 2: 'display2', 3: 'display1', 4: 'subheading'}[level] || 'display1',
  };
}

function injectCardArt(content) {
  var injected = content;   
  injected = injected.replace(/!IC/g, '![IC](https://img.scryfall.com/cards/small/en/mir/129.jpg)'); 
  injected = injected.replace(/!LP/g, '![LP](https://img.scryfall.com/cards/small/en/tmp/294.jpg)'); 
  injected = injected.replace(/!DR/g, '![DR](https://img.scryfall.com/cards/small/en/mmq/129.jpg)'); 
  injected = injected.replace(/!ToA/g, '![ToA](https://img.scryfall.com/cards/small/en/scg/75.jpg)'); 
  injected = injected.replace(/!BW/g, '![BW](https://img.scryfall.com/cards/small/en/jud/83.jpg)'); 
  injected = injected.replace(/!CB/g, '![CB](https://img.scryfall.com/cards/small/en/5dn/112.jpg)'); 
  injected = injected.replace(/!LED/g, '![LED](https://img.scryfall.com/cards/small/en/mir/307.jpg)'); 
  injected = injected.replace(/!BS/g, '![BS](https://img.scryfall.com/cards/small/en/mmq/61.jpg)'); 
  injected = injected.replace(/!Pre/g, '![Pre](https://img.scryfall.com/cards/small/en/m11/70.jpg)'); 
  injected = injected.replace(/!Dur/g, '![Dur](https://img.scryfall.com/cards/small/en/usg/132.jpg)'); 
  injected = injected.replace(/!CoV/g, '![CoV](https://img.scryfall.com/cards/small/en/ons/73.jpg)'); 
  injected = injected.replace(/!RoF/g, '![RoF](https://img.scryfall.com/cards/small/en/usg/151.jpg)'); 
  injected = injected.replace(/!CR/g, '![CR](https://img.scryfall.com/cards/small/en/tor/51.jpg)'); 
  injected = injected.replace(/!IU/g, '![IU](https://img.scryfall.com/cards/small/en/sok/40.jpg)'); 
  injected = injected.replace(/!SW/g, '![SW](https://img.scryfall.com/cards/small/en/fut/90.jpg)'); 
  injected = injected.replace(/!D4/g, '![D4](https://img.scryfall.com/cards/small/en/por/86.jpg)');  
  injected = injected.replace(/!LM/g, '![LM](https://img.scryfall.com/cards/small/front/8/0/809205f3-acf5-4244-b360-09ce4ba76795.jpg)');      
  injected = injected.replace(/!SI/g, '![SI](https://img.scryfall.com/cards/small/en/lrw/272.jpg)');  
  injected = injected.replace(/!Em/g, '![Em](https://img.scryfall.com/cards/small/en/roe/4.jpg)');  

  return injected;
}

class Markdown extends React.Component {

  // NOTE: We relies on the fact that object key-values pairs are now ordered,
  //       sort of.

  state = {content: null};

  componentDidMount() {
    this.update();
  }

  componentDidUpdate(props) {
    if (this.props.match && props.match) {
      const path = Object.values(this.props.match.params).reduce((result, it) => result.concat(it), '');
      const oldPath = Object.values(props.match.params).reduce((result, it) => result.concat(it), '');
      if (path !== oldPath) {
        this.update();
      }
    }
  }

  update() {
    const parameters = (
      this.props.match
        ? [this.props.match.url.split('/')[1]].concat(Object.values(this.props.match.params))
        : []
    );
    const path = this.props.source || parameters.join('/') + '.md';
    import('../pages/' + path).then(
      content => this.setState({content: injectCardArt(content)}),
      () => this.setState({content: null}),
    );
  }

  render() {

    const { className, classes, noPadding, theme } = this.props;
    const { content } = this.state;

    const renderers = {
      code: props => (
        <div className={noPadding ? {} : classes.padding}>
          <pre className={classes.code} style={{overflowY: 'auto'}}>
            {props.value}
          </pre>
        </div>
      ),
      heading: props => (
        <Typography {...getHeading(props.level)}
                    children={props.children}
                    className={noPadding ? {} : classes.padding}
                    gutterBottom />
      ),
      link: PrettyLink,
      linkReference: PrettyLink,
      list: (props, a, b) => (
        <div className={noPadding ? {} : classes.padding}>
          {React.createElement(props.ordered ? 'ol' : 'ul', {}, props.children)}
        </div>
      ),
      paragraph: props => <p className={noPadding ? {} : classes.padding}>{props.children}</p>,
      table: props => (
        <div className={`table ${classes.table}`}><Table children={props.children} /></div>
      ),
      tableHead: props => <TableHead children={props.children} />,
      tableBody: props => <TableBody children={props.children} />,
      tableRow: props => <TableRow children={props.children} />,
      tableCell: props => (
        <TableCell children={props.children}
                   padding="checkbox"
                   style={{borderBottomColor: theme.palette.divider}}
                   // NOTE: There might soon be a better way.
                   //       See https://github.com/rexxars/react-markdown/issues/138.
                   {...this.props.tableCellProps} />
      ),
      thematicBreak: Divider,
      image: props => (
          <img src={props.src} alt={props.alt} style={{height: '8em'}}/>
      )
    };

    return content ? (
      <Typography component="div">
        <ReactMarkdown className={className} renderers={renderers} source={content} />
      </Typography>
    ) : null;
  }
}


export default withStyles(styles, {withTheme: true})(Markdown);
