import styled from "styled-components";

export const Container = styled.main`
    max-width: 1200px;
    margin: 0 auto;
`;

export const ThemeContainer = styled.main`
    background: ${props => props.theme.background};
    transition: background 0.2s ease-in-out;

`;
