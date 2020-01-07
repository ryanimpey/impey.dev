import React from "react";
import propTypes from "prop-types";
import { navigation_links_interface } from "../../helpers/arrays";
import { Link } from "gatsby";
import styled from "styled-components";
import Nav from "../../styles/components/navigationStyle";

import { FiMenu } from "react-icons/fi";

const Navigation = ({ links = [] }) => {
    return (
        <Nav.OuterContainer>
            {/* <MobileNav /> */}
            <MobileContainer />
            <h2>Big</h2>
            {/* <NavigationContainer>
                {links.map(item => (
                    <NavLi key={item.name}>
                        <Link to={item.link}>{item.name}</Link>
                    </NavLi>
                ))}
            </NavigationContainer> */}
        </Nav.OuterContainer>
    );
};

const MobileContainer = ({}) => {
    return (
        <Nav.MobileContainer>
            <FiMenu size={36} color="#FFF" strokeWidth={2} />
        </Nav.MobileContainer>
    );
};

const NavigationContainer = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0px;
    height: 100%;
`;

const NavLi = styled.li`
    text-decoration: none;
    list-style: none;
    margin-bottom: 0px;

    a {
        font-family: "Raleway", sans-serif;
        color: #474747;
        text-decoration: none;
        padding: 0px 24px;

        &:hover {
            text-decoration: underline;
            text-decoration-color: #21a0cc;
        }
    }
`;

Navigation.propTypes = {
    links: propTypes.array,
};

export default Navigation;
