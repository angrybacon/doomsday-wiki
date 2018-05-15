import React from 'react';

import { Typography } from 'material-ui';
import ReactMarkdown from 'react-markdown';

import { PrettyLink } from '.';

function getHeading(level) {
  const defaultVariant = 'headline';
  return {1: 'display2', 2: 'display1'}[level] || defaultVariant;
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
      heading: props => <Typography children={props.children} gutterBottom variant={getHeading(props.level)} />,
      link: props => <PrettyLink {...props} gutterBottom />,
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
