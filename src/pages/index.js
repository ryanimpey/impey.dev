import React from "react";
import Carousel from "nuka-carousel";
import { graphql, useStaticQuery } from "gatsby";
import styled, { ThemeProvider } from "styled-components";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

import SEO from "../components/seo";
import Layout from "../components/layout";
import { H1, H2, P } from "../components/headings";

import { dark_theme } from "../styles/themes";
import Index from "../styles/pages/indexPageStyle";

import { intro_message } from "../helpers/strings";
import { PRIMARY_COLOR } from "../helpers/colors";

const IndexPage = () => {
    const data = useStaticQuery(imageQuery);
    return (
        <ThemeProvider theme={dark_theme}>
            <Layout>
                <SEO title="Home" />
                <Index.Section>
                    <H1>
                        Hello,
                        <br />
                        I'm Ryan.
                    </H1>
                    <P>{intro_message}</P>
                    <SocialLinks />
                </Index.Section>
                <Index.CarouselSection className="index--carousel--section">
                    <H2>Projects</H2>
                    <Carousel
                        wrapAround
                        className="index--carousel"
                        renderCenterLeftControls={() => null}
                        renderCenterRightControls={() => null}
                        beforeSlide={(curr, end) => console.log(curr, end)}
                    >
                        <img src="https://via.placeholder.com/376x188/ffffff/c0392b" />
                        <img src="https://via.placeholder.com/376x188/ffffff/c0392b" />
                        <img src="https://via.placeholder.com/376x188/ffffff/c0392b" />
                        <img src="https://via.placeholder.com/376x188/ffffff/c0392b" />
                        <img src="https://via.placeholder.com/376x188/ffffff/c0392b" />
                        <img src="https://via.placeholder.com/376x188/ffffff/c0392b" />
                    </Carousel>
                </Index.CarouselSection>
            </Layout>
        </ThemeProvider>
    );
};

const SocialLinks = () => (
    <Index.LinkContainer>
        <a
            tabIndex="0"
            target="_blank"
            href="https://github.com/ryanimpey"
            rel="noopener noreferrer"
        >
            <FiGithub size={24} color={PRIMARY_COLOR} strokeWidth={1} />
        </a>
        <a
            tabIndex="0"
            target="_blank"
            href="mailto:ryanimpey@**NOSPAM**live.co.uk"
            rel="noopener noreferrer"
        >
            <FiMail size={24} color={PRIMARY_COLOR} strokeWidth={1} />
        </a>
        <a
            tabIndex="0"
            target="_blank"
            href="https://www.linkedin.com/in/ryan-impey-259a7874/"
            rel="noopener noreferrer"
        >
            <FiLinkedin size={24} color={PRIMARY_COLOR} strokeWidth={1} />
        </a>
    </Index.LinkContainer>
);

const imageQuery = graphql`
    query retrieveMainImage {
        image: file(relativePath: { eq: "mountain.jpg" }) {
            id
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

export default IndexPage;
