import { BsImageFill } from "react-icons/bs";
import { CardStorageData, OverviewStorageDataWrapper } from "./styles";
import { useEffect, useState, useContext } from "react";
import { MdCreateNewFolder, MdFitbit, MdVideoLibrary } from "react-icons/md";
import { IFilesDataLenght } from "../../../../../../Types/Dashboard";
import { dashboardApiRequests } from "../../../../../../hooks/useApi";
import { AuthContext } from "../../../../../../UserContextStore/AuthContext";

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
      iconDataStorage: (
        <BsImageFill
          style={{ color: "rgb(115, 115, 115)", width: "28px", height: "28px" }}
        />
      ),
      description: 0,
      color: "#ebebeb",
    },
    {
      id: 2,
      storageDataName: "Videos",
      itensNumber: 0,
      iconDataStorage: (
        <MdVideoLibrary
          style={{ color: "rgb(115, 115, 115)", width: "28px", height: "28px" }}
        />
      ),
      description: 0,
      color: "#ebebeb",
    },
    {
      id: 3,
      storageDataName: "Documentos",
      itensNumber: 0,
      iconDataStorage: (
        <MdCreateNewFolder
          style={{ color: "rgb(115, 115, 115)", width: "28px", height: "28px" }}
        />
      ),
      description: 0,
      color: "#ebebeb",
    },
    {
      id: 4,
      storageDataName: "Outros",
      itensNumber: 0,
      iconDataStorage: (
        <MdFitbit
          style={{ color: "rgb(115, 115, 115)", width: "28px", height: "28px" }}
        />
      ),
      description: 0,
      color: "#ebebeb",
    },
  ];

  const [files, setFiles] = useState<IFilesDataLenght[] | null>(null);
  const requestDashboard = dashboardApiRequests();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      const allFilesResponse = await requestDashboard.getAllFilesByUserId(
        parseInt((user?.id ?? "").toString(), 10)
      );

      console.log(allFilesResponse.file_payload);
    };
    fetchData();
  }, []);

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
                >
                  {overviewStorageDataTypeCallBack.iconDataStorage}
                </div>
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
