module.exports = {
  siteMetadata: {
    title: `Thanasis Kontokostas Portfolio`,
    description: `An overkill portfolio project to show my skills`,
    author: `@isengartz`,
    siteUrl: `https://thanasis-kontokostas.dev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        data: `@import "./src/assets/styles/variables";
        @import "./src/assets/styles/mixins";`,
      },
    },
    {
      resolve: `sin-api-source-plugin`,
    },

    {
      resolve: `gatsby-source-filesystem`,

      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sin Portfolio`,
        short_name: `Sin Portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Raleway', 'Sedgwick Ave Display'],
        },
      },
    },
    // `gatsby-plugin-loadable-components-ssr`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`],
      },
    },
    `gatsby-plugin-netlify`,
  ],
};
