import { FilesListDataStorageStyles } from "./styles";
import { RxRowSpacing } from "react-icons/rx";
import React, { useState, useEffect, useContext } from "react";
import { dashboardApiRequests } from "../../../../../../hooks/useApi";
import { AuthContext } from "../../../../../../UserContextStore/AuthContext";
import { Button } from "react-bootstrap";
import {
  IDeleteItems,
  IFilesDataLenght,
  IFilesDataTotally,
} from "../../../../../../Types/Dashboard";
import { ImFilesEmpty } from "react-icons/im";

function FilesListStorage() {
  interface INameRelationIcon {
    name: string;
    iconName: JSX.Element;
  }

  interface ISizeRelationIcon {
    size: string;
    iconSize: JSX.Element;
  }

  interface IFileOwner {
    owner: string;
    iconSize: JSX.Element;
  }

  interface ILastModifiedRelationIcon {
    lastModified: string;
    iconSize: JSX.Element;
  }

  interface IListFilesDataSizeSavedInStorage {
    fileOwner: IFileOwner[];
    nameRelationIcon: INameRelationIcon[];
    sizeRelationIcon: ISizeRelationIcon[];
    lastModifiedRelation: ILastModifiedRelationIcon[];
    id: number;
  }

  const listFilesDataSizeSavedInStorage: IListFilesDataSizeSavedInStorage[] = [
    {
      id: 1,
      nameRelationIcon: [
        {
          name: "Nome do arquivo",
          iconName: <RxRowSpacing />,
        },
      ],
      sizeRelationIcon: [
        {
          size: "Tamanaho do arquivo",
          iconSize: <RxRowSpacing />,
        },
      ],
      fileOwner: [
        {
          owner: "Dono dos arquivos",
          iconSize: <RxRowSpacing />,
        },
      ],
      lastModifiedRelation: [
        {
          lastModified: "Realizar download do arquivo",
          iconSize: <RxRowSpacing />,
        },
      ],
    },
  ];

  const requestDashboard = dashboardApiRequests();
  const { user } = useContext(AuthContext);
  const [files, setFiles] = useState<IFilesDataTotally>({
    all_files_selected: [],
    file_payload: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const allFilesResponse = await requestDashboard.getAllFilesByUserId(
        parseInt((user?.id ?? "").toString(), 10)
      );

      setFiles({
        all_files_selected: allFilesResponse.all_files_selected,
        file_payload: allFilesResponse.file_payload,
      });
    };
    fetchData();
  }, []);

  async function deleteFileSelecteById({
    name,
    getIdByIndexData,
    username,
  }: IDeleteItems) {
    const onDeleteUserFilesByIdPromise = await requestDashboard
      .deleteUserFilesById(
        name,
        files.all_files_selected[getIdByIndexData].id,
        username,
        parseInt((user?.id ?? "").toString(), 10)
      )
      .then((sucess) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(onDeleteUserFilesByIdPromise);
  }

  return (
    <FilesListDataStorageStyles>
      <h1>Arquivos enviados</h1>
      <div className="table-files-layer">
        {listFilesDataSizeSavedInStorage.map(
          (layersTableCallBack: IListFilesDataSizeSavedInStorage) => {
            return (
              <div className="general-layer-table">
                <div className="checkbox-layer-table">
                  <input type="checkbox" id="checkbox-item" />
                </div>
                <div className="name-layer-table">
                  {layersTableCallBack.nameRelationIcon.map(
                    (nameRelationIcon: INameRelationIcon) => {
                      return (
                        <div className="icon-name-file-table">
                          <h1>{nameRelationIcon.name}</h1>
                          {nameRelationIcon.iconName}
                        </div>
                      );
                    }
                  )}
                </div>
                <div className="name-layer-table">
                  {layersTableCallBack.sizeRelationIcon.map(
                    (sizeRelationIconCallBack: ISizeRelationIcon) => {
                      return (
                        <div className="icon-name-file-table">
                          <h1>{sizeRelationIconCallBack.size}</h1>
                          {sizeRelationIconCallBack.iconSize}
                        </div>
                      );
                    }
                  )}
                </div>
                <div className="name-layer-table">
                  {layersTableCallBack.fileOwner.map(
                    (sizeRelationIconCallBack: IFileOwner) => {
                      return (
                        <div className="icon-name-file-table">
                          <h1>{sizeRelationIconCallBack.owner}</h1>
                          {sizeRelationIconCallBack.iconSize}
                        </div>
                      );
                    }
                  )}
                </div>
                <div className="name-layer-table">
                  {layersTableCallBack.lastModifiedRelation.map(
                    (lastModifiedRelationIcon: ILastModifiedRelationIcon) => {
                      return (
                        <div className="icon-name-file-table">
                          <h1>{lastModifiedRelationIcon.lastModified}</h1>
                          {lastModifiedRelationIcon.iconSize}
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            );
          }
        )}
        <div className="table-body-files-layer">
          {files?.file_payload ? (
            files?.file_payload.map(
              (filesPayloadRender: IFilesDataLenght, setIndexData: number) => (
                <div className="body-table-layer">
                  <div className="checkbox-layer-table">
                    <input type="checkbox" id="checkbox-item" />
                  </div>
                  <div className="name-layer-table">
                    <div className="icon-name-file-table">
                      <h1>{filesPayloadRender.file_name}</h1>
                    </div>
                  </div>
                  <div className="name-layer-table">
                    <div className="icon-name-file-table">
                      <h1>{filesPayloadRender.file_size_mb}mb</h1>
                    </div>
                  </div>
                  <div className="name-layer-table">
                    <div className="icon-name-file-table">
                      <h1>{filesPayloadRender.user_name}</h1>
                    </div>
                  </div>
                  <div className="name-layer-table">
                    <div className="icon-name-file-table">
                      <Button
                        onClick={() =>
                          deleteFileSelecteById({
                            name: filesPayloadRender.file_name,
                            getIdByIndexData: setIndexData,
                            username: filesPayloadRender.user_name,
                          })
                        }
                        style={{
                          width: "50%",
                          height: "2.7rem",
                          margin: "auto",
                        }}
                        variant="danger"
                      >
                        Excluir
                      </Button>
                    </div>
                  </div>
                </div>
              )
            )
          ) : (
            <div className="empty-data-travel">
              <ImFilesEmpty
                style={{
                  width: "32px",
                  height: "32px",
                  color: "rgb(120, 120, 120)",
                }}
              />
              <h1>Não existem viagens finalizadas</h1>
              <p>
                Adicione viagens no painel principal para que seja visivel nessa
                tabela
              </p>
            </div>
          )}
        </div>
      </div>
    </FilesListDataStorageStyles>
  );
}

export default FilesListStorage;
