import styled from "styled-components";

export const SelectedAllTravelsBoxWrapper = styled.div`
  width: 95%;
  margin: auto;
  height: 90%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .body-items-travels-referece {
    width: 70%;
    min-width: 670px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 1490px) {
      width: 100%;
    }

    .my-travles {
      width: 100%;
      height: 95%;
      display: flex;

      .header-travels-wrapper {
        width: 100%;
        display: flex;
        justify-content: left;
        border-bottom: 1px solid rgb(230, 230, 230);
        height: 4rem;
        align-items: center;

        .buttons-data-travels {
          width: 20%;
          border: 1px solid black;
          height: 4rem;
        }

        h1 {
          font-family: "Poppins";
          font-size: 1.1rem;
        }

        .search-my-travels {
          width: 60%;
          height: 3rem;
        }
      }
    }
  }

  .user-card-reference {
    min-width: 200px;
    width: 28%;
    border: 1px solid rgb(235, 235, 235);
    border-radius: 5px;
    /* box-shadow: rgb(235, 235, 235) 1px 4px 19px; */
    height: 95%;

    @media (max-width: 1490px) {
      display: none;
    }
  }
`;
