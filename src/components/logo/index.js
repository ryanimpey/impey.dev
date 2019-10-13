import React from "react"
import propTypes from "prop-types"
import { getPaddingSize } from "../../helpers"
import "./logo.scss";

const Logo = ({ padding = "small" }) => {
    let textClassName = ["logo-text", getPaddingSize(padding)].join(" ")

    return (
        <div className="logo-container">
            <span className={textClassName}>RI</span>
        </div>
    )
}

Logo.propTypes = {
    padding: propTypes.oneOf(["small", "medium", "large"]),
}

export default Logo;
