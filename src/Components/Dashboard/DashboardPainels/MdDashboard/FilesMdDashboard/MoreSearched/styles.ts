import styled from "styled-components";

export const MoreSearchedBox = styled.div`
  width: 100%;
  height: 70%;
  margin: auto;

  .header-data-packages {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 3rem;

    .table-header {
      width: 50%;
      display: flex;
      align-items: center;

      h1 {
        margin: 2rem;
        font-size: 1rem;
        color: rgb(60, 60, 60);
        display: flex;
        font-family: "Roboto";
      }

      @media (max-width: 1690px) {
        font-size: 0.9rem;
      }

      @media (max-width: 1490px) {
        font-size: 0.8rem;
      }
    }
  }

  .table-data {
    width: 100%;
    display: flex;
    height: 90%;

    .left-cells-table {
      width: 50%;
      height: 90%;

      .cell-table {
        width: 100%;
        display: flex;
        justify-content: start;
        padding: 1rem;
        height: 2.8rem;

        h1 {
          font-size: 0.9rem;
          color: rgb(80, 80, 80);
          font-family: "Roboto";
          margin: -0.2rem 2rem;
        }
      }
    }

    .right-cells-table {
      width: 50%;
      height: 90%;

      .cell-table {
        width: 100%;
        display: flex;
        justify-content: start;
        padding: 1rem;
        height: 2.8rem;

        h1 {
          font-size: 0.9rem;
          color: rgb(80, 80, 80);
          font-family: "Roboto";
          margin: -0.2rem 0rem;
        }
      }
    }
  }
`;
