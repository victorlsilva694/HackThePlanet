import { Button, Col, FloatingLabel, FormCheck, Row } from "react-bootstrap";
import { FormRootAddTransaction, SetMoneyForJourney } from "./styles";
import { Form } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../../../../../../UserContextStore/AuthContext";

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

  const moneyToUse = [
    "R$ 100,00 - 1.000,00",
    "R$ 1.000,00 - 10.000,00",
    "R$ 10.000,00 - 50.000,00",
    "R$ 50.000,00 - 100.000,00",
    "Valores maiores",
  ];  
  
  const { user } = useContext(AuthContext);

  function getId() {
    console.log(user)
  }

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
      <input type="hidden" name="id" value={user?.id} />
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
        <FormCheck.Label htmlFor="money-management">
          Valores para a viagem
        </FormCheck.Label>
        <Form.Select
          style={{ margin: ".5rem 0", height: "2.7rem" }}
          id="money-management"
        >
          {moneyToUse.map((moneyToUseCallBack: string, key: any) => {
            return (
              <option key={key} value={moneyToUseCallBack}>
                {moneyToUseCallBack}
              </option>
            );
          })}
        </Form.Select>
        <Form.Text id="transaction-name" muted>
          Faça um levantamento de gastos antes de embarcar em uma viagem com
          gastos como acomodação, transporte, refeições e atrações turísticas.
          Verifique se há promoções ou descontos disponíveis para economizar
          dinheiro.
        </Form.Text>
      </SetMoneyForJourney>
      <br />
      <SetMoneyForJourney>
        <FormCheck.Label htmlFor="money-management">
          Anotações importantes sobre a viagem
        </FormCheck.Label>

        <FloatingLabel
          controlId="floatingTextarea2"
          label="Lembre-se de adicionar, lembretes, promoções e estimativas importantes"
        >
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ margin: ".5rem 0", height: "100px" }}
          />
        </FloatingLabel>
      </SetMoneyForJourney>
      <SetMoneyForJourney>
        <Form.Check
          type="checkbox"
          id="check-validate-token"
          label="Expirar transação após 1 ano de criação (6 meses é o prazo de expiração padrão)"
        />
      </SetMoneyForJourney>
      <SetMoneyForJourney
        style={{
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <Button
          onClick={getId}
          style={{
            width: "200px",
            margin: "2rem 0",
            height: "3rem",
          }}
          variant="primary"
        >
          Salvar transação
        </Button>
      </SetMoneyForJourney>
    </FormRootAddTransaction>
  );
}

export default ModalFormAddTransaction;
