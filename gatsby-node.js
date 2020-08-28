const dayjs = require('dayjs');
const customParseFormat = require('dayjs/plugin/customParseFormat');
const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');
const deck = require('./src/tools/deck');
const scryfall = require('./src/tools/scryfall');

dayjs.extend(customParseFormat);

const makeChapter = ({ createNodeField, node }) => {
  let value = null;
  if (node.sourceInstanceName === 'appendices') {
    value = 'appendices';
  }
  else if (node.sourceInstanceName === 'chapters') {
    value = node.relativeDirectory.split('/')[0] || '0';
  }
  createNodeField({name: 'chapter', node, value});
};

const makeDate = ({ createNodeField, node }) => {
  const date = dayjs(node.relativeDirectory, 'YYYY/MM/DD');
  const value = date.isValid() ? date.format('YYYY-MM-DD') : null;
  createNodeField({name: 'date', node, value});
};

const makeSlug = ({ createNodeField, getNode, node }) => {
  const prefix = node.sourceInstanceName !== 'chapters' ? `/${node.sourceInstanceName}` : '';
  const path = createFilePath({getNode, node});
  createNodeField({name: 'slug', node, value: prefix.concat(path)});
};

exports.onCreateNode = ({
  actions,
  createContentDigest,
  createNodeId,
  getNode,
  loadNodeContent,
  node,
}) => {
  const { createNode, createNodeField } = actions;
  if (node.internal.type === 'File') {
    makeChapter({createNodeField, node});
    makeDate({createNodeField, node});
    makeSlug({createNodeField, getNode, node});
    if (node.sourceInstanceName === 'decklists') {
      loadNodeContent(node).then(value => {
        const data = deck.parse(value);
        createNode({
          ...data,
          id: createNodeId(node.id),
          internal: {contentDigest: createContentDigest(data), type: 'Deck'},
          relativePath: node.relativePath,
        });
      });
    }
  }
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const renderer = path.resolve('src/components/Page/index.js');
  const query = graphql(`{
    allFile(filter: {
      extension: {eq: "md"},
      sourceInstanceName: {glob: "(appendices|articles|chapters)"}
    }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {authors title}
            rawMarkdownBody
          }
          fields {date(formatString: "LL") slug}
          sourceInstanceName
        }
      }
    }
  }`);
  return query.then(({ data, errors }) => {
    if (errors) {
      return Promise.reject(errors);
    }
    return Promise.all(data.allFile.edges.map(({ node }) => {
      const { childMarkdownRemark, sourceInstanceName } = node;
      const { frontmatter, rawMarkdownBody } = childMarkdownRemark;
      const { authors, title } = frontmatter;
      const { date } = node.fields;
      return scryfall.replace(rawMarkdownBody).then(body => createPage({
        component: renderer,
        context: {authors, body, date, title, type: sourceInstanceName},
        path: node.fields.slug,
      }));
    }));
  });
};
