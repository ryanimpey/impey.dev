import styled from "styled-components";

const defaultProps = {
    theme: {
        textColor: "#272727",
    },
};

export const H1 = styled.h1`
    color: ${props => props.theme.textColor};
    font-size: 3em;
    font-weight: 900;
    margin: 0px 0px 1rem 0px;
`;

export const H2 = styled.h2`
    color: ${props => props.theme.textColor};
    font-size: 2em;
    font-weight: 900;
    margin: 0px 0px 1rem 0px;
`;

export const H3 = styled.h3`
    color: ${props => props.theme.textColor};
    font-size: 1.5em;
    font-weight: 900;
    margin: 0px 0px 0.5rem 0px;
`;

export const H4 = styled.h4`
    color: ${props => props.theme.textColor};
    font-size: 1em;
    font-weight: 900;
    margin: 0px 0px 0.5rem 0px;
`;

export const P = styled.p`
    color: ${props => props.theme.textColor};
    line-height: 20px;
    margin: 0px 0px 0.5rem 0px;
`;

H1.defaultProps = defaultProps;
H2.defaultProps = defaultProps;
H3.defaultProps = defaultProps;
H3.defaultProps = defaultProps;
P.defaultProps = defaultProps;
