import { AiOutlineRise } from "react-icons/ai";
import { MoreSearchedBox } from "./styles";
import { BsArrowsExpand } from "react-icons/bs";
import { IconBaseProps } from "react-icons";
import { GiStarShuriken } from "react-icons/gi";

function MoreSearched() {
  interface IBestSellingPacks {
    id: number;
    title: string;
    progress: string;
  }

  interface IPackageInformation {
    idProduct: number;
    productName: string;
  }

  interface IPriceAndPercentageIncrease {
    percentageIncrease: number;
    priceProduct: string;
  }

  interface IBestSellingProducts {
    productDataInformation: IPackageInformation[];
    priceAndPercentageIncrease: IPriceAndPercentageIncrease[];
  }

  const bestSellingPacks: IBestSellingPacks[] = [
    {
      id: 1,
      title: "Nome do pacote",
      progress: "Progresso",
    },
    {
      id: 1,
      title: "Progresso",
      progress: "Progresso",
    },
  ];

  const BestSellingProducts: IBestSellingProducts[] = [
    {
      productDataInformation: [
        {
          idProduct: 1,
          productName: "Expedição Tropical",
        },
      ],
      priceAndPercentageIncrease: [
        {
          percentageIncrease: 1.6,
          priceProduct: "R$ 23.989,00",
        },
      ],
    },
    {
      productDataInformation: [
        {
          idProduct: 1,
          productName: "Aventura nas Montanhas",
        },
      ],
      priceAndPercentageIncrease: [
        {
          percentageIncrease: 1.6,
          priceProduct: "R$ 81.223,00",
        },
      ],
    },
    {
      productDataInformation: [
        {
          idProduct: 1,
          productName: "Caminho Histórico",
        },
      ],
      priceAndPercentageIncrease: [
        {
          percentageIncrease: 1.6,
          priceProduct: "R$ 73.112,00",
        },
      ],
    },
    {
      productDataInformation: [
        {
          idProduct: 1,
          productName: "Praias Paradisíacas",
        },
      ],
      priceAndPercentageIncrease: [
        {
          percentageIncrease: 1.6,
          priceProduct: "R$ 36.849,00",
        },
      ],
    },
  ];

  return (
    <MoreSearchedBox>
      <div className="header-data-packages">
        {bestSellingPacks.map((bestSellingPacksCallBack: any) => {
          return (
            <div className="table-header">
              <h1>{bestSellingPacksCallBack.title}</h1>
            </div>
          );
        })}
      </div>

      <div className="table-data">
        <div className="left-cells-table">
          {BestSellingProducts.map(
            (bestSellingPacksCallBack: IBestSellingProducts) => {
              return (
                <div className="cell-table">
                  <GiStarShuriken
                    style={{
                      width: "18px",
                      color: "#b8b8b8",
                      margin: "-.2rem .5rem",
                      height: "18px",
                    }}
                  />
                  {bestSellingPacksCallBack.productDataInformation.map(
                    (product: IPackageInformation) => (
                      <h1 key={product.idProduct}>{product.productName}</h1>
                    )
                  )}
                </div>
              );
            }
          )}
        </div>
        <div className="right-cells-table">
          {BestSellingProducts.map(
            (bestSellingPacksCallBack: IBestSellingProducts) => {
              return (
                <div className="cell-table">
                  {bestSellingPacksCallBack.priceAndPercentageIncrease.map(
                    (priceAndPercentage: IPriceAndPercentageIncrease) => (
                      <h1>
                        {priceAndPercentage.priceProduct} - aumento {priceAndPercentage.percentageIncrease}%
                      </h1>
                    )
                  )}
                </div>
              );
            }
          )}
        </div>
      </div>
    </MoreSearchedBox>
  );
}

export default MoreSearched;
