import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <h1>Hi there!</h1>
        <p>
            I'm still building this site, so for now all that exists is this
            page. You can find more at my <a href="https://github.com/ryanimpey" target="_blank" rel="noopener noreferrer">Github</a> until this is complete.
        </p>
    </Layout>
)

export default IndexPage
