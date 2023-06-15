import HorizontalContainer from "../../Elements/ExploreMore";
import { BannerContainer, GridImages } from "./styles";

function Banner() {
  return (
    <BannerContainer>
      <div className="data-banner">
        <div className="box-banner">
          <h1>
            Bem vindo(a) ao <span>Hack the Planet!</span>
          </h1>
          <p>
            Descubra um mundo de possibilidades ao planejar suas aventuras com
            facilidade e organização. Nossa plataforma foi projetada para tornar
            o processo de documentação de viagens simples e eficiente,
            permitindo que você aproveite ao máximo cada momento de suas
            jornadas.
          </p>
        </div>
        <HorizontalContainer />
      </div>
      <div className="images-banner">
        <GridImages>
          <div className="grid-images">
            <div className="box-images-duplicate">
              <div className="box-first-image"></div>
              <div className="box-second-image"></div>
            </div>
            <div className="image-align-top"></div>
          </div>
        </GridImages>
      </div>
    </BannerContainer>
  );
}
export default Banner;
