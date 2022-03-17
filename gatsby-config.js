module.exports = {
  pathPrefix: '/jakeroggenbuck',
  siteMetadata: {
    title: `jr0`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-mdx',
    'gatsby-plugin-image',
    `gatsby-plugin-sharp`,
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `repositories`,
        path: `${__dirname}/src/data/`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `devlogs`,
        path: `${__dirname}/src/data/`,
      },
    },
  ],
};
