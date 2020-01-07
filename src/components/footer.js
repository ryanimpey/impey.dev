import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
        <FooterContainer>
            <span>© 2020 Ryan Impey. Built with Gatsby</span>
        </FooterContainer>
    );
};

const FooterContainer = styled.footer`
    display: flex;
    justify-content: flex-end;

    span {
        padding: 8px;
        font-weight: 500;
        font-size: 10px;
        color: white;
    }

    position: relative;
    bottom: 0px;
    width: 100%;
    background: ${props => props.theme.background};
`;

export default Footer;
