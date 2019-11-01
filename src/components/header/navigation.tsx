import React from "react"
import propTypes from "prop-types"
import { navigation_links_interface } from "../../helpers/arrays"
import { Link } from "gatsby"

const Navigation = ({ links = [] }) => {
    return (
        <nav>
            <ul className="navigation-container">
                {links.map((item: navigation_links_interface) => (
                    <li key={item.name}>
                        <Link to={item.link}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

Navigation.propTypes = {
    links: propTypes.array,
}

export default Navigation
