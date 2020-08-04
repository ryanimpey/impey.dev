module.exports = {
    siteMetadata: {
        title: `Ryan Impey`,
        description: `Portfolio page for Ryan Impey - Junior fullstack developer with industry experience in the Javascript Ecosystem`,
        author: `ryanimpey - Github`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
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
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
        {
            resolve: `gatsby-plugin-goatcounter`,
            options: {
              // REQUIRED! https://[my_code].goatcounter.com
              code: 'ryanimpey';
       
              // Delays sending pageview hits on route update (in milliseconds)
              pageTransitionDelay: 0,
       
              // Defines where to place the tracking script
              // boolean `true` in the head and `false` in the body
              head: false,
       
              // Set to true to include a gif to count non-JS users
              pixel: true,
       
              // Allow requests from local addresses (localhost, 192.168.0.0, etc.)
              // for testing the integration locally.
              // TIP: set up a `Additional Site` in your GoatCounter settings
              // and use its code conditionally when you `allowLocal`, example below
              allowLocal: false,
       
              // Override the default localStorage key more below
              localStorageKey: 'skipgc',
       
              // Set to boolean true to enable referrer set via URL parameters
              // Like example.com?ref=referrer.com or example.com?utm_source=referrer.com
              // Accepts a function to override the default referrer extraction
              // NOTE: No Babel! The function will be passes as is to your websites <head> section
              // So make sure the function works as intended in all browsers you want to support
              referrer: false,
       
              // Setting it to boolean true will clean the URL from
              // `?ref` & `?utm_` parameters before sending it to GoatCounter
              // It uses `window.history.replaceState` to clean the URL in the
              // browser address bar as well.
              // This is to prevent ref tracking ending up in your users bookmarks.
              // All parameters other than `ref` and all `utm_` will stay intact
              urlCleanup: false,
            },
          },
    ],
}
