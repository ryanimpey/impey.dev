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
    }

    @media screen and (max-width: 960px) {
        .slider.index--carousel {
            display: block !important;
        }
    }
`;

export default {
    Section,
    LinkContainer,
    CarouselSection,
};
