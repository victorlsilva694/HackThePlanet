import styled from "styled-components";

export const ContainerServicesProvider = styled.div`
  width: 100%;
  height: auto;
  max-width: 1920px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;

  .box-services {
    width: 48%;
    height: 40rem;
    display: flex;
    justify-content: center;
    padding: 1rem;
    flex-direction: column;
    align-items: center;        
    border-radius: 20px;

    .box-description {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h1 {
        font-family: 'Raleway';
        font-size: 2.5rem;
        width: 90%;
      }
  
      p {
        font-family: 'Poppins';
        font-size: 1rem;
        margin: 2rem 0;
        width: 90%;
      }
  
      #button-more-info {
        box-shadow: rgb(210, 210, 210) 1px 4px 19px;
        border-radius: 4px;
        width: 28rem;
        height: 4rem;
        border: 1px solid rgb(230, 230, 230);
      }
    }

  }
`;
