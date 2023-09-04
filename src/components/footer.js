import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
        <FooterContainer>
            <div>
                <span>© {new Date().getFullYear()} Ryan Impey. Built with Gatsby</span>
            </div>
        </FooterContainer>
    );
};

const FooterContainer = styled.footer`
    display: flex;
    justify-content: flex-end;
    min-height: 50px;

    div {
        max-width: 1200px;
        margin: 0 auto;
        width: 100%;
        padding: 16px;

        span {
            padding: 8px;
            font-weight: 500;
            font-size: 10px;
            color: white;
            text-align: left;
        }
    }

    position: relative;
    bottom: 0px;
    width: 100%;
    background: ${props => props.theme.background};
    transition: background 0.2s ease-in-out;
`;

export default Footer;
