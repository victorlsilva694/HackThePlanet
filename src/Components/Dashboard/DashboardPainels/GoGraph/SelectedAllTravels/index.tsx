import { Form, InputGroup } from "react-bootstrap";
import { SelectedAllTravelsBoxWrapper } from "./styles";
import { BsSearch } from "react-icons/bs";
import { useState, useEffect, useContext } from "react";
import InProgressTravels from "./InProgressTravels";
import CardUser from "./CardUser";
import { MdAdd } from "react-icons/md";
import ReactModal from "react-modal";
import { HeaderModal } from "../../MdDashboard/FilesMdDashboard/styles";
import { BiArrowBack } from "react-icons/bi";
import { dashboardApiRequests } from "../../../../../hooks/useApi";
import { AuthContext } from "../../../../../UserContextStore/AuthContext";

function SelectedAllTravels() {
  interface IMyTravelsButtonsData {
    id: number;
    buttonName: string;
  }

  const myTravelsButtonsData: IMyTravelsButtonsData[] = [
    {
      id: 1,
      buttonName: "Viagens em andamento",
    },
    {
      id: 2,
      buttonName: "Viagens concluídas",
    },
    {
      id: 3,
      buttonName: "Viagens Futuras",
    },
  ];

  const [buttonSelected, setButtonSelected] = useState<string>(
    myTravelsButtonsData[0].buttonName
  );

  const [openModalNewTravelsModal, setOpenModalNewTravelsModal] =
    useState(false);

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
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  };

  function handleClick(buttonNameAddClass: string) {
    setButtonSelected(buttonNameAddClass);
  }

  function openModalForInsertNewTravel() {
    setOpenModalNewTravelsModal(true);
  }

  function closeModalForAddNewDocument() {
    setOpenModalNewTravelsModal(false);
  }

  return (
    <SelectedAllTravelsBoxWrapper>
      <ReactModal
        isOpen={openModalNewTravelsModal}
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
      </ReactModal>

      <div className="body-items-travels-referece">
        <div className="my-travles">
          <div className="header-travels-wrapper">
            {myTravelsButtonsData.map(
              (
                myTravelsButtonsDataCallBack: IMyTravelsButtonsData,
                key: any
              ) => {
                return (
                  <div
                    key={key}
                    onClick={() =>
                      handleClick(myTravelsButtonsDataCallBack.buttonName)
                    }
                    className="buttons-data-travels"
                  >
                    <button
                      className={
                        buttonSelected ===
                        myTravelsButtonsDataCallBack.buttonName
                          ? "add-border"
                          : ""
                      }
                    >
                      {myTravelsButtonsDataCallBack.buttonName}
                    </button>
                  </div>
                );
              }
            )}
          </div>
          <InProgressTravels buttonSelected={buttonSelected} />
        </div>
      </div>

      <div className="user-card-reference">
        <CardUser />
      </div>
    </SelectedAllTravelsBoxWrapper>
  );
}

export default SelectedAllTravels;
