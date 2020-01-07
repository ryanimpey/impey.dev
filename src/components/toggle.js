import React from "react";
import styled from "styled-components";

const Toggle = ({ children, onClick }) => <ToggleContainer onClick={onClick}>{children}</ToggleContainer>;

const ToggleContainer = styled.button`
    position: fixed;
    bottom: 0px;
    right: 0px;
    margin: 24px;
    transition: all 0.25s ease-in-out;
    background: none;
    height: 48px;
    width: 48px;
    color: ${props => props.theme.logoColor};
    border: ${props => `5px solid ${props.theme.logoColor}`};
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        color: ${props => props.theme.textColorAlt};
    }

    &:hover {
        background: ${props => props.theme.logoColor};
    }
`;

export default Toggle;
