import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

import ReactMarkdown from 'react-markdown';

import PrettyLink from './prettylink';

function getHeading(level) {
  return {
    component: 'h' + level,
    variant: {1: 'display3', 2: 'display2', 3: 'display1'}[level] || 'display1',
  };
}

class Page extends React.Component {

  state = {content: null};

  componentDidMount() {
    import('../pages/' + this.props.source).then(
      content => this.setState({content: content}),
      () => this.setState({content: null})
    );
  }

  render() {
    const renderers = {
      heading: props => <Typography children={props.children} gutterBottom {...getHeading(props.level)} />,
      link: props => <PrettyLink {...props} gutterBottom />,
      table: props => <Table children={props.children} />,
      tableHead: props => <TableHead children={props.children} />,
      tableBody: props => <TableBody children={props.children} />,
      tableRow: props => <TableRow children={props.children} />,
      tableCell: props => <TableCell children={props.children} padding="checkbox" />,
    };
    renderers.linkReference = renderers.link;
    const { className } = this.props;
    let { content } = this.state;
    return content ? (
      <Typography
        children={<ReactMarkdown className={className} renderers={renderers} source={content} />}
        component="div" />
    ) : null;
  }
}

export default Page;
