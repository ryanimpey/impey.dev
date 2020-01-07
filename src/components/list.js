import React from "react";
import styled from "styled-components";
import { PRIMARY_COLOR } from "../helpers/colors";

const ListItem = styled.li`
    padding-bottom: 24px;

    h4 {
        margin-bottom: 4px;
    }

    p {
        margin-bottom: 0px;
    }

    small {
        color: white;
        font-size: 10px;
    }

    ::before {
        left: 0px;
        width: 12px;
        color: blue;
        content: "";
        height: 12px;
        margin-left: 22px;
        margin-top: 1px;
        position: absolute;
        border-radius: 4px;
        border: 3px solid ${PRIMARY_COLOR};
    }
`;

export default ListItem;
