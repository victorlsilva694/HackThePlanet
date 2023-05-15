import styled from "styled-components";

export const DashBoardRootPainelData = styled.div`
  width: 100%;
  padding: 1rem;
  height: 88%;
  overflow: scroll;

  .body-header-data {
    width: 100%;
    height: auto;
    display: flex;

    .travel-data {
      width: 100%;
      height: 20rem;
      margin: auto;
      display: flex;
      justify-content: space-around;

      @media (max-width: 1280px) {
        height: 48rem;
        flex-direction: column;
      }

      .values-travel {
        width: 45%;
        border: 1px solid rgb(240, 240, 240);
        border-radius: 5px;
        box-shadow: rgb(230, 230, 230) 2px 2px 17px 1px;
        height: 100%;

        @media (max-width: 1280px) {
          width: 95%;
          margin: auto;
        }

        .header-box-travel-layer {
          width: 90%;
          margin: auto;
          height: 4rem;
          border-bottom: 1px solid rgb(240, 240, 240);
          display: flex;
          justify-content: space-between;

          h1 {
            font-family: "Raleway";
            font-size: 1.2rem;
            margin: 1.5rem 0;
            color: rgb(90, 90, 110);
          }
        }
      }
    }
  }

  .travels-selected {
    width: 95%;
    border: 1px solid rgb(240, 240, 240);
    height: 25rem;
    box-shadow: rgb(230, 230, 230) 2px 2px 17px 1px;
    margin: 2rem auto;

    .header-box-travel-layer {
      width: 95%;
      margin: auto;
      height: 4rem;
      border-bottom: 1px solid rgb(240, 240, 240);
      display: flex;
      justify-content: space-between;

      h1 {
        font-family: "Raleway";
        font-size: 1.2rem;
        margin: 1.5rem 0;
        color: rgb(90, 90, 110);
      }

      .search-box-content {
        width: 40%;
        height: 70%;
        margin: auto 0;
      }
    }
  }
`;
