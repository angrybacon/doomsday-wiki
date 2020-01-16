module.exports = {
  plugins: [
    {
      options: {
        name: 'markdown',
        path: `${__dirname}/markdown/`,
      },
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {
        name: 'puzzles',
        path: `${__dirname}/puzzles/`,
      },
      resolve: 'gatsby-source-filesystem',
    },
    'gatsby-plugin-material-ui',
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-transformer-yaml',
  ],
  siteMetadata: {
    title: 'Doomsday Wiki',
    description: 'Some description.',
  },
};
