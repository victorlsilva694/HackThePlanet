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

  .box-selected {
    width: 25%;
    margin: auto;
    height: 4rem;
    border-right: 1px solid rgb(200, 200, 200);

    .header-box {
      display: flex;
      justify-content: space-between;
      border: 1px solid rgb(200, 200, 200);
      height: 2.5rem;
      width: 95%;
      margin: auto;

      .icon-box {
      border: 1px solid rgb(200, 200, 200);
        width: 40px;
        height: 2.5rem;
      }
    }
  }
`;
