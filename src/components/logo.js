import React from "react";
import propTypes from "prop-types";
import { getPaddingSize } from "../helpers";
import styled from "styled-components";

const Logo = ({ padding = "small", children }) => <LogoContainer padding={padding}>{children}</LogoContainer>;

const LogoContainer = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    transition: all 0.25s ease-in-out;

    span {
        height: inherit;
        width: inherit;
        font-size: 32px;
        line-height: 32px;
        font-family: "Raleway";
        font-weight: 900;
        color: ${props => props.theme.logoColor};
        border: ${props => `5px solid ${props.theme.logoColor}`};
        padding: ${props => getPaddingSize(props.padding)};
        text-decoration: none;

        &:hover {
            color: ${props => props.theme.textColorAlt};
        }
    }

    &:hover {
        background: ${props => props.theme.logoColor};
    }
`;

Logo.propTypes = {
    padding: propTypes.oneOf(["small", "medium", "large"]),
};

export default Logo;
