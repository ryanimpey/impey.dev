import React from "react";
import propTypes from "prop-types";
import Nav from "../../styles/components/navigationStyle";

import { FiMenu } from "react-icons/fi";

const Navigation = ({ links = [] }) => {
    return (
        <Nav.OuterContainer>
            {/* <MobileNav /> */}
            <MobileContainer />
        </Nav.OuterContainer>
    );
};

const MobileContainer = () => {
    return (
        <Nav.MobileContainer>
            <FiMenu size={36} color="#FFF" strokeWidth={2} />
        </Nav.MobileContainer>
    );
};

Navigation.propTypes = {
    links: propTypes.array,
};

export default Navigation;
