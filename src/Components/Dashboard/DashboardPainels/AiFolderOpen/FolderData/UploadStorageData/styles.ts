import styled from "styled-components";

export const UploadStorageContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;

  .upload-document {
    width: 100%;
    height: 25rem;
    border: dashed 2px rgb(220, 220, 220);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 22px;
    border-radius: 5px;
    margin: 2rem 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .radius-upload-button {
      width: 80px;
      border-radius: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80px;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 16px;
    }

    h1 {
      font-size: 1rem;
      text-align: center;
      width: 85%;
      margin: 1.5rem auto;
      font-family: "Roboto";
    }

    p {
      font-size: 0.8rem;
      font-family: "Roboto";
    }
  }

  .link-upload {
    display: flex;  
      flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    height: auto;
  }
`;
