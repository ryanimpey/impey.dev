import React from "react";
import Logo from "../logo";
import Navigation from "./navigation";
import { nav_links } from "../../helpers/arrays";
import { Link } from "gatsby";
import styled from "styled-components";

const Header = props => (
    <HeaderContainer>
        <Link to="/" tabIndex="0">
            <Logo />
        </Link>
        <Navigation links={nav_links} />
    </HeaderContainer>
);

const HeaderContainer = styled.header`
    padding: 18px 22px;
    display: flex;
    justify-content: space-between;
    background: ${props => props.theme.background};
`;

HeaderContainer.defaultProps = {
    theme: {
        background: "black",
    },
};

export default Header;
