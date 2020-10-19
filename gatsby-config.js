/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: 'Gatsby Tutorial',
    description: 'some random description',
    author: 'Viktor Kyssa',
    data: ['item 1', 'item 2'],
    person: {
      name: 'Viktor',
      age: 26
    }
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        // Override the file regex for CSS modules
        sassRuleModulesTest: /\.module\.s(a|c)ss$/,
        useResolveUrlLoader: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "posts",
        path: `${__dirname}/src/posts/`
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `cr2lm02rqdus`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
  ],
}
