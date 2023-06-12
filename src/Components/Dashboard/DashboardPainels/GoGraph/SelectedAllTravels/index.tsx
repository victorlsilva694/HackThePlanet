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
import { format, addMonths, parse, parseISO } from "date-fns";

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

  const requestDashboard = dashboardApiRequests();
  const { user } = useContext(AuthContext);

  interface Transaction {
    covid_data: string;
    created_at: string;
    id: number;
    passport: string;
    price_values: string;
    transaction_name: string;
    travel_code: string;
    updated_at: string;
    user_id: number;
    warning_annotation: string;
  }

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const trasactionResponse =
        await requestDashboard.getAllTransactionsByUserId(
          parseInt((user?.id ?? "").toString(), 10)
        );
      const modifiedTransactions = trasactionResponse.map(
        (transaction: any) => {
          const originalDate = parseISO(transaction.created_at);
          const modifiedDate = addMonths(originalDate, 6);
          const formattedDate = format(modifiedDate, "dd/MM/yyyy");

          return {
            ...transaction,
            created_at: formattedDate,
          };
        }
      );

      setTransactions(modifiedTransactions);

      console.log(transactions)
    };
    fetchData();
  }, []);

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
              (myTravelsButtonsDataCallBack: IMyTravelsButtonsData) => {
                return (
                  <div
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
            <div
              onClick={openModalForInsertNewTravel}
              className="add-new-travel-button"
            >
              <MdAdd
                style={{
                  width: "20px",
                  color: "rgb(120, 120, 120)",
                  height: "20px",
                }}
              />
            </div>
          </div>

          <InProgressTravels />
        </div>
      </div>

      <div className="user-card-reference">
        <CardUser />
      </div>
    </SelectedAllTravelsBoxWrapper>
  );
}

export default SelectedAllTravels;
