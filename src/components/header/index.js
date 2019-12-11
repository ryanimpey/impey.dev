import React from "react";
import Logo from "../logo/index.js";
import "./_header.scss";
import Navigation from "./navigation";
import { nav_links } from "../../helpers/arrays";
import { Link } from "gatsby";
import styled from "styled-components";

const Header = () => (
    <HeaderContainer>
        <Link to="/" tabIndex="0">
            <Logo />
        </Link>
        <Navigation links={nav_links} />
    </HeaderContainer>
);

const HeaderContainer = styled.header`
    padding: 18px;
    background: white;
    display: flex;
    justify-content: space-between;
`;

export default Header;
