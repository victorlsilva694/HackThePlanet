import styled, { keyframes } from "styled-components";
import ReactModal from "react-modal";

export const HeaderModal = styled.div`
  width: 100%;
  height: 7rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .back-page {
    padding: 1rem;
    display: flex;
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;

    h1 {
      font-family: 'Roboto';
      font-size: 1rem;
      color: rgb(120, 120, 120);
      margin: 1rem;
    }
  }

  .modal-flag {
    width: 100%;
    height: 4rem;
    padding: 1rem;  
    display: flex;
    align-items: center;

    h1 {
      font-family: 'Roboto';
      font-weight: 600;
      font-size: 1.7rem;
      color: rgb(20, 20, 20);
      margin: 1rem;
    }
  }
`;

export const DashBoardRootPainelData = styled.div`
  width: 100%;
  padding: 1rem;
  height: 88%;

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .body-header-data {
    width: 100%;
    height: auto;
    display: flex;

    .travel-data {
      width: 100%;
      height: 20rem;
      margin: auto;
      display: flex;
      justify-content: space-around;

      @media (max-width: 1280px) {
        height: 48rem;
        flex-direction: column;
      }

      .values-travel {
        width: 45%;
        border-radius: 5px;
        box-shadow: rgb(240, 240, 240) 2px 2px 17px 1px;
        height: 100%;

        @media (max-width: 1280px) {
          width: 95%;
          margin: auto;
        }

        .header-box-travel-layer {
          display: flex;
          justify-content: space-between;
          width: 90%;
          margin: auto;
          height: 4rem;
          border-bottom: 1px solid rgb(240, 240, 240);
          display: flex;
          justify-content: space-between;

          h1 {
            font-family: "Roboto";
            font-size: 1.2rem;
            margin: 1.5rem 0;
            color: rgb(90, 90, 110);
          }

          .add-new-package {
            width: 9%;
            height: 75%;
            margin: 0.5rem 0;
            border: 1px solid rgb(220, 220, 220);
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
          }

          .add-new-package:hover {
            border: none;
            transition: 0.5s;
            background-color: rgb(240, 240, 240);
          }
        }
      }
    }
  }

  .travels-selected {
    width: 95%;
    height: 25rem;
    box-shadow: rgb(240, 240, 240) 2px 2px 17px 1px;
    margin: 2rem auto;

    .header-box-travel-layer {
      width: 95%;
      margin: auto;
      height: 4rem;
      border-bottom: 1px solid rgb(240, 240, 240);
      display: flex;
      justify-content: space-between;

      h1 {
        font-family: "Roboto";
        font-size: 1.1rem;
        margin: 1.5rem 0;
        color: rgb(90, 90, 110);
      }

      .search-box-content {
        width: 50%;
        height: 70%;
        margin: auto 0;
        justify-content: space-between;
        display: flex;

        .add-new-package {
          width: 8%;
          height: 100%;
          border: 1px solid rgb(220, 220, 220);
          border-radius: 5px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        .add-new-package:hover {
          border: none;
          transition: 0.5s;
          background-color: rgb(240, 240, 240);
        }
      }
    }
    .overflow-data {
      width: 100%;
      max-height: 20rem;
      overflow-y: scroll;

      table {
        width: 90%;
        margin: auto;
  
        @media (max-width: 1490px) {
          width: 100%;
        }
  
        thead {
          tr {
            th {
              width: 200px;
              height: 3.5rem;
              margin: auto;
              .table-header {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-around;
                height: 3rem;
                display: flex;
                font-family: "Roboto";
  
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
          height: auto;
  
          tr {
            td {
              width: 200px;
              height: 3rem;
              margin: auto;
              text-align: center;
              font-family: "Roboto";
  
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
    }
  }
`;
