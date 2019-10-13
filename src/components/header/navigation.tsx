import React from "react"
import propTypes from "prop-types"
import { navigation_links_interface } from "../../helpers/arrays"
import { Link } from "gatsby"

const Navigation = ({ links = [] }) => {
    return (
        <nav>
            {links.map((item: navigation_links_interface) => (
                <Link to={item.link}>{item.name}</Link>
            ))}
        </nav>
    )
}

Navigation.propTypes = {
    links: propTypes.array,
}

export default Navigation
