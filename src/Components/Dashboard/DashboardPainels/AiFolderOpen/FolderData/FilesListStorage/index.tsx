import { FilesListDataStorageStyles } from "./styles";
import { RxRowSpacing } from "react-icons/rx";

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
    shared: string;
    id: number;
  }

  const listFilesDataSizeSavedInStorage: IListFilesDataSizeSavedInStorage[] = [
    {
      shared: "Itens Compartilhados",
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
          lastModified: "Última Modificação",
          iconSize: <RxRowSpacing />,
        },
      ],
    },
  ];

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
                  <div className="icon-name-file-table">
                    <h1>{layersTableCallBack.shared}</h1>
                  </div>
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
