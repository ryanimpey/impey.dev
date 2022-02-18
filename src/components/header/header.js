import React from "react";
import Logo from "../logo";
import { Link } from "gatsby";
import styled from "styled-components";

const Header = props => (
    <HeaderThemeContainer>
        <HeaderContainer>
            <Link style={{textDecoration: 'none'}} to="/" tabIndex="0">
                <Logo>
                    <span>RI</span>
                </Logo>
            </Link>
        </HeaderContainer>
    </HeaderThemeContainer>
);

const HeaderContainer = styled.nav`
    padding: 18px 22px;
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
`;

const HeaderThemeContainer = styled.header`
    background: ${props => props.theme.background};
    transition: background 0.2s ease-in-out;
`;

HeaderContainer.defaultProps = {
    theme: {
        background: "black",
    },
};

export default Header;
