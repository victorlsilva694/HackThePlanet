import HorizontalContainer from "../../Elements/ExploreMore";
import { BannerContainer } from "./styles";

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
      <div className="images-banner"></div>
    </BannerContainer>
  );
}
export default Banner;
