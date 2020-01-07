/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header/header";

import "normalize.css";
import "../styles/global.css";
import { ThemeProvider } from "styled-components";
import { dark_theme } from "../styles/themes";
import { Container } from "../styles/components/layoutStyle";

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <ThemeProvider theme={dark_theme}>
            <Header siteTitle={data.site.siteMetadata.title} />
            <Container>{children}</Container>
        </ThemeProvider>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
