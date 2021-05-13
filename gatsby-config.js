module.exports = {
  siteMetadata: {
    title: `Gatsby MDX Blog`,
    description: `Pet-project Blog built with Gatsby v3 and MDX`,
    titleTemplate: `%s | MDX Blog`,
    url: `https://gatsby-v3-mdx.netlify.app/`,
    image: `mainImg.png`,
    twitterUsername: `@xxx`,
  },
  plugins: [
    // `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Roboto',
              variants: ['400', '500', '600', '700'],
            },
            {
              family: 'Open Sans',
              variants: ['400', '500', '600', '700'],
            },
          ],
        },
      },
    },
  ],
}
