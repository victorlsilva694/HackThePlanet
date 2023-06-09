import { Button, FloatingLabel, Form, InputGroup } from "react-bootstrap";
import { DashBoardRootPainelData, HeaderModal } from "./styles";
import { BsSearch } from "react-icons/bs";
import { BsArrowsExpand } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import { SiAlwaysdata } from "react-icons/si";
import { IoMdAdd } from "react-icons/io";
import { IconType } from "react-icons";
import PayoutCharts from "./PayoutCharts";
import MoreSearched from "./MoreSearched";
import ReactModal from "react-modal";
import React, { useState, useEffect, useContext } from "react";
import styled, { keyframes } from "styled-components";
import { BiArrowBack } from "react-icons/bi";
import ModalFormAddTransaction from "./ModalFormAddTransaction";
import { dashboardApiRequests } from "../../../../../hooks/useApi";
import { AuthContext } from "../../../../../UserContextStore/AuthContext";
import { format, addMonths, parse, parseISO } from "date-fns";

const slideInRight = keyframes`
from {
  transform: translateX(100%);
  opacity: 0;
}
to {
  transform: translateX(0);
  opacity: 1;
}
`;

function FilesMdDashboard() {
  interface TableHeaderItem {
    id: number;
    name: string;
    iconComponent: IconType;
  }

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

  interface ILastTransactions {
    id: number;
    transactionName: string;
    TransactionValidity: string;
  }

  const tableHeader: TableHeaderItem[] = [
    {
      id: 0,
      name: "ID da transação",
      iconComponent: BsArrowsExpand,
    },
    {
      id: 0,
      name: "Nome da Transação",
      iconComponent: BsArrowsExpand,
    },
    {
      id: 0,
      name: "Validade da transação",
      iconComponent: BsArrowsExpand,
    },
    {
      id: 0,
      name: "Editar transação",
      iconComponent: BsArrowsExpand,
    },
    {
      id: 0,
      name: " Excluir transação",
      iconComponent: BsArrowsExpand,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const requestDashboard = dashboardApiRequests();
  const { user } = useContext(AuthContext);

  const customStyles = {
    content: {
      top: "40%",
      left: "67%",
      right: "auto",
      bottom: "auto",
      marginRight: "-40%",
      transform: "translate(-40%, -40%)",
      width: "55%",
      height: "100%",
      backgroundColor: "rgb(245, 245, 245)",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Define o fundo preto do overlay
    },
  };

  ReactModal.setAppElement("#root");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
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
    };
    fetchData();
  }, []);

  return (
    <DashBoardRootPainelData>
      <ReactModal
        isOpen={isOpen}
        style={customStyles}
        onRequestClose={closeModal}
      >
        <HeaderModal>
          <div onClick={closeModal} className="back-page">
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
            <h1>Adicionar uma nova transação</h1>
          </div>
        </HeaderModal>

        <ModalFormAddTransaction />
      </ReactModal>

      <div className="body-header-data">
        <div className="travel-data">
          <div className="values-travel">
            <div className="header-box-travel-layer">
              <h1>Valores Investidos </h1>

              <div className="add-new-package">
                <GoGraph
                  style={{
                    width: "22px",
                    color: "rgb(140, 140, 140)",
                    height: "2rem",
                  }}
                />
              </div>
            </div>
            <PayoutCharts />
          </div>
          <div className="values-travel">
            <div className="header-box-travel-layer">
              <h1>Atividades Mais buscadas</h1>

              <div className="add-new-package">
                <SiAlwaysdata
                  style={{
                    width: "22px",
                    color: "rgb(140, 140, 140)",
                    height: "2rem",
                  }}
                />
              </div>
            </div>
            <MoreSearched />
          </div>
        </div>
      </div>
      <div className="travels-selected">
        <div className="header-box-travel-layer">
          <h1>Meus Pacotes e transações de viagens</h1>

          <div className="search-box-content">
            <InputGroup style={{ width: "90%" }}>
              <Form.Control
                style={{ border: "1px solid rgb(230,230,230)" }}
                placeholder="Pesquise seus planos ativos"
              />
              <InputGroup.Text
                style={{
                  border: "1px solid rgb(220,220,220)",
                  backgroundColor: "white",
                }}
              >
                <BsSearch style={{ height: "2rem" }} />
              </InputGroup.Text>
            </InputGroup>

            <div className="add-new-package" onClick={openModal}>
              <IoMdAdd
                style={{
                  width: "22px",
                  color: "rgb(140, 140, 140)",
                  height: "2rem",
                }}
              />
            </div>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              {tableHeader.map((tableHeadercallback: any) => {
                return (
                  <th>
                    <div className="table-header">
                      {tableHeadercallback.name} <BsArrowsExpand />
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {transactions?.map((transactionData: Transaction) => {
              return (
                <tr>
                  <td>{transactionData.travel_code}</td>
                  <td>{transactionData.transaction_name}</td>
                  <td>{transactionData.created_at}</td>
                  <td>
                    <Button
                      variant="warning"
                      style={{
                        width: "60%",
                        backgroundColor: "#17A2B8",
                        border: "none",
                        color: "rgb(240, 240, 240)",
                        borderRadius: "3px",
                      }}
                    >
                      Editar
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      style={{
                        width: "60%",
                        color: "rgb(240, 240, 240)",
                        borderRadius: "3px",
                      }}
                    >
                      Excluir
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </DashBoardRootPainelData>
  );
}

export default FilesMdDashboard;
