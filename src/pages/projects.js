import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { useStaticQuery } from "gatsby"
import { useSpring, animated } from "react-spring"
import styled from "styled-components"

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`

const ProjectsPage = () => {
    const data = useStaticQuery(imageQuery)
    const [isLeft, setLeft] = useState(false)
    const [props, set] = useSpring(() => ({
        xy: [0, 0],
        config: { mass: 10, tension: 550, friction: 140 },
    }))

    return (
        <Layout>
            <SEO title="Projects" />
            <article
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    maxWidth: 960,
                    alignSelf: "center",
                    padding: 25,
                }}
            >
                <aside style={{padding: 25, width: '100%'}}>
                    <ImgChevron
                        left={isLeft}
                        alt="Snowboarding in Breckenridge, CO"
                        fluid={data.image.childImageSharp.fluid}
                        style={{ width: "100%" }}
                    />
                </aside>
                <section style={{ maxWidth: 600, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', paddingLeft: 10  }}>
                    <h2>Title</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </section>
            </article>
            <button onClick={() => setLeft(!isLeft)}>Flip the clip</button>
        </Layout>
    )
}

const imageQuery = graphql`
    query retrieveSnowboardPicture {
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

export default ProjectsPage

const ImgChevron = styled(Img)`
    clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
    min-height: 150px;
    min-width: 150px;
    max-height: 400px;
    max-width: 400px;

    ${props =>
        props.left &&
        `clip-path: polygon(25% 0%, 100% 1%, 100% 100%, 25% 100%, 0% 50%);`}
`
