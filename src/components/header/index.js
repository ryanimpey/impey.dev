import React from "react"
import Logo from "../logo/index.js"
import "./_header.scss"
import Navigation from "./navigation.tsx"
import { nav_links } from "../../helpers/arrays.ts"
import { Link } from "gatsby"

const Header = () => (
    <header className="site-header">
        <Link to="/">
            <Logo />
        </Link>
        <Navigation links={nav_links} />
    </header>
)

export default Header
