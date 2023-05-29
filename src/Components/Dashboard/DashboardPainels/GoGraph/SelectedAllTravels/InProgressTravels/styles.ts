import styled from "styled-components";

export const InProgressTravelsTableWrapper = styled.div`
  width: 100%;
  height: 45rem;
  padding: 1rem;
  border-radius: 10px;
  margin-top: 1rem;
  box-shadow: rgb(245, 245, 245) 1px 4px 19px;

  .table-header-travels-layer {
    border-radius: 3px;
    background-color: rgb(250, 250, 250);
    width: 100%;
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
