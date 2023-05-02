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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At saepe
            provident a distinctio. Id, sed laborum possimus nulla commodi
            aliquid accusamus veniam a. Voluptatem officiis nam doloremque nulla
            assumenda! Explicabo.
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
            <div className="image-align-top">

            </div>
          </div>
        </GridImages>
      </div>
    </BannerContainer>
  );
}
export default Banner;
