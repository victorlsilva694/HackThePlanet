import { FolderDataDocument, HeaderButtons } from "./styles";
import { BiSitemap } from "react-icons/bi";
import { TbSeparatorHorizontal } from "react-icons/tb";
import { HiViewGrid } from "react-icons/hi";
import { IoIosAdd } from "react-icons/io";
import OverviewStorage from "./OverviewStorage";
import FilesListStorage from "./FilesListStorage";

function FolderData() {
  interface IButtonsDataFiles {
    id: number;
    icon: JSX.Element;
    buttonName: string;
    typeButton: string;
  }

  const ButtonsDataFiles: IButtonsDataFiles[] = [
    {
      id: 1,
      icon: (
        <TbSeparatorHorizontal
          style={{ width: "20px", height: "20px", color: "rgb(80, 80, 80)" }}
        />
      ),
      buttonName: "Filtrar",
      typeButton: "regular",
    },
    {
      id: 2,
      icon: (
        <HiViewGrid
          style={{ width: "20px", height: "20px", color: "rgb(80, 80, 80)" }}
        />
      ),
      buttonName: "Modelos",
      typeButton: "regular",
    },
    {
      id: 1,
      icon: (
        <IoIosAdd
          style={{ width: "20px", height: "20px", color: "rgb(200, 200, 200)" }}
        />
      ),
      buttonName: "Adicionar documento",
      typeButton: "add",
    },
  ];

  return (
    <FolderDataDocument>
      <HeaderButtons>
        <div className="overview-title-data-layer">
          <div className="overview-title-data">
            <BiSitemap
              style={{
                width: "30px",
                margin: ".7rem",
                color: "rgb(100, 100, 100)",
                height: "30px",
              }}
            />
          </div>
          <h1>Valores que foram salvos</h1>
        </div>
        <div className="overview-buttons-data-layer">
          {ButtonsDataFiles.map(
            (buttonsDataFilesCallBackRender: IButtonsDataFiles) => {
              return (
                <div>
                  {buttonsDataFilesCallBackRender.typeButton === "regular" ? (
                    <button id="buttons-regular">
                      {buttonsDataFilesCallBackRender.icon}
                      <span>{buttonsDataFilesCallBackRender.buttonName}</span>
                    </button>
                  ) : (
                    <button id="buttons-add">
                      {buttonsDataFilesCallBackRender.icon}
                      <span>{buttonsDataFilesCallBackRender.buttonName}</span>
                    </button>
                  )}
                </div>
              );
            }
          )}
        </div>
      </HeaderButtons>
      <OverviewStorage />
      <FilesListStorage />
    </FolderDataDocument>
  );
}

export default FolderData;
