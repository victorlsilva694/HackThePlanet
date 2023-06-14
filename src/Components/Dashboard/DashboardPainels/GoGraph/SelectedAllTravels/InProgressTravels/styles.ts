import styled from "styled-components";

export const InProgressTravelsTableWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  border-radius: 10px;
  margin-top: 1rem;

  .empty-data-travel {
    width: 100%;
    margin: 1rem auto;
    height: 40vh;
    border: 1px solid rgb(230, 230, 230);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      font-family: 'Roboto';
      color: rgb(70, 70, 70);
      font-size: 1.2rem;
      margin: 2rem 0;
    }

    p {
      font-family: 'Roboto';
      font-size: 1rem;
      color: rgb(90, 90, 90);
      margin: -1rem 0;
      
    }
  }

  .table-header-travels-layer {
    border-radius: 3px;
    width: 100%;
    border-radius: 5px;
    background-color: rgb(250, 250, 250);
    height: 3.5rem;
    display: flex;

    .col-xs-2 {
      width: 10%;
      font-family: "Poppins";
      font-weight: 600;
      font-size: 0.9rem;
      display: flex;
      color: rgb(80,80,80);
      justify-content: center;
      align-items: center;
      height: 100%;
    }

    .col-xs-6 {
      width: 50%;
      display: flex;
      color: rgb(80,80,80);
      font-family: "Poppins";
      padding: 1rem;
      font-weight: 600;
      font-size: 0.9rem;
      justify-content: left;
      align-items: center;
      height: 100%;
    }

    .col-xs-4 {
      font-weight: 600;
      width: 30%;
      font-family: "Poppins";
      color: rgb(80,80,80);
      padding: 1rem;
      height: 100%;
      font-size: 0.9rem;
      display: flex;
      justify-content: left;
      align-items: center;
    }

    .col-xs-5 {
      padding: 1rem;
      font-family: "Poppins";
      width: 20%;
      font-weight: 600;
      color: rgb(80,80,80);
      display: flex;
      justify-content: center;
      font-size: 0.9rem;
      align-items: center;
      height: 100%;
    }
  }

  .table-data-travels-layer {
    border-bottom: 1px solid rgb(245, 245, 245);
    border-radius: 3px;
    width: 100%;
    height: 3.5rem;
    display: flex;

    .col-xs-2 {
      width: 10%;
      font-family: "Poppins";
      font-size: 0.9rem;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }

    .col-xs-6 {
      width: 50%;
      display: flex;
      font-family: "Poppins";
      padding: 1rem;
      font-size: 0.9rem;
      justify-content: left;
      align-items: center;
      height: 100%;
    }

    .col-xs-4 {
      width: 30%;
      font-family: "Poppins";
      padding: 1rem;
      height: 100%;
      font-size: 0.9rem;
      display: flex;
      justify-content: left;
      align-items: center;
    }

    .col-xs-5 {
      font-family: "Poppins";
      width: 20%;
      display: flex;
      justify-content: center;
      font-size: 0.9rem;
      align-items: center;
      height: 100%;
    }
  }
`;
