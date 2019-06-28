// import { graphql } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import Application from './Application';


export default class Page extends React.PureComponent {
  render() {
    // const { markdownRemark } = this.props.data;
    // const { frontmatter, html } = markdownRemark;
    return (
      <Application>
        <Typography children="Some Markdown Content." />
        {/* <Typography children={frontmatter.title} variant="h2" /> */}
        {/* <Typography children={html} /> */}
      </Application>
    );
  }
}


// export const query = graphql`
//   query($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         path
//         title
//       }
//       html
//     }
//   }
// `;
