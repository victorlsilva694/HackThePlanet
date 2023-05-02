import styled from "styled-components";

export const ContainerListContent = styled.div`
    width: 100%;
    height: auto;
    padding: 1rem;
    margin: auto;

    h1 {
        font-size: 2rem;
        margin: 2rem;
        font-weight: 400;
        margin-left: 4rem;
        font-family: 'Raleway';
    }

    .cards-hotels {
        display: flex;
        justify-content: space-between;
        padding: 2rem;
        flex-wrap: wrap;
        width: 95%;
        height: auto;
        margin: auto;

        @media(max-width: 980px) {
            margin: 2rem auto;
        }
    }
`;