import React from "react";
import propTypes from "prop-types";
import { navigation_links_interface } from "../../helpers/arrays";
import { Link } from "gatsby";
import styled from "styled-components";

const Navigation = ({ links = [] }) => {
    return (
        <nav>
            <NavigationContainer>
                {links.map(item => (
                    <NavLi key={item.name}>
                        <Link to={item.link}>{item.name}</Link>
                    </NavLi>
                ))}
            </NavigationContainer>
        </nav>
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
            text-decoration-color: #21A0CC;
        }
    }
`;

Navigation.propTypes = {
    links: propTypes.array,
};

export default Navigation;
