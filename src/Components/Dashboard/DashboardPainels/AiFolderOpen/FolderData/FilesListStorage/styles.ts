import styled from "styled-components";

export const FilesListDataStorageStyles = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;

  h1 {
    font-family: "Roboto";
    font-size: 1.2rem;
    margin: 1.3rem;
  }

  .table-files-layer {
    width: 100%;
    flex-direction: column;
    height: auto;
    padding: 1rem;
    display: flex;

    .table-body-files-layer {
      width: 100%;
      height: auto;
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
          font-family: "Roboto";
          color: rgb(70, 70, 70);
          font-size: 1.2rem;
          margin: 2rem 0;
        }

        p {
          font-family: "Roboto";
          font-size: 1rem;
          color: rgb(90, 90, 90);
          margin: -1rem 0;
        }
      }
    }

    .body-table-layer {
      width: 100%;
      height: 4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .checkbox-layer-table {
        width: 60px;
        height: 3.5rem;
        display: flex;
        align-items: center;
        justify-content: center;

        #checkbox-item {
          width: 20px;
          height: 20px;
        }
      }

      .name-layer-table {
        width: 25%;
        height: 3.5rem;

        .icon-name-file-table {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
        }

        h1 {
          font-size: 1rem;
          font-family: "Roboto";
        }
      }

      .size-layer-table {
        border: 1px solid;
        width: 20%;
        height: 3.5rem;
      }

      .shared-layer-table {
        border: 1px solid;
        width: 30%;
        height: 3.5rem;
      }

      .last-modified-layer-table {
        width: 20%;
        height: 3.5rem;
      }
    }

    .general-layer-table {
      width: 100%;
      height: 4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgb(235, 235, 235);

      .checkbox-layer-table {
        width: 60px;
        height: 3.5rem;
        display: flex;
        align-items: center;
        justify-content: center;

        #checkbox-item {
          width: 20px;
          height: 20px;
        }
      }

      .name-layer-table {
        width: 25%;
        height: 3.5rem;

        .icon-name-file-table {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
        }

        h1 {
          font-size: 1rem;
          font-family: "Roboto";
        }
      }

      .size-layer-table {
        border: 1px solid;
        width: 20%;
        height: 3.5rem;
      }

      .shared-layer-table {
        border: 1px solid;
        width: 30%;
        height: 3.5rem;
      }

      .last-modified-layer-table {
        border: 1px solid;
        width: 20%;
        height: 3.5rem;
      }
    }
  }
`;
