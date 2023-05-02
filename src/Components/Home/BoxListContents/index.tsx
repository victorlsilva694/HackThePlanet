import { Card, Carousel } from "react-bootstrap";
import { ContainerListContent } from "./styles";
import { SiGooglemaps } from "react-icons/si";

function BoxListContents() {
  const cardsMock = [
    {
      id: 1,
      images: [
        "https://img.freepik.com/fotos-gratis/paisagem-analogica-da-cidade-com-edificios_23-2149661456.jpg?w=1380&t=st=1682112681~exp=1682113281~hmac=62ee18576735742e46225dda0e9d7b0306b9dc640daa46d5e4ce38555f9fa8bd",
        "https://img.freepik.com/fotos-gratis/arquitetura-moderna-de-apartamentos_1268-14696.jpg?w=1380&t=st=1682112701~exp=1682113301~hmac=ba92749288a8ef4d7ff4b149c00d0db39ef0500389f0d367147eeb740873756e",
      ],
      hotelData: {
        title: "cidade comedificios",
        stars: "4.6",
        icon: (
          <SiGooglemaps
            style={{ width: "22px", height: "22px", color: "rgb(80, 80, 80)" }}
          />
        ),
        locale:
          "Av. Mogi Guaçu, 1850 - Jardim das Laranjeiras, 6MRH+WH Conserva, Americana - SP",
        price: "R$ 1.300,00",
      },
    },
    {
      id: 1,
      images: [
        "https://img.freepik.com/fotos-gratis/carro-eletrico-3d-e-edificio_23-2148972401.jpg?w=1380&t=st=1682112779~exp=1682113379~hmac=d7cecf778e4b9d0ed76802ab2109282bc46f18ee5a57cf4e48eefcd39159f238",
        "https://img.freepik.com/fotos-gratis/design-moderno-apartamento-com-quarto-e-sala-de-estar_1262-12375.jpg?w=1380&t=st=1682112802~exp=1682113402~hmac=58d24c1fccb99dba9f8f85030ab0f82a4749f4b2510921d80a846873212a9815",
      ],
      hotelData: {
        title: "Carroagem Hotel",
        stars: "4.9",
        icon: (
          <SiGooglemaps
            style={{ width: "22px", height: "22px", color: "rgb(80, 80, 80)" }}
          />
        ),
        locale:
          "R. Dom Pedro II, 1835 - Conserva, Americana - SP, 13466-000, 7M98+7H Jardim Bela Vista",
        price: "R$ 1.299,00",
      },
    },
    {
      id: 1,
      images: [
        "https://img.freepik.com/fotos-gratis/interior-plano-vazio-com-elementos-de-decoracao_1303-23910.jpg?w=1380&t=st=1682112849~exp=1682113449~hmac=63b281f93ad28b534c118e855bb7be4240211c8e007919ed08701e79634477e0",
        "https://img.freepik.com/fotos-gratis/apartamento-estudio-acolhedor-com-quarto-e-sala-de-estar_1262-12323.jpg?w=1380&t=st=1682112858~exp=1682113458~hmac=683d276938e22cce9278442dbf9a24e3a1b97f970cb8bef87a9486ed5b0698d2",
      ],
      hotelData: {
        title: "Hotel Detalhe Mozilla",
        stars: "3.6",
        icon: (
          <SiGooglemaps
            style={{ width: "22px", height: "22px", color: "rgb(80, 80, 80)" }}
          />
        ),
        locale:
          "R. da Agricultura, 4060 - Jardim Souza Queiroz, Santa Bárbara d'Oeste - SP, 13454-005, 6JW5+75 ",
        price: "R$ 1.899,00",
      },
    },
    {
      id: 1,
      images: [
        "https://img.freepik.com/fotos-gratis/charmosa-casa-amarela-com-janelas-de-madeira-e-jardim-gramado-verde_181624-8074.jpg?w=1380&t=st=1682112872~exp=1682113472~hmac=0088562d081dfa304b00a07190fc066b19ecd4ab1c1424acfab2e60b7e962064",
        "https://img.freepik.com/fotos-gratis/estrada-e-a-cidade_1417-1426.jpg?w=1380&t=st=1682112880~exp=1682113480~hmac=a8485c1abbec45f63bb6db1e07e4f533c2e7f4fb0996c30990dea97a40ccf367",
      ],
      hotelData: {
        title: "Hotel La Place",
        stars: "4.6",
        icon: (
          <SiGooglemaps
            style={{ width: "22px", height: "22px", color: "rgb(80, 80, 80)" }}
          />
        ),
        locale:
          "R. Guaranís, 23 - Jardim São Francisco, Santa Bárbara d'Oeste - SP, 13456-079, 6JV3+CW",
        price: "R$ 1.079,00",
      },
    },
  ];

  return (
    <ContainerListContent>
      <h1>Algumas Ofertas em alta</h1>
      <div className="cards-hotels">
        {cardsMock.map((cardsMockCallBack: any) => {
          return (
            <Card
              style={{
                width: "20rem",
                height: "25rem",
                border: "1px solid #e7e7e7",
                backgroundColor: "rgb(250, 250, 250)",
                boxShadow: "rgba(0, 0, 0, 0.1) 1px 4px 19px",
              }}
            >
              <Carousel>
                {cardsMockCallBack.images.map(
                  (getAllImagesCallBack: string) => {
                    return (
                      <Carousel.Item>
                        <img
                          className="d-block w-10"
                          style={{ width: "20rem", height: "14rem" }}
                          src={getAllImagesCallBack}
                          alt="First slide"
                        />
                      </Carousel.Item>
                    );
                  }
                )}
              </Carousel>
              <Card.Body>
                <Card.Title>{cardsMockCallBack.hotelData.title}</Card.Title>
                <Card.Text>{cardsMockCallBack.hotelData.locale}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </ContainerListContent>
  );
}

export default BoxListContents;
