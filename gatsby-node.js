const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');
const scryfall = require('./src/tools/scryfall');


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
  const query = graphql(`{
    allFile(filter: {
      extension: {eq: "md"},
      relativePath: {glob: "(appendices|articles|chapters)/**/*"}
      sourceInstanceName: {eq: "markdown"},
    }) {edges {node {
      childMarkdownRemark {rawMarkdownBody}
      fields {slug}
    }}}
  }`);
  return query.then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    return Promise.all(result.data.allFile.edges.map(
      ({ node }) => scryfall.replace(node.childMarkdownRemark.rawMarkdownBody).then(body => createPage({
        component: renderer,
        context: {body},
        path: node.fields.slug,
      }))
    ));
  });
};
