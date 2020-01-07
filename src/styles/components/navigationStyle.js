import styled from "styled-components";

const OuterContainer = styled.nav`
    div {
        display: none;
    }

    h2 {
        display: initial;
    }

    @media screen and (max-width: 960px) {
        h2 {
            display: none;
        }

        div {
            display: flex;
        }
    }
`;

const MobileContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
    }
`;
const DesktopContainer = styled.ul``;

export default {
    OuterContainer,
    MobileContainer,
    DesktopContainer,
};
