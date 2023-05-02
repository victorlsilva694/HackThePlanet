import styled from "styled-components";

export const BoxCardDataContent = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .header-data-content {
    width: 80%;
    height: auto;
    margin: 2rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
      font-family: "Raleway";
      font-weight: 600;
      color: rgb(80, 80, 80);
      text-align: center;
      font-size: 2.2rem;
    }

    p {
      font-family: "Poppins";
      width: 80%;
      text-align: center;
      font-size: 1.2rem;
      margin-top: 1rem;
    }
  }

  .box-content-data {
    width: 95%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    .cards-flex-data-wrapper {
      width: 80%;
      height: auto;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;

      @media (max-width: 1280px) {
        justify-content: center;
        align-items: center;
      }

      .card-plataform-benefits {
        width: 380px;
        padding: 1rem;
        margin: 2rem;
        min-width: 220px;
        box-shadow: rgb(220, 220, 220) 1px 4px 19px;
        height: 32rem;

        @media (max-width: 1690px) {
          width: 320px;
        }

        h1 {
          font-family: "Poppins";
          text-align: center;
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 2rem;
        }

        p {
          font-family: "Poppins";
          text-align: center;
          font-size: 1rem;
        }

        .image-box-wrapper {
          width: 100%;
          height: 18rem;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            width: 70%;
            margin: auto;
          }
        }
      }
    }
  }
`;
