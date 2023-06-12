import { FilesListDataStorageStyles } from "./styles";
import { RxRowSpacing } from "react-icons/rx";
import React, { useState, useEffect, useContext } from "react";
import { dashboardApiRequests } from "../../../../../../hooks/useApi";
import { AuthContext } from "../../../../../../UserContextStore/AuthContext";

function FilesListStorage() {
  interface INameRelationIcon {
    name: string;
    iconName: JSX.Element;
  }

  interface ISizeRelationIcon {
    size: string;
    iconSize: JSX.Element;
  }

  interface ILastModifiedRelationIcon {
    lastModified: string;
    iconSize: JSX.Element;
  }

  interface IListFilesDataSizeSavedInStorage {
    nameRelationIcon: INameRelationIcon[];
    sizeRelationIcon: ISizeRelationIcon[];
    lastModifiedRelation: ILastModifiedRelationIcon[];
    id: number;
  }

  interface IAllFilesData {
    file_path: string | null;
  }

  const listFilesDataSizeSavedInStorage: IListFilesDataSizeSavedInStorage[] = [
    {
      id: 1,
      nameRelationIcon: [
        {
          name: "Nome",
          iconName: <RxRowSpacing />,
        },
      ],
      sizeRelationIcon: [
        {
          size: "Tamanaho do arquivo",
          iconSize: <RxRowSpacing />,
        },
      ],
      lastModifiedRelation: [
        {
          lastModified: "Realizar download",
          iconSize: <RxRowSpacing />,
        },
      ],
    },
  ];

  const requestDashboard = dashboardApiRequests();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      const allFilesResponse = await requestDashboard.getAllFilesByUserId(
        parseInt((user?.id ?? "").toString(), 10)
      );

      allFilesResponse.file_payload.map((allFilesRender: ))

      // const modifiedTransactions = trasactionResponse.map(
      //   (transaction: any) => {
      //     const originalDate = parseISO(transaction.created_at);
      //     const modifiedDate = addMonths(originalDate, 6);
      //     const formattedDate = format(modifiedDate, "dd/MM/yyyy");

      //     return {
      //       ...transaction,
      //       created_at: formattedDate,
      //     };
      //   }
      // );

      // setTransactions(modifiedTransactions);
    };
    fetchData();
  }, []);

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
      </div>
    </FilesListDataStorageStyles>
  );
}

export default FilesListStorage;
