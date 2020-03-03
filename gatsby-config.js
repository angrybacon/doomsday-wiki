module.exports = {
  plugins: [
    {
      options: {name: 'appendices', path: `${__dirname}/markdown/appendices/`},
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {name: 'articles', path: `${__dirname}/markdown/articles/`},
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {name: 'chapters', path: `${__dirname}/markdown/chapters/`},
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {name: 'markdown', path: `${__dirname}/markdown/`},
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {name: 'decklists', path: `${__dirname}/decklists/`},
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {name: 'puzzles', path: `${__dirname}/puzzles/`},
      resolve: 'gatsby-source-filesystem',
    },
    'gatsby-plugin-material-ui',
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-transformer-yaml',
  ],
  siteMetadata: {
    description: 'Some description.',
    title: 'Doomsday Wiki',
  },
};
