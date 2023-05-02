import { BoxDescriptionPlataform } from "./styles";

function DescriptionPlataform() {
  const imagesDataIndex = [
    {
      id: 1,
      image: "https://img.freepik.com/fotos-gratis/casa-branca-e-pano-verde-ainda-vida_23-2149817699.jpg?w=1380&t=st=1682189828~exp=1682190428~hmac=7694837ffd57d052c80296912fb63f4f18618207005c943da7d122baa40991ca",
    },
    {
      id: 1,
      image: "https://img.freepik.com/fotos-gratis/um-conjunto-de-casas-com-telhado-azul-e-uma-casa-azul-com-telhado-rosa_1340-25938.jpg?w=1380&t=st=1682189806~exp=1682190406~hmac=6bff87e56639256bac99fe9d880f1c6cf038f571d1cfb3303cdd1fb53918a958",
    },
  ];

  return (
    <BoxDescriptionPlataform>
      <div className="box-images-plataform">
        <div className="image-plataform-first"></div>

        <div className="image-flex-column">
          {imagesDataIndex.map((dataImages: any) => {
            return (
              <div
              className="images-data-column"
                style={{
                  backgroundImage: `url(${dataImages.image})`,
                  backgroundSize: "cover",
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </BoxDescriptionPlataform>
  );
}

export default DescriptionPlataform;
