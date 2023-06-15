import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 2rem auto;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  margin-left: 10%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.07) 1px 4px 19px;

  @media(max-width: 1690px) {
    width: 95%;
    margin: 2rem auto;
  }
  
  .box-selected {
    width: 25%;
    margin: auto;
    height: 4rem;
    border-right: 1px solid rgb(240, 240, 240);
    display: flex;
    justify-content: center;
    align-items: center;


    .header-box {
      display: flex;
      justify-content: center;
      height: 2.5rem;
      width: 100%;
      position: relative;
      margin-top: .5rem;
      align-items: center;

      #button-explore {
        position: absolute;
        top: -.3rem;
        border: 1px solid black;
        width: 80%;
        border: none;
        height: 3rem;
        border-radius: 5px;
        background-color: #0d6efd;
        margin: auto;        
        font-family: 'Poppins';
        color: rgb(230, 230, 230);
        font-size: 1rem;
      }
      
      h1 {
        font-family: 'Poppins';
        font-size: 1.2rem;

        @media(max-width: 1690px) {
          font-size: 1rem;
        }
      }

      .icon-box {
        width: 40px;
        height: 2.5rem;
      }


    }
  }
`;
