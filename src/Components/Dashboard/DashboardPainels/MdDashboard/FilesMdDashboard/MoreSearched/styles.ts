import styled from "styled-components";

export const MoreSearchedBox = styled.div`
  width: 100%;
  height: 70%;
  margin: auto;

  table {
    width: 100%;
    thead {
      tr {
        th {
          height: 3.5rem;
          margin: auto;

          .table-header {
            width: 100%;
            display: flex;
            align-items: center;
            height: 3rem;

            h1 {
              margin: 2rem;
              font-size: 1rem;
              color: rgb(150, 150, 150);
              display: flex;
              font-family: "Raleway";
              font-weight: 500;
            }

            @media (max-width: 1690px) {
              font-size: 0.9rem;
            }

            @media (max-width: 1490px) {
              font-size: 0.8rem;
            }
          }
        }
      }
    }

    tbody {
      tr {
        td {
          width: 50%;
          height: 100%;

          .body-table {
            width: 100%;
            display: flex;
            border: 1px solid black;
            height: 2.5rem;
            justify-content: space-evenly;

            h1 {
              font-size: 1rem;
              font-family: 'Raleway';
              font-weight: 600;
            }

          }
        }
      }
    }
  }

  /*  */
`;
