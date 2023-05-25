import { CardStorageData, OverviewStorageDataWrapper } from "./styles";

function OverviewStorage() {
  interface IOverviewStorageDataType {
    id: number;
    storageDataName: string;
    itensNumber: number;
    iconDataStorage: JSX.Element;
    description: number;
    color: string;
  }

  const overviewStorageDataType: IOverviewStorageDataType[] = [
    {
      id: 1,
      storageDataName: "Imagens",
      itensNumber: 0,
      iconDataStorage: <h2>i</h2>,
      description: 20,
      color: "#ebebeb",
    },
    {
      id: 2,
      storageDataName: "Videos",
      itensNumber: 0,
      iconDataStorage: <h2>V</h2>,
      description: 20,
      color: "#ebebeb",
    },
    {
      id: 3,
      storageDataName: "Documentos",
      itensNumber: 0,
      iconDataStorage: <h2>D</h2>,
      description: 56,
      color: "#ebebeb",
    },
    {
      id: 4,
      storageDataName: "Outros",
      itensNumber: 0,
      iconDataStorage: <h2>O</h2>,
      description: 112,
      color: "#ebebeb",
    },
  ];

  return (
    <OverviewStorageDataWrapper>
      {overviewStorageDataType.map(
        (overviewStorageDataTypeCallBack: IOverviewStorageDataType) => {
          return (
            <CardStorageData>
              <div className="data-storage-layer">
                <div
                  className="icon-storage-data"
                  style={{
                    backgroundColor: `${overviewStorageDataTypeCallBack.color}`,
                  }}
                ></div>
                <div className="text-storage-data">
                  <h1>{overviewStorageDataTypeCallBack.storageDataName}</h1>
                  <p>
                    {overviewStorageDataTypeCallBack.itensNumber === 0
                      ? "Não possuí itens"
                      : overviewStorageDataTypeCallBack.itensNumber}
                  </p>
                </div>
              </div>
              <div className="storage-nivel-layer">
                <div className="bar-load-storage"></div>
                <p>
                  {overviewStorageDataTypeCallBack.description}MB usados de
                  200MB
                </p>
              </div>
            </CardStorageData>
          );
        }
      )}
    </OverviewStorageDataWrapper>
  );
}

export default OverviewStorage;
