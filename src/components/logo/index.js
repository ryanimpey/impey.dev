import React from "react"
import propTypes from "prop-types"
import { getPaddingSize } from "../../helpers"
import "./logo.scss"
import styled from "styled-components"

const Logo = ({ padding = "small" }) => {
    let textClassName = ["logo-text", getPaddingSize(padding)].join(" ")

    return (
        <LogoContainer>
            <span className={textClassName}>RI</span>
        </LogoContainer>
    )
}

const LogoContainer = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    transition: all 0.25s ease-in-out;

    .logo-text {
        height: inherit;
        width: inherit;
        font-size: 32px;
        line-height: 32px;
        font-family: "Raleway";
        font-weight: 900;
        color: #474747;
        border: 5px solid #474747;

        &:hover {
            color: white;
        }
    }

    &:hover {
        background: #474747;
    }
`

Logo.propTypes = {
    padding: propTypes.oneOf(["small", "medium", "large"]),
}

export default Logo
