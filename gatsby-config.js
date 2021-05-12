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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of the content container as this plugin uses this as the base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
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
