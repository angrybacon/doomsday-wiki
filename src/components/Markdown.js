import { graphql } from 'gatsby'
import Typography from '@material-ui/core/Typography';
import React from 'react';


export default class Markdown extends React.PureComponent {
  render() {
    const { markdownRemark } = this.props.data;
    const { frontmatter, html } = markdownRemark;
    return (
      <>
        <Typography children={frontmatter.title} variant="h1" />
        <Typography children={html} />
      </>
    );
  }
};


export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
      html
    }
  }
`;
