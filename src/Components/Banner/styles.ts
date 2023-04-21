import styled, { keyframes } from "styled-components";

export const BannerContainer = styled.div`
  width: 100%;
  max-width: 1920px;
  height: auto;
  display: flex;
  border: 1px solid black;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 980px) {
    margin: auto;
    display: flex;
    flex-direction: column;
  }

  .images-banner {
    width: 50%;
    border: 1px solid black;
    height: 40rem;

    @media (max-width: 980px) {
      width: 90%;
      margin: auto;
    }
  }

  .data-banner {
    width: 50%;
    height: 40rem;
    display: flex;
    position: relative;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .box-banner {
      width: 80%;
      height: auto;

      h1 {
        font-family: "Raleway";
        font-weight: 300;
        font-size: 2.5rem;

        span {
          font-size: 3rem;
          font-family: "Raleway";
          font-weight: 600;
          color: #0086af;
        }
      }

      p {
        font-family: "Raleway";
        width: 70%;
        font-weight: 400;
        font-size: 1rem;
      }
    }
    @media (max-width: 980px) {
      margin: auto;
      width: 90%;
    }
  }
`;
