import { Button, Col, FloatingLabel, FormCheck, Row } from "react-bootstrap";
import { FormRootAddTransaction, SetMoneyForJourney } from "./styles";
import { Form } from "react-bootstrap";
import { ChangeEvent, useContext, useState } from "react";
import { AuthContext } from "../../../../../../UserContextStore/AuthContext";
import { v4 as uuidv4 } from "uuid";
import { DashboardContext } from "../../../../../../DashboardContextStore/DashboardContext";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  interface ITransactionObjectData {
    transactionName: string;
    passport: string;
    userId: number;
    travelCode: string;
    covidData: string;
    priceValues: string;
    warningAnnotation: string;
  }

  const [newTransactionObjectData, setNewTransactionObjectData] =
    useState<ITransactionObjectData>({
      transactionName: "",
      passport: travelsRequirements[0].optionsPassport[0].value,
      userId: parseInt((user?.id ?? "").toString(), 10),
      travelCode: uuidv4().split("-")[0],
      covidData: travelsRequirements[1].optionsPassport[0].value,
      priceValues: moneyToUse[0],
      warningAnnotation: "",
    });

  function handleInputChange(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
    fieldName: keyof ITransactionObjectData
  ) {
    const value = event.target.value;

    setNewTransactionObjectData((defaultData) => ({
      ...defaultData,
      [fieldName]: value || "",
    }));
  }

  const newTransaction = useContext(DashboardContext);

  async function sendTransactionForm() {
    await newTransaction.setTransaction(newTransactionObjectData);
    navigate("/dashboard");
  }

  return (
    <FormRootAddTransaction>
      <FormCheck.Label htmlFor="transaction-name">
        Nome da transação
      </FormCheck.Label>
      <Form.Control
        value={newTransactionObjectData?.transactionName || ""}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          handleInputChange(event, "transactionName")
        }
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
                  <Form.Select
                    style={{ height: "2.7rem" }}
                    onChange={(event) =>
                      handleInputChange(
                        event,
                        travelsRequirementsCallBack.label as keyof ITransactionObjectData
                      )
                    }
                    value={
                      newTransactionObjectData[
                        travelsRequirementsCallBack.label as keyof ITransactionObjectData
                      ] || travelsRequirementsCallBack.optionsPassport[0].value
                    }
                  >
                    {travelsRequirementsCallBack.optionsPassport.map(
                      (optionsRequirementsCallBack: IOptionsRequirements) => {
                        return (
                          <option
                            selected
                            key={optionsRequirementsCallBack.optionId}
                            value={optionsRequirementsCallBack.value}
                          >
                            {optionsRequirementsCallBack.value}
                          </option>
                        );
                      }
                    )}
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
          value={newTransactionObjectData?.priceValues || ""}
          onChange={(event) => handleInputChange(event, "priceValues")}
        >
          {moneyToUse.map((moneyToUseCallBack: string, key: any) => {
            return (
              <option selected key={key} value={moneyToUseCallBack}>
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
            value={newTransactionObjectData?.warningAnnotation || ""}
            onChange={(event: any) =>
              handleInputChange(event, "warningAnnotation")
            }
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
          onClick={sendTransactionForm}
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
