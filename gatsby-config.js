require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `Bryce Pedroza`,
    siteTitleAlt: `Bryce Pedroza`,
    siteImage: `/favicon.ico`,
    siteDescription: `A Personal Gatsby JS React Website for Bryce Pedroza. A security engineer and technologist`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        feedTitle: `Bryce Pedroza`,
        siteImage: `/favicon.ico`,
        navigation: [
          {
            title: `Articles`,
            slug: `/articles`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
          {
            title: `Resume`,
            slug: `/resume`,
          }
        ],
        externalLinks: [
          {
            name: `GitHub`,
            url: `https://github.com/brycepedroza/`,
          },
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/bryce-pedroza/`,
          }
        ],
        blogPath: '/articles',

      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GOOGLE_ANALYTICS_ID],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bryce Pedroza - A Personal Website`,
        short_name: `minimal-blog`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/bp.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/bp.png`,
            sizes: `512x512`,
            type: `image/png`,
          }
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
