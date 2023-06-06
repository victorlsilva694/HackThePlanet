import styled from "styled-components";

export const OverviewStorageDataWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 2.5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 1490px) {
    justify-content: center;
  }
`;

export const CardStorageData = styled.div`
  width: 24%;
  min-width: 250px;
  height: 12rem;
  background-color: rgb(250, 250, 250);
  border-radius: 5px;
  border: 1px solid rgb(240, 240, 240);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 20px;

  @media (max-width: 1490px) {
    min-width: 250px;
    width: 20%;
    height: 13rem;
    margin: 1rem;
  }

  @media (max-width: 1280px) {
    min-width: 100px;
    width: 250px;
    height: 15rem;
    margin: 1rem;
  }

  .data-storage-layer {
    width: 100%;
    display: flex;
    align-items: center;
    height: 7rem;
    padding: 1rem;

    .icon-storage-data {
      width: 70px;
      border-radius: 6px;
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .text-storage-data {
      width: 200px;
      height: 70px;
      margin: auto;
      align-items: center;
      flex-direction: column;

      h1 {
        text-align: left;
        margin: 8px;
        font-size: 1.2rem;
        font-family: "Roboto";
      }

      p {
        margin: 0 0.5rem;
        font-size: .9rem;
        font-family: "Roboto";
      }
    }
  }

  .storage-nivel-layer {
    width: 100%;
    height: 5rem;
    padding: 1rem;

    .bar-load-storage {
      width: 95%;
      margin: auto;
      border-radius: 10px;
      height: 10px;
      background-color: rgb(230, 230, 230);
    }

    p {
      margin: .5rem 0.5rem;
      font-size: .9rem;
      font-family: "Roboto";
    }   
  }
`;
