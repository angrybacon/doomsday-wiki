const path = require('path');


exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const renderer = path.resolve('src/components/Markdown.js');
  return graphql(`{
    allMarkdownRemark(
      filter: {frontmatter: {path: {ne: null}}}
      limit: 1000
      sort: {order: DESC, fields: [frontmatter___date]}
    ) {edges {node {frontmatter {path}}}}
  }`).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        component: renderer,
        context: {},
        path: node.frontmatter.path,
      });
    });
  });
};
