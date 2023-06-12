import { FolderDataDocument, HeaderButtons } from "./styles";
import { BiArrowBack, BiSitemap } from "react-icons/bi";
import { TbSeparatorHorizontal } from "react-icons/tb";
import { HiViewGrid } from "react-icons/hi";
import { IoIosAdd } from "react-icons/io";
import OverviewStorage from "./OverviewStorage";
import FilesListStorage from "./FilesListStorage";
import React, { useState } from "react";
import ReactModal from "react-modal";
import { HeaderModal } from "../../MdDashboard/FilesMdDashboard/styles";
import UploadStorageData from "./UploadStorageData";

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
      id: 3,
      icon: (
        <IoIosAdd
          style={{ width: "20px", height: "20px", color: "rgb(200, 200, 200)" }}
        />
      ),
      buttonName: "Adicionar documento",
      typeButton: "add",
    },
  ];

  const [openModal, setOpenModal] = useState(false);
  const customStyles = {
    content: {
      top: "40%",
      left: "77%",
      right: "auto",
      bottom: "auto",
      marginRight: "-40%",
      transform: "translate(-40%, -40%)",
      width: "40%",
      height: "100%",
      backgroundColor: "rgb(245, 245, 245)",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Define o fundo preto do overlay
    },
  };

  function openModalForAddNewDocument(buttonNameForCompare: string) {
    const buttonNameIsMatch: boolean =
      buttonNameForCompare === "Adicionar documento";
    if (buttonNameIsMatch) {
      setOpenModal(true);
    }
  }

  function closeModalForAddNewDocument() {
    setOpenModal(false);
  }

  return (
    <FolderDataDocument>
      <ReactModal
        isOpen={openModal}
        style={customStyles}
        onRequestClose={closeModalForAddNewDocument}
      >
        <HeaderModal>
          <div onClick={closeModalForAddNewDocument} className="back-page">
            <BiArrowBack
              style={{
                color: "rgb(150, 150, 150)",
                width: "20px",
                height: "20px",
              }}
            />
            <h1>Voltar para o painel</h1>
          </div>
          <div className="modal-flag">
            <h1>Adicionar novos documentos</h1>
          </div>
        </HeaderModal>
        <UploadStorageData />
      </ReactModal>

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
                <div key={buttonsDataFilesCallBackRender.id}>
                  {buttonsDataFilesCallBackRender.typeButton === "regular" ? (
                    <button id="buttons-regular">
                      {buttonsDataFilesCallBackRender.icon}
                      <span>{buttonsDataFilesCallBackRender.buttonName}</span>
                    </button>
                  ) : (
                    <button
                      id="buttons-add"
                      onClick={() =>
                        openModalForAddNewDocument(
                          buttonsDataFilesCallBackRender.buttonName
                        )
                      }
                    >
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
