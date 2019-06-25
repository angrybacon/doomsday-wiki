module.exports = {
  plugins: [
    {
      options: {
        name: 'markdown',
        path: `${__dirname}/src/markdown/`,
      },
      resolve: 'gatsby-source-filesystem',
    },
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
  ],
  siteMetadata: {
    title: 'Doomsday Wiki',
    description: 'Some description.',
  },
}
