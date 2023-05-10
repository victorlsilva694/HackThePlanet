import styled, { keyframes } from "styled-components";

export const SidebarBox = styled.div`
  background-color: rgb(250, 250, 250);
  width: 20%;
  height: 100%;
  box-shadow: rgb(220, 220, 220) 4px 7px 41px 4px;

  @media (max-width: 1690px) {
    width: 25%;
  }

  @media (max-width: 1390px) {
    width: 30%;
  }

  .header-sidebar {
    width: 90%;
    height: 4rem;
    margin: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    h1 {
      margin: auto 0.8rem;
      font-family: "Roboto";
      font-size: 1.4rem;
      font-weight: 400;
    }
  }

  .box-layers-sidebar {
    width: 100%;
    height: 93%;
    display: flex;
    justify-content: space-between;

    .layer-icons-sidebar {
      width: 5rem;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      height: 100%;

      .icons-sidebar {
        width: 100%;
        cursor: pointer;
        height: 30rem;

        .add-border-right {
          border-right: 1px solid rgb(200, 200, 200);
        }

        .icon-selected {
          width: 100%;
          height: 5rem;
        }
      }

      .image-user {
        background-color: rgb(220, 220, 220);
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60%;
        margin: 1rem 1rem;
        display: flex;
        justify-content: center;
        height: 3rem;
      }
    }
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const fadeIn = keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`;

export const CampaignsSidebar = styled.div`
  width: 80%;
  height: auto;
  margin: 2rem;

  h1 {
    font-family: "Raleway";
    font-size: 1.3rem;
    color: rgb(90, 90, 90);
    font-weight: 600;
  }

  .layer-campaigns-sidebar {
    width: 100%;
    height: auto;
    margin-top: 2.3rem;

    .box-campaigns {
      display: flex;
      align-items: center;
      margin: 0 1rem;
      width: 100%;
      height: auto;
      cursor: pointer;
      padding: 0.5rem;
      position: relative;

      ::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: rgb(150, 150, 150);
        transform-origin: left;
        transform: scaleX(0);
        animation: ${fadeIn} 0.8s ease-in-out forwards,
          ${fadeOut} 0.8s linear forwards;
        animation-fill-mode: forwards;
      }
      &:hover::after {
        display: block;
      }

      p {
        text-align: center;
        font-family: "Poppins";
        font-size: 0.95rem;
        font-weight: 400;
      }
    }
  }
`;
