import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/pages/_index.scss"

import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi"

const IndexPage = () => {
    const data = useStaticQuery(imageQuery)
    console.log(data)

    return (
        <Layout>
            <SEO title="Home" />
            <main className="index-page">
                <section>
                    <h1>Hi there!</h1>
                    <div className="text-wrapper">
                        <p>
                            I'm sorry, but this site is still a work in
                            progress. If you'd like to find out more or contact
                            me you can use the links below.
                        </p>
                    </div>
                    <IndexSocialLinks />
                </section>
                <section className="image-wrapper">
                    <Img alt="Snowboarding in Breckenridge, CO" style={{borderTopLeftRadius: 15, borderBottomLeftRadius: 15}} fluid={data.image.childImageSharp.fluid} />
                </section>
            </main>
        </Layout>
    )
}

const IndexSocialLinks = () => (
    <div className="social-wrapper">
        <a
            tabIndex="0"
            target="_blank"
            href="https://github.com/ryanimpey"
            rel="noopener noreferrer"
        >
            <FiGithub size={24} color="#21A0CC" />
        </a>
        <a
            tabIndex="0"
            target="_blank"
            href="https://www.linkedin.com/in/ryan-impey-259a7874/"
            rel="noopener noreferrer"
        >
            <FiLinkedin size={24} color="#21A0CC" />
        </a>
        <a
            tabIndex="0"
            target="_blank"
            href="mailto:ryanimpey@**NOSPAM**live.co.uk"
            rel="noopener noreferrer"
        >
            <FiMail size={24} color="#21A0CC" />
        </a>
    </div>
)

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
`

export default IndexPage
