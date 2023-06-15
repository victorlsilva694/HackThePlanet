import { ContainerPlataformsData } from "./styles";

function EventsPlataform() {
  const allBoxContainersData = [
    {
      id: 1,
      image:
        "https://img.freepik.com/fotos-gratis/villa-com-piscina-de-luxo-espetacular-design-contemporaneo-arte-digital-imoveis-casa-casa-e-propriedade-ge_1258-150749.jpg?w=1380&t=st=1682965430~exp=1682966030~hmac=723967ae7411ba38c49ea67c27eb84d06503ae54b706c6db1c6b9f7cfa5d8dba",
    },
    {
      id: 2,
      image:
        "https://img.freepik.com/psd-gratuitas/quarto-duplo-moderno-realista-com-moveis-e-uma-moldura_176382-427.jpg?w=826&t=st=1682965688~exp=1682966288~hmac=288378d4626b46c2193efe52403d88c5d9343bf5a8d318b56d04575da30b079a",
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/fotos-gratis/uma-sala-com-uma-grande-janela-e-um-banco-no-meio_1340-25476.jpg?w=826&t=st=1682965739~exp=1682966339~hmac=c781095d4b8683d8351e8282d625754b85951dc04851592950dbda0119ac9846",
    },
    {
      id: 4,
      image:
        "https://img.freepik.com/fotos-gratis/paisagem-analogica-da-cidade-com-edificios_23-2149661456.jpg?w=1380&t=st=1682965770~exp=1682966370~hmac=26f5745561cedf41a299e3b6330e8e46c986eb33abbe2161af38edeb845be334",
    },
    {
      id: 5,
      image:
        "https://img.freepik.com/fotos-gratis/belo-edificio-moderno-arquitetura-moderna_181624-21692.jpg?w=1380&t=st=1682965780~exp=1682966380~hmac=4b759bad1c4bd864342c176786b04b5181d034b3673c4989925da48bc79a2b65",
    },
    {
      id: 6,
      image:
        "https://img.freepik.com/fotos-gratis/bela-vista-da-escada-em-espiral-dentro-do-predio_181624-17757.jpg?w=1380&t=st=1682965796~exp=1682966396~hmac=1e266dfa11e95bbb4461a239d16fe3dd9947a5203568e283db9daab0530be6fe",
    },
  ];

  return (
    <ContainerPlataformsData>
      <div className="header-events-plataform">
        <h1>Edificios e plataformas em construção</h1>
        <p>
          Comece sua jornada conosco hoje mesmo e descubra como a documentação
          de viagens pode ser descomplicada e emocionante ao mesmo tempo.
        </p>
      </div>

      <div className="block-plataforms-construction">
        {allBoxContainersData.map((allBoxContainersDataCallBack: any) => {
          return (
            <div
              className="box-construction"
              style={{
                backgroundImage: `url(${allBoxContainersDataCallBack.image})`,
                backgroundSize: "cover",
              }}
            ></div>
          );
        })}
      </div>
    </ContainerPlataformsData>
  );
}

export default EventsPlataform;
