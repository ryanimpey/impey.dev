import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
    <Layout>
        <Seo title="404: Not found" />
        <section style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <h1>404 - Not Found</h1>
            <p>This page is either under developement or doesn't exist, sorry about that.</p>
            <Link to="/">Home</Link>
        </section>
    </Layout>
)

export default NotFoundPage
