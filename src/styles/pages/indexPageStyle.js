import styled from "styled-components";

const LinkContainer = styled.div`
    padding-top: 16px;
    display: flex;
    justify-content: space-between;
    width: 64px;
`;

const Section = styled.section`
    padding-bottom: 64px;
`;

const IntroSection = styled(Section)`
    p {
        max-width: 476px;
    }
`;

const CarouselSection = styled(Section)`
    .index--carousel--container {
        display: none !important;
    }

    .slider.index--carousel {
        margin-bottom: 16px;
    }

    @media screen and (max-width: 960px) {
        .index--carousel--container {
            display: block !important;
        }

        .index--projectgrid-container {
            display: none !important;
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

const ProjectImage = styled.img`
    box-shadow: 0px 5px 5px #222;
    width: 100%;
    height: auto;
    margin-bottom: 16px;
`;

export default {
    Section,
    BadgeHolder,
    IntroSection,
    ProjectImage,
    LinkContainer,
    ListContainer,
    CarouselSection,
};
