import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 2rem auto;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  margin-left: 10%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 4px 19px;
  border: 1px solid rgb(230, 230, 230);

  @media(max-width: 1690px) {
    width: 95%;
    margin: 2rem auto;
  }
  
  .box-selected {
    width: 25%;
    margin: auto;
    height: 4rem;
    border-right: 1px solid rgb(200, 200, 200);
    display: flex;


    .header-box {
      display: flex;
      justify-content: flex-start;
      height: 2.5rem;
      width: 100%;

      #button-explore {
        width: 80%;
        border: none;
        height: 3.5rem;
        border-radius: 10px;
        background-color: #0d6efd;
        margin: auto;        
        font-family: 'Poppins';
        color: rgb(230, 230, 230);
        font-size: 1rem;
      }
      
      h1 {
        font-family: 'Poppins';
        font-size: 1.2rem;
        margin: 1.1rem 0;

        @media(max-width: 1690px) {
          font-size: 1rem;
        }
      }

      .icon-box {
        margin: 1rem .8rem;
        width: 40px;
        height: 2.5rem;
      }


    }
  }
`;
