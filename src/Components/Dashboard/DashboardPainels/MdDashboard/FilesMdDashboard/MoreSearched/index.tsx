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
          productName: "aaaaaaaaa",
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
          productName: "aaaaaaaaa",
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
          productName: "aaaaaaaaa",
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
          productName: "aaaaaaaaa",
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
      <table>
        <thead>
          <tr>
            {bestSellingPacks.map((bestSellingPacksCallBack: any) => {
              return (
                <th>
                  <div className="table-header">
                    <h1>{bestSellingPacksCallBack.title}</h1>
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {BestSellingProducts.map(
              (bestSellingPacksCallBack: IBestSellingProducts) => {
                return (
                  <td>
                    <div className="body-table">
                      <GiStarShuriken
                        style={{
                          width: "18px",
                          color: "#dbdbdb",
                          height: "18px",
                        }}
                      />
                      {bestSellingPacksCallBack.productDataInformation.map(
                        (product: IPackageInformation) => (
                          <h1 key={product.idProduct}>{product.productName}</h1>
                        )
                      )}
                    </div>
                  </td>
                );
              }
            )}
          </tr>
          <tr>
            {BestSellingProducts.map(
              (bestSellingPacksCallBack: IBestSellingProducts) => {
                return (
                  <td>
                    <div className="body-table">
                      {bestSellingPacksCallBack.priceAndPercentageIncrease.map(
                        (priceAndPercentage: IPriceAndPercentageIncrease) => (
                          <div key={priceAndPercentage.priceProduct}>
                            <p>
                              {priceAndPercentage.priceProduct} - 
                              {priceAndPercentage.percentageIncrease}%
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </td>
                );
              }
            )}
          </tr>
        </tbody>
      </table>
    </MoreSearchedBox>
  );
}

export default MoreSearched;
