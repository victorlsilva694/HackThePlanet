import { Button, FloatingLabel, Form, InputGroup } from "react-bootstrap";
import { DashBoardRootPainelData } from "./styles";
import { BsSearch } from "react-icons/bs";
import { BsArrowsExpand } from "react-icons/bs";
import { IconType } from "react-icons";
import PayoutCharts from "./PayoutCharts";
import MoreSearched from "./MoreSearched";

function FilesMdDashboard() {
  interface TableHeaderItem {
    id: number;
    name: string;
    iconComponent: IconType;
  }

  const tableHeader: TableHeaderItem[] = [
    {
      id: 0,
      name: "ID da transação",
      iconComponent: BsArrowsExpand,
    },
    {
      id: 0,
      name: "Nome da transação",
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

  return (
    <DashBoardRootPainelData>
      <div className="body-header-data">
        <div className="travel-data">
          <div className="values-travel">
            <div className="header-box-travel-layer">
              <h1>Valores Investidos </h1>
            </div>
            <PayoutCharts />
          </div>
          <div className="values-travel">
            <div className="header-box-travel-layer">
              <h1>Atividades Mais buscadas</h1>
            </div>
            <MoreSearched />
          </div>
        </div>
      </div>
      <div className="travels-selected">
        <div className="header-box-travel-layer">
          <h1>Avisos Importantes e últimas transações</h1>

          <div className="search-box-content">
            <InputGroup>
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
                    color: "white",
                  }}
                >
                  Editar
                </Button>
              </td>
              <td>
                <Button variant="danger" style={{ width: "60%" }}>
                  Excluir
                </Button>
              </td>
            </tr>
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
                    color: "white",
                  }}
                >
                  Editar
                </Button>
              </td>
              <td>
                <Button variant="danger" style={{ width: "60%" }}>
                  Excluir
                </Button>
              </td>
            </tr>
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
                    color: "white",
                  }}
                >
                  Editar
                </Button>
              </td>
              <td>
                <Button variant="danger" style={{ width: "60%" }}>
                  Excluir
                </Button>
              </td>
            </tr>
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
                    color: "white",
                  }}
                >
                  Editar
                </Button>
              </td>
              <td>
                <Button variant="danger" style={{ width: "60%" }}>
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
