/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header/header";
import Footer from "./footer";

import "normalize.css";
import "../styles/global.css";
import { ThemeProvider } from "styled-components";
import { dark_theme, light_theme } from "../styles/themes";
import { Container, ThemeContainer } from "../styles/components/layoutStyle";
import { FiMoon, FiSun } from "react-icons/fi";
import Toggle from "./toggle";

const Layout = ({ children }) => {
    const [isDarkTheme, toggleDarkTheme] = useState(true);

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
        <ThemeProvider theme={isDarkTheme ? dark_theme : light_theme}>
            <Header siteTitle={data.site.siteMetadata.title} />
            <ThemeContainer>
                <Container>{children}</Container>
            </ThemeContainer>
            <Footer />
            <Toggle onClick={() =>toggleDarkTheme(!isDarkTheme)}>
                {isDarkTheme ? <FiSun size={28} strokeWidth={2} /> : <FiMoon size={28} strokeWidth={3} />}
            </Toggle>
        </ThemeProvider>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
