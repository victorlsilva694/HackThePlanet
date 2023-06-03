import { Col, FormCheck, Row } from "react-bootstrap";
import { FormRootAddTransaction, SetMoneyForJourney } from "./styles";
import { Form } from "react-bootstrap";

function ModalFormAddTransaction() {
  interface IOptionsRequirements {
    optionId: number;
    value: string;
  }

  interface ITravelsRequirements {
    id: number;
    mdColumn: string;
    label: string;
    optionsPassport: IOptionsRequirements[];
  }

  const travelsRequirements: ITravelsRequirements[] = [
    {
      id: 1,
      label: "Passaporte",
      mdColumn: "6",
      optionsPassport: [
        { optionId: 1, value: "Passaporte Válido e aprovado" },
        { optionId: 2, value: "Passaporte Expirado" },
      ],
    },
    {
      id: 2,
      label: "Visto",
      mdColumn: "3",
      optionsPassport: [
        { optionId: 1, value: "Visto Válido" },
        { optionId: 2, value: "Visto Expirado" },
      ],
    },
    {
      id: 3,
      label: "Restrições COVID-19",
      mdColumn: "3",
      optionsPassport: [
        { optionId: 1, value: "Vacinado" },
        { optionId: 2, value: "Não Vacinado" },
      ],
    },
  ];

  return (
    <FormRootAddTransaction>
      <FormCheck.Label htmlFor="transaction-name">
        Nome da transação
      </FormCheck.Label>
      <Form.Control
        style={{ margin: ".5rem 0", height: "2.7rem" }}
        type="text"
        id="transaction-name"
        aria-describedby="transaction-name"
      />
      <Form.Text id="transaction-name" muted>
        O nome da transação deve ter até 20 letras sendo escrito de forma clara
        e objetiva pois será exibida novamente no painel de administração. Um
        bom exemplo para a nomenclatura seria: "Americana, SP", "Califórnia,
        EUA", "Campinas, SP".
      </Form.Text>
      <Form style={{ margin: "2.4rem 0" }}>
        <Row className="mb-3">
          {travelsRequirements.map(
            (travelsRequirementsCallBack: ITravelsRequirements) => {
              return (
                <Form.Group
                  as={Col}
                  md={travelsRequirementsCallBack.mdColumn}
                  controlId="validationFormik103"
                  className="position-relative"
                >
                  <Form.Label>{travelsRequirementsCallBack.label}</Form.Label>
                  <Form.Select style={{ height: "2.7rem" }}>
                    {travelsRequirementsCallBack.optionsPassport.map(
                      (optionsRequirementsCallBack: IOptionsRequirements) => {
                        return (
                          <option>{optionsRequirementsCallBack.value}</option>
                        );
                      }
                    )}
                    <option value="1">One</option>
                  </Form.Select>
                </Form.Group>
              );
            }
          )}
        </Row>
      </Form>
      <SetMoneyForJourney>
        
      </SetMoneyForJourney>
    </FormRootAddTransaction>
  );
}

export default ModalFormAddTransaction;
