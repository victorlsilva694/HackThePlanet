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
      title: "Lorem ipsum dolor sit amet",
      dataInformation:
        "perspiciatis culpa harum reprehenderit omnis totam. Veniam tempora animi perspiciatis",
    },
    {
      id: 1,
      name: "",
      image: imageDashboard,
      title: "Lorem ipsum dolor sit amet",
      dataInformation:
        "perspiciatis culpa harum reprehenderit omnis totam. Veniam tempora animi perspiciatis",
    },
    {
      id: 1,
      name: "",
      image: imageCertificate,
      title: "Lorem ipsum dolor sit amet",
      dataInformation:
        "perspiciatis culpa harum reprehenderit omnis totam. Veniam tempora animi perspiciatis",
    },
  ];

  return (
    <BoxCardDataContent>
      <div className="header-data-content">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eum nisi,
          magni dolor.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          perspiciatis culpa harum reprehenderit omnis totam. Veniam tempora
          perspiciatis culpa harum reprehenderit omnis totam. Veniam tempora
          animi perspiciatis eveniet mollitia ducimus, ipsa vel reiciendis quo
          eum nisi, magni dolor.
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
