module.exports = {
  siteMetadata: {
    title: 'Black Friends Dinner Podcast',
    description: 'Where we navigate what #AllBlackLivesMatter means in a world where they dont, over food & drink made with love by NandiKayyy, Your resident Black Non-Binary Bae.',
    author: 'Shaun Dawson',
    siteUrl: 'https://blackfriendsdinner.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo-icon.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-catch-links`,
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          'gatsby-remark-responsive-iframe',
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-46106886-2",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "blackfriendsdinner.com",
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: "pages",
      },
    },
  ],
}