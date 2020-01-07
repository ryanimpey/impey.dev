import React from "react";
import styled from "styled-components";
import { PRIMARY_COLOR } from "../helpers/colors";

const badge = ({ children }) => {
    return <Badge>{children}</Badge>;
};

const Badge = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: ${PRIMARY_COLOR};
    color: white;
    font-size: 10px;
    font-weight: 700;
    border-radius: 5px;
    height: 24px;
    margin: 4px;
    padding: 0px 4px;
    min-width: 64px;
`;

export default badge;
