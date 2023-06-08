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
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { BiArrowBack } from "react-icons/bi";
import ModalFormAddTransaction from "./ModalFormAddTransaction";

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
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    // Função a ser chamada assim que o componente for aberto
    const fetchData = async () => {
      try {
        const response = await fetch("/api/dashboard/getAll/transactions/{id}");
        const data = await response.json();
        
      } catch (error) {
      }
    };

    fetchData(); 
    // return () => {
    // };
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
            <tr>
              <td>A1WQS23 </td>
              <td>Pacote A1WQS23</td>
              <td>15/01/2023</td>
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
          </tbody>
        </table>
      </div>
    </DashBoardRootPainelData>
  );
}

export default FilesMdDashboard;
