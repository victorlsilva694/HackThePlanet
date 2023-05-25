import styled from "styled-components";

export const FilesListDataStorageStyles = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;

  h1 {
    font-family: "Poppins";
    font-weight: 600;
    font-size: 1.3rem;
    margin: 1.3rem;
  }

  .table-files-layer {
    width: 100%;
    height: auto;
    padding: 1rem;
    display: flex;


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
          font-family: 'Poppins';
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
