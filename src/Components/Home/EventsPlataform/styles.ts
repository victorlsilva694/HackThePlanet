import styled from "styled-components";

export const ContainerPlataformsData = styled.div`
    width: 90%;
    max-width: 1920px;
    height: auto;
    padding: 1rem; 
    margin: 2rem auto;

    .header-events-plataform {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;

        h1 {
            font-size: 2rem;
            font-family: 'Raleway';
            font-weight: 600;
            color: rgb(80, 80, 80);
        }

        p {
            font-family: 'Raleway';
            width: 40%;
            font-size: 1.1rem;
        }
    }

    .block-plataforms-construction {
        height: auto;
        width: 100%;
        display: flex;
        margin: 2rem auto;
        justify-content: center;
        flex-wrap: wrap;

        .box-construction {
            width: 28%;
            box-shadow: rgb(190, 190, 190) 1px 4px 19px;
            min-width: 350px;
            height: 21rem;
            margin: 1rem;
            border-radius: 5px;
        }
    }
`;