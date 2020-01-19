const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');
const scryfall = require('./src/tools/scryfall');


exports.onCreateNode = ({ actions, getNode, node }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'File') {
    const slug = createFilePath({getNode, node});
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
      sourceInstanceName: {eq: "markdown"}
    }) {
      edges {
        node {
          childMarkdownRemark {
            rawMarkdownBody
            frontmatter {title}
          }
          fields {slug}
        }
      }
    }
  }`);
  return query.then(({ data, errors }) => {
    if (errors) {
      return Promise.reject(errors);
    }
    return Promise.all(data.allFile.edges.map(({ node }) => {
      const { frontmatter, rawMarkdownBody } = node.childMarkdownRemark;
      return scryfall.replace(rawMarkdownBody).then(body => createPage({
        component: renderer,
        context: {body, title: frontmatter.title},
        path: node.fields.slug,
      }));
    }));
  });
};
