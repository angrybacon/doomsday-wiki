const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');


exports.onCreateNode = ({ actions, getNode, node }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'File') {
    const slug = createFilePath({basePath: 'markdown', getNode, node});
    createNodeField({name: 'slug', node, value: slug});
    const [ namespace, chapter ] = node.relativePath.split('/');
    if (namespace === 'chapters') {
      createNodeField({name: 'chapter', node, value: chapter});
    }
  }
};


exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const renderer = path.resolve('src/components/Page.js');
  return graphql(`{
    allFile(filter: {
      extension: {eq: "md"},
      relativePath: {glob: "(appendices|articles|chapters)/**/*"}
      sourceInstanceName: {eq: "markdown"},
    }) {edges {node {
      childMarkdownRemark {rawMarkdownBody}
      fields {slug}
    }}}
  }`).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    return result.data.allFile.edges.forEach(({ node }) => {
      createPage({
        component: renderer,
        context: {body: node.childMarkdownRemark.rawMarkdownBody},
        path: node.fields.slug,
      });
    });
  });
};
