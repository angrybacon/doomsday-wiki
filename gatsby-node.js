const path = require('path');
const dayjs = require('dayjs');
const customParseFormat = require('dayjs/plugin/customParseFormat');
const { createFilePath } = require('gatsby-source-filesystem');
const mana = require('./src/tools/mana');
const scryfall = require('./src/tools/scryfall');


dayjs.extend(customParseFormat);


exports.onCreateNode = ({ actions, getNode, node }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'File') {
    const slug = createFilePath({getNode, node});
    createNodeField({name: 'slug', node, value: slug});
    const date = dayjs(node.relativeDirectory, '[articles]/YYYY/MM/DD');
    if (date.isValid()) {
      createNodeField({name: 'date', node, value: date.format('YYYY-MM-DD')});
    }
    const [ namespace, chapter ] = node.relativePath.split('/');
    if (namespace === 'chapters') {
      createNodeField({name: 'chapter', node, value: chapter});
    }
  }
};


exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const renderer = path.resolve('src/components/Page/index.js');
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
      return mana.replace(rawMarkdownBody).then(scryfall.replace).then(body => createPage({
        component: renderer,
        context: {body, title: frontmatter.title},
        path: node.fields.slug,
      }));
    }));
  });
};
