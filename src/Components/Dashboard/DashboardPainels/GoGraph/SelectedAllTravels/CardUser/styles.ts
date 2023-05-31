import styled from "styled-components";

export const CardUserTravelPrice = styled.div`
  width: 100%;
  height: 4rem;

  .card-user-data-travel-cupon {
    width: 95%;
    margin: auto;
    height: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(230, 230, 230);
  }

  .title-card-user-travel {
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;

    h1 {
      font-size: 1.1rem;
      margin: 1rem;
      font-family: "Roboto";
    }
  }

  .edit-card-user-travel {
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .user-email-item-card {
    width: 95%;
    padding: 1rem;
    margin: auto;
    height: 20rem;

    h1 {
      color: rgb(60, 60, 60);
      font-family: "Roboto";
      font-size: 1.1rem;
    }
  }
`;
