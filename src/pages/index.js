import React, { useState } from "react";
import Carousel from "nuka-carousel";
import { ThemeProvider } from "styled-components";
import { FiGithub, FiLinkedin, FiMail, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Grid, Row, Col } from "react-flexbox-grid";

import SEO from "../components/seo";
import Badge from "../components/badge";
import Layout from "../components/layout";
import ListItem from "../components/list";
import { H1, H2, H3, H4, P } from "../components/headings";

import { dark_theme } from "../styles/themes";
import Index from "../styles/pages/indexPageStyle";

import { intro_message } from "../helpers/strings";
import { PRIMARY_COLOR } from "../helpers/colors";
import { experiences, certifications, projects } from "../helpers/arrays";

const IndexPage = () => {
    // State management for current project being displayed
    const [currProject, setCurrProject] = useState(0);
    // Hold current slide value in state
    const updateCurrentProject = (prev, next) => setCurrProject(next);

    return (
        <ThemeProvider theme={dark_theme}>
            <Layout>
                <SEO title="Home" />
                <Index.IntroSection>
                    <H1>
                        Hello,
                        <br />
                        I'm Ryan.
                    </H1>
                    <P>{intro_message}</P>
                    <SocialLinks />
                </Index.IntroSection>
                <Index.CarouselSection>
                    <H2>Projects</H2>
                    <div className="index--carousel--container">
                        <Carousel
                            wrapAround
                            className="index--carousel"
                            renderCenterLeftControls={({ previousSlide }) => (
                                <FiChevronLeft style={{ cursor: "pointer" }} onClick={previousSlide} size={24} />
                            )}
                            renderCenterRightControls={({ nextSlide }) => (
                                <FiChevronRight style={{ cursor: "pointer" }} onClick={nextSlide} size={24} />
                            )}
                            beforeSlide={updateCurrentProject}
                        >
                            {projects.map(({ image, name }, index) => (
                                <img alt={name} src={image} key={String(index)} />
                            ))}
                        </Carousel>
                        <H3>{projects[currProject].name}</H3>
                        <P className="margin--top--none">{projects[currProject].description}</P>
                        <Index.BadgeHolder>
                            {projects[currProject].skills.map(skill => (
                                <Badge key={skill}>{skill}</Badge>
                            ))}
                        </Index.BadgeHolder>
                    </div>
                    <Grid style={{ paddingLeft: 0, paddingRight: 0 }} className="index--projectgrid-container">
                        <Row style={{ marginTop: 16 }}>
                            {projects.map(({ name, description, skills, image }) => (
                                <Col md={4} style={{ marginBottom: 16 }}>
                                    <Index.ProjectImage src={image} />
                                    <H3>{name}</H3>
                                    <P>{description}</P>
                                    <Index.BadgeHolder>
                                        {skills.map(skill => (
                                            <Badge key={skill}>{skill}</Badge>
                                        ))}
                                    </Index.BadgeHolder>
                                </Col>
                            ))}
                        </Row>
                    </Grid>
                </Index.CarouselSection>
                <Index.Section>
                    <H2>Experience</H2>
                    <Index.ListContainer>
                        {experiences.map(({ title, location, duration }, index) => (
                            <ListItem key={String(index)}>
                                <H4>{title}</H4>
                                <P>{location}</P>
                                <small>{duration}</small>
                            </ListItem>
                        ))}
                    </Index.ListContainer>
                </Index.Section>
                <Index.Section>
                    <H2>Certifications</H2>
                    <Index.ListContainer>
                        {certifications.map((certification, index) => (
                            <ListItem key={String(index)}>
                                <H4>{certification}</H4>
                            </ListItem>
                        ))}
                    </Index.ListContainer>
                </Index.Section>
            </Layout>
        </ThemeProvider>
    );
};

const SocialLinks = () => (
    <Index.LinkContainer>
        <a tabIndex="0" target="_blank" href="https://github.com/ryanimpey" rel="noopener noreferrer">
            <FiGithub size={24} color={PRIMARY_COLOR} strokeWidth={1} />
        </a>
        <a tabIndex="0" target="_blank" href="mailto:ryanimpey@**NOSPAM**live.co.uk" rel="noopener noreferrer">
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

export default IndexPage;
