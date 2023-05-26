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
      height: 24rem;
      box-shadow: rgb(230, 230, 230) 1px 4px 19px;
    }

    .user-details {
      box-shadow: rgb(230, 230, 230) 1px 4px 19px;
      width: 100%;
      height: 24rem;
    }
  }

  .user-card-reference {
    min-width: 200px;
    width: 28%;
    box-shadow: rgb(230, 230, 230) 1px 4px 19px;
        height: 100%;

    @media (max-width: 1490px) {
      display: none;
    }
  }
`;
