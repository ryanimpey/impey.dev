module.exports = {
    siteMetadata: {
        title: `Ryan Impey`,
        description: `Ryan Impey - Software developer based in Essex. Embedded C software engineer at Sky with experience as a fullstack Javascript & React Developer`,
        author: `ryanimpey - Github`,
        siteUrl: `https://impey.dev/`,
    },
    plugins: [
        `gatsby-plugin-robots-txt`,
        {
            resolve: "gatsby-plugin-simple-analytics",
            options: {
                trackPageViews: true,
                events: true,
                eventsGlobal: "sa_event",
                ignorePages: ["pathname"],
            },
        },
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                serialize: ({ path }) => {
                    return {
                        url: path,
                        lastmod: new Date().toISOString(),
                    }
                },
            }
        }
        ,
        `gatsby-plugin-image`,
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
    ],
}
