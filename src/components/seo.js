/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql, Script } from "gatsby";

function SEO({ description, lang, meta, title }) {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `,
    );

    const metaDescription = description || site.siteMetadata.description;

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ].concat(meta)}
        >
            <meta name="keywords" content="Software Engineer, Developer, Essex, JavaScript, React, React Native" />
            <meta name="author" content="Ryan Impey" />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://impey.dev" />
            <link rel="stylesheet preload prefetch" as="style" href="https://fonts.googleapis.com/css?family=Raleway:900&display=swap" type="text/css" />
            <link rel="stylesheet preload prefetch" as="style" href="https://fonts.googleapis.com/css?family=Open+Sans:500,700,900&display=swap" type="text/css" />
            <Script data-host="https://app.microanalytics.io" data-dnt="false" src="https://app.microanalytics.io/js/script.js" id="ZwSg9rf6GA" strategy="post-hydrate" />
        </Helmet>
    );
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
};

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
};

export default SEO;
