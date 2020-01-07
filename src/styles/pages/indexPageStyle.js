import styled from "styled-components";

const LinkContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 96px;
`;

const Section = styled.section`
    padding-bottom: 64px;
`;

const CarouselSection = styled(Section)`
    .slider.index--carousel {
        display: none !important;
        margin-bottom: 16px;
    }

    @media screen and (max-width: 960px) {
        .slider.index--carousel {
            display: block !important;
        }
    }
`;

const BadgeHolder = styled.div`
    margin-top: 8px;

    span {
        margin-right: 8px;
    }
`;

const ListContainer = styled.ul`
    list-style: none;
`;

export default {
    Section,
    BadgeHolder,
    LinkContainer,
    ListContainer,
    CarouselSection,
};
