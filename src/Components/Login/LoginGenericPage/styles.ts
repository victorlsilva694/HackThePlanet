import styled from "styled-components";

export const RootContainerPage = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 100vh;

  .login-col-boxform {
    width: 40%;
    height: 100%;
    border-right: 1px solid rgb(210, 210, 210);

    @media (max-width: 1280px) {
      width: 100%;
    }

    .header-login-form {
      display: flex;
      padding: 2rem;
      width: 100%;
      height: 4rem;

      h1 {
        margin: -0.3rem 2rem;
        font-family: "Roboto";
        font-size: 1.5rem;
        font-weight: 400;
      }
    }

    .box-form {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80%;
      
      .box-central {
        width: 60%;
        height: 25rem;
      }
    }
  }

  .carousel-col-boxform {
    width: 60%;
    height: 100%;
    background-color: rgb(247, 247, 255);
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 980px) {
      display: none;
    }

    img {
      width: 65%;
    }
  }
`;
