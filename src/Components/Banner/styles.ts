import styled, { keyframes } from "styled-components";

export const BannerContainer = styled.div`
  width: 100%;
  max-width: 1920px;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;

  @media (max-width: 980px) {
    margin: auto;
    display: flex;
    flex-direction: column;
  }

  .images-banner {
    width: 50%;
    height: auto;

    @media (max-width: 1280px) {
      display: none;
    }
  }

  .data-banner {
    width: 50%;
    height: auto;
    display: flex;
    position: relative;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1280px) {
      width: 80%;
      margin: auto;
    }

    .box-banner {
      width: 80%;
      height: auto;
      margin: 2rem auto;

      h1 {
        font-family: "Raleway";
        font-weight: 300;

        font-size: 2.5rem;

        span {
          font-size: 3rem;
          font-family: "Raleway";
          font-weight: 600;
          color: #0086af;
        }
      }

      p {
        font-family: "Raleway";
        width: 70%;
        font-weight: 400;
        font-size: 1rem;
      }
    }
    @media (max-width: 980px) {
      margin: auto;
      width: 90%;
    }
  }
`;

export const GridImages = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .grid-images {
    width: 40rem;
    height: 35rem;
    display: flex;
    justify-content: space-between;

    .box-images-duplicate {
      height: 35rem;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      width: 20rem;

      .box-first-image {
        width: 80%;
        box-shadow: rgb(80, 80, 80) 1px 4px 19px;
        margin: auto;
        background-image: url("https://img.freepik.com/fotos-gratis/bela-vista-da-natureza-hipnotizante-nos-jardins-japoneses-de-adelaide-himeji-de-estilo-tradicional_181624-46195.jpg?w=740&t=st=1682099845~exp=1682100445~hmac=1803557830bd4efca0da30236a78ff542d8ce564a3fbc2ea26e75c59f6b67420");
        background-color: rgb(220, 220, 220);
        background-size: cover;
        border-radius: 8px;
        height: 20rem;
      }

      .box-second-image {
        border-radius: 8px;
        box-shadow: rgb(80, 80, 80) 1px 4px 19px;
        background-image: url("https://img.freepik.com/fotos-gratis/reflexo-das-luzes-e-da-montanha-em-um-lago-capturado-em-parco-ciani-lugano-suica_181624-24209.jpg?w=1380&t=st=1682099974~exp=1682100574~hmac=7fefe5b88ff26c0de69cd888b4209bb3951e0fd48884272503350c96cfe743a5");
        background-size: cover;
        width: 100%;
        margin-top: 2rem;
        background-color: rgb(220, 220, 220);
        height: 18rem;
      }
    }

    .image-align-top {
      background-color: rgb(220, 220, 220);
      border-radius: 8px;
      background-image: url("https://img.freepik.com/fotos-gratis/cenario-escuro-de-trilha-na-floresta-com-tabuas-de-madeira_181624-34996.jpg?w=740&t=st=1682100009~exp=1682100609~hmac=faac40484fe34a7a35ed4905799635c2bf6d9ce916c17430dd8083faa48f9566");
      background-size: cover;
      box-shadow: rgb(80, 80, 80) 1px 4px 19px;
      width: 47%;
      height: 30rem;
      margin-top: 5rem;
    }
  }
`;
