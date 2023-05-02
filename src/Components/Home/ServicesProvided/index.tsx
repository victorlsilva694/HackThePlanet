import { ContainerServicesProvider } from "./styles";
import imageServicesProvided from "./images/5411457.png";

function ServicesProvided() {
  return (
    <ContainerServicesProvider>
      <div className="box-services">
        <img src={imageServicesProvided} alt="" />
      </div>
      <div className="box-services">
        <div className="box-description">
          <h1>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
            consequuntur et optio voluptas quod eveniet dicta quibusdam
            praesentium molestias a totam architecto perspiciatis ratione pariatur
            ad, illum incidunt consectetur! Impedit?
          </p>

          <button id="button-more-info"></button>
        </div>
      </div>
    </ContainerServicesProvider>
  );
}

export default ServicesProvided;
