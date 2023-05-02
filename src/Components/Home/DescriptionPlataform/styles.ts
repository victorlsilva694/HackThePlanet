import styled from "styled-components";

export const BoxDescriptionPlataform = styled.div`
  width: 90%;
  margin: auto;
  max-width: 1920px;
  height: auto;
  display: flex;
  justify-content: space-between;

  .box-images-plataform {
    width: 42%;
    height: 30rem;
    display: flex;
    justify-content: space-between;

    .image-plataform-first {
      border-radius: 10px;
      width: 49%;
      background-image: url("https://img.freepik.com/fotos-gratis/modelo-de-casa-de-ferias-chave-e-desenho-em-area-de-trabalho-retro-conceito-de-venda-de-imoveis_1387-411.jpg?w=740&t=st=1682189107~exp=1682189707~hmac=10d9e4595dd50ff2e1e5ad5a50c6af0cebafcf8b8d5b7babf4fbca732dd2f4a8");
      background-size: cover;
      height: 100%;
    }

    .image-flex-column {
      height: 30rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 49%;

      .images-data-column {
        width: 100%;
        border-radius: 5px;
        height: 48%;
      }
    }
  }
`;
