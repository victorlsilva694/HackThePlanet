import { Button, FloatingLabel, Form, InputGroup } from "react-bootstrap";
import { DashBoardRootPainelData } from "./styles";
import { BsSearch } from "react-icons/bs";
import { Table } from "react-bootstrap";

function FilesMdDashboard() {
  return (
    <DashBoardRootPainelData>
      <div className="body-header-data">
        <div className="travel-data">
          <div className="values-travel">
            <div className="header-box-travel-layer">
              <h1>Valores Investidos </h1>
            </div>
          </div>
          <div className="values-travel">
            <div className="header-box-travel-layer">
              <h1>Atividades Recentes</h1>
            </div>
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
        <Table style={{ width: "95%", margin: "2rem auto" }} bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome da transação</th>
              <th>Validade</th>
              <th>Editar</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0</td>
              <td>Não existente</td>
              <td>Não existente</td>
              <td>
                <Button style={{ width: '80%', margin: 'auto', backgroundColor: "#17A2B8", border: 'none'  }} variant="warning">Warning</Button>
              </td>
              <td>
                <Button variant="danger">Danger</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </DashBoardRootPainelData>
  );
}

export default FilesMdDashboard;
