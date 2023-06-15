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
          <h1>Prepare-se para explorar o mundo sem preocupações</h1>
          <p>
            Junte-se a nós e experimente a praticidade e a tranquilidade de uma
            plataforma de documentação de viagens feita sob medida para você.
            Estamos aqui para ajudá-lo a transformar seus sonhos de viagem em
            realidade e tornar cada experiência inesquecível.
          </p>
        </div>
      </div>
    </ContainerServicesProvider>
  );
}

export default ServicesProvided;
