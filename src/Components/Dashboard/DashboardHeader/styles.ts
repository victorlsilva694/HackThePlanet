import styled from "styled-components";

export const HeaderDashboardContainer = styled.div`
  width: 100%;
  height: 7rem;
  padding: 1rem;

  .content-data-dashboard {
    width: 100%;
    height: 100%;

    .layer-title-dashboard {
      display: flex;
      justify-content: space-between;
      width: 95%;
      height: 3rem;
      margin: 1rem auto;
      align-items: center;

      h1 {
        font-size: 1.5rem;

        @media (max-width: 1680px) {
          font-size: 1rem;
        }
      }

      .layer-buttons-header {
        width: 30%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 1680px) {
          width: 50%;
        }

        .date-layer {
          width: 85%;
          border: 1px solid rgb(220, 220, 220);
          border-radius: 5px;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          h1 {
            font-family: "Raleway";
            font-size: 1rem;
            margin-top: 0.5rem;
            color: rgb(160, 160, 160);

            @media (max-width: 1280px) {
              font-size: 1rem;
            }
          }
        }

        .more-info-layer {
          width: 10%;
          height: 100%;
          background-color: #165849;
          border-radius: 5px;
        }
      }
    }
  }
`;
