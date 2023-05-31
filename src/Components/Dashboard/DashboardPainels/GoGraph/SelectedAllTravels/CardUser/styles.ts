import styled from "styled-components";

export const CardUserTravelPrice = styled.div`
  width: 100%;
  height: 4rem;

  .card-user-data-travel-cupon {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  .title-card-user-travel {
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;

    h1 {
      font-size: 1rem;
      margin: 1rem;
      font-family: "Poppins";
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
    margin: auto;
    height: 4.5rem;
    border-radius: 5px;
    background-color: rgb(250, 250, 250);

    .user-image {
      width: 4rem;
      position: relative;
      top: .2rem;
      border-radius: 4rem;
      background-color: rgb(230, 230, 230);
      margin: 1rem;
      height: 4rem;
    }
  }
`;
