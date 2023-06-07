import styled from "styled-components";

export const FolderDataDocument = styled.div`
  width: 100%;
  height: 89%;

  @media (max-width: 1280px) {
    overflow-y: scroll;
    overflow-x: hidden;
  }
`;

export const HeaderButtons = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;

  .overview-title-data-layer {
    width: 25%;
    padding: 0.4rem;
    min-width: 230px;
    display: flex;
    justify-content: space-around;
    height: 100%;
    align-items: center;

    @media (max-width: 1690px) {
      width: 30%;
    }

    .overview-title-data {
      width: 50px;
      height: 3.5rem;
    }

    h1 {
      font-family: "Roboto";
      font-size: 1.1rem;
    }
  }

  .overview-buttons-data-layer {
    width: auto;
    display: flex;
    justify-content: space-evenly;
    height: 4.3rem;

    #buttons-regular {
      margin: 0.5rem;
      width: 140px;
      background-color: transparent;
      border: 1px solid rgb(235, 235, 235);
      border-radius: 3px;
      height: 3.2rem;
      box-shadow: rgba(0, 0, 0, 0.1) 5px 8px 12px;
      display: flex;
      justify-content: space-evenly;
      padding: 0.9rem;

      span {
        font-family: "Roboto";
        font-size: 1rem;
        margin: -0.1rem;
      }
    }

    #buttons-add {
      margin: 0.5rem;
      width: 250px;
      border: 1px solid rgb(225, 225, 225);
      border-radius: 3px;
      box-shadow: rgba(0, 0, 0, 0.2) 5px 3px 16px;
      background-color: #165849;
      height: 3.2rem;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      span {
        font-family: "Roboto";
        font-size: 1.06rem;
        color: rgb(230, 230, 230);
        margin: -0.1rem;
      }
    }
  }
`;