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
    totalSize: number;
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
      totalSize: 200,
      description: 0,
      color: "#ebebeb",
    },
    {
      id: 2,
      storageDataName: "Videos",
      itensNumber: 0,
      totalSize: 200,
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
      totalSize: 200,
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
      totalSize: 200,
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

  const [picturesFileLength, setPicturesFileLenght] = useState<number | null>(
    null
  );
  const [videoFileLength, setVideoFileLength] = useState<number | null>(null);
  const [documentsFileLength, setDocumentsFileLength] = useState<number | null>(
    null
  );
  const [othersFileLength, setOthersFileLength] = useState<number | null>(null);

  const requestDashboard = dashboardApiRequests();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      const allFilesResponse = await requestDashboard.getAllFilesByUserId(
        parseInt((user?.id ?? "").toString(), 10)
      );

      const files: IFilesDataLenght[] = allFilesResponse.file_payload;

      const imageFiles = files.filter(
        (file) =>
          file.file_name.endsWith(".jpg") || file.file_name.endsWith(".png")
      );
      const imageFilesSize = imageFiles.reduce(
        (total, file) => total + file.file_size_mb,
        0
      );
      setPicturesFileLenght(imageFilesSize);

      const videoFiles = files.filter(
        (file) =>
          file.file_name.endsWith(".mp4") || file.file_name.endsWith(".mov")
      );
      const videoFilesSize = videoFiles.reduce(
        (total, file) => total + file.file_size_mb,
        0
      );
      setVideoFileLength(videoFilesSize);

      const documentFiles = files.filter(
        (file) =>
          file.file_name.endsWith(".pdf") || file.file_name.endsWith(".docx")
      );
      const documentFilesSize = documentFiles.reduce(
        (total, file) => total + file.file_size_mb,
        0
      );
      setDocumentsFileLength(documentFilesSize);

      const otherFiles = files.filter(
        (file) =>
          !file.file_name.endsWith(".jpg") &&
          !file.file_name.endsWith(".png") &&
          !file.file_name.endsWith(".mp4") &&
          !file.file_name.endsWith(".mov") &&
          !file.file_name.endsWith(".pdf") &&
          !file.file_name.endsWith(".docx")
      );
      const otherFilesSize = otherFiles.reduce(
        (total, file) => total + file.file_size_mb,
        0
      );
      setOthersFileLength(otherFilesSize);

      console.log("picturesFileLength", picturesFileLength);
      console.log("videoFileLength", videoFileLength);
      console.log("documentsFileLength", documentsFileLength);
      console.log("othersFileLength", othersFileLength);
    };

    fetchData();
  }, []);
  return (
    <OverviewStorageDataWrapper>
      {overviewStorageDataType.map(
        (overviewStorageDataTypeCallBack: IOverviewStorageDataType) => {
          const { storageDataName, iconDataStorage, color, totalSize } =
            overviewStorageDataTypeCallBack;
          const itemsNumber =
            storageDataName === "Imagens"
              ? picturesFileLength !== null
                ? picturesFileLength
                : 0
              : storageDataName === "Videos"
              ? videoFileLength !== null
                ? videoFileLength
                : 0
              : storageDataName === "Documentos"
              ? documentsFileLength !== null
                ? documentsFileLength
                : 0
              : storageDataName === "Outros"
              ? othersFileLength !== null
                ? othersFileLength
                : 0
              : 0;
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
                <div
                  className="bar-load-storage"
                  // style={{ width: `${(description / totalSize) * 100}%` }}
                >
                  <div className="bar-load-storage-body" style={{ width: `${(itemsNumber / totalSize) * 100}%` }}></div>
                </div>
                <p>
                  {itemsNumber}MB usados de
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
