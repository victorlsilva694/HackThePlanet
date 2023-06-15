import { BoxCardDataContent } from "./styles";
import imageRunner from "./images/1291215.png";
import imageDashboard from "./images/3528473.png";
import imageCertificate from "./images/5995357.png";

interface IPlatformBenefits {
  id: Number;
  name: String;
  image: String;
  title: String;
  dataInformation: String;
}

function CardDataContent() {
  const platformBenefits: IPlatformBenefits[] = [
    {
      id: 1,
      name: "",
      image: imageRunner,
      title: "Simplificando suas Viagens",
      dataInformation:
        " Digitalize e armazene seus documentos de viagem, crie itinerários personalizados e acompanhe seus gastos em tempo real.",
    },
    {
      id: 1,
      name: "",
      image: imageDashboard,
      title: " Suas Perguntas Respondidas",
      dataInformation:
        "Nossa seção de FAQ abrangente fornece respostas para as perguntas mais comuns relacionadas à nossa aplicação de gerenciamento de viagens. ",
    },
    {
      id: 1,
      name: "",
      image: imageCertificate,
      title: "Conectando você a uma Viagem Perfeita",
      dataInformation:
        "Nossa aplicação de gerenciamento de viagens integra recursos abrangentes de documentação, planejamento e controle financeiro para simplificar seu processo de viagem.",
    },
  ];

  return (
    <BoxCardDataContent>
      <div className="header-data-content">
        <h1>Bem-vindo à nossa plataforma de documentação de viagens!</h1>
        <p>
          Com a nossa plataforma, você pode centralizar todas as informações
          essenciais em um só lugar. Mantenha seus itinerários, reservas de voos
          e hospedagem, listas de atividades e documentos importantes facilmente
          acessíveis. Não importa se você está planejando uma escapada de fim de
          semana ou uma viagem de volta ao mundo, estamos aqui para ajudá-lo a
          manter tudo sob controle.
        </p>
      </div>
      <div className="box-content-data">
        <div className="cards-flex-data-wrapper">
          {platformBenefits.map((platformBenefitsDataCallback: any) => {
            return (
              <div className="card-plataform-benefits">
                <div className="image-box-wrapper">
                  <img src={platformBenefitsDataCallback.image} alt="" />
                </div>
                <h1>{platformBenefitsDataCallback.title}</h1>
                <br />
                <p>{platformBenefitsDataCallback.dataInformation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </BoxCardDataContent>
  );
}

export default CardDataContent;
