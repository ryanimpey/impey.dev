import React, { useContext } from "react";
import propTypes from "prop-types";
import { getPaddingSize } from "../helpers";
import styled, { ThemeContext } from "styled-components";

const Logo = ({ padding = "small" }) => (
    <LogoContainer padding={padding}>
        <span>RI</span>
    </LogoContainer>
);

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
        color: ${props => props.theme.textColor};
        border: 5px solid white;
        padding: ${props => getPaddingSize(props.padding)};

        &:hover {
            color: ${props => props.theme.textColorAlt};
        }
    }

    &:hover {
        background: ${props => props.theme.backgroundAlt};
    }
`;

Logo.propTypes = {
    padding: propTypes.oneOf(["small", "medium", "large"]),
};

export default Logo;
