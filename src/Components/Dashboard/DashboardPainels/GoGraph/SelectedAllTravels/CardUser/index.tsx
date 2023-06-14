import { Form } from "react-bootstrap";
import { CardUserTravelPrice } from "./styles";
import { AiFillEdit } from "react-icons/ai";

function CardUser() {
  type FormCheckType = "checkbox" | "radio";

  interface IUserCardData {
    labelData: string;
    typeCheck: FormCheckType | undefined;
    id: number;
  }

  const filterCardData: IUserCardData[] = [
    {
      id: 1,
      labelData: "Selecionar todas",
      typeCheck: "radio",
    },
    {
      id: 1,
      labelData: "Desmarcar Todas",
      typeCheck: "radio",
    },
  ];

  return (
    <CardUserTravelPrice>
      <div className="card-user-data-travel-cupon">
        <div className="title-card-user-travel">
          <h1>Valores e total de viagens</h1>
        </div>
        <div className="edit-card-user-travel">
          <AiFillEdit
            style={{
              width: "18px",
              height: "18px",
              color: "rgb(120, 120, 120)",
            }}
          />
        </div>
      </div>
      <div className="user-email-item-card">
        <h1>Filtros</h1>
        <Form>
          {filterCardData.map(
            (userCardDataCallBack: IUserCardData, key: any) => {
              return (
                <div key={key} className="mb-3" style={{ margin: "1rem" }}>
                  <Form.Check
                    style={{ fontFamily: "Raleway" }}
                    type={userCardDataCallBack.typeCheck}
                    id={`default-${userCardDataCallBack.id}`}
                    label={`${userCardDataCallBack.labelData}`}
                  />
                </div>
              );
            }
          )}
        </Form>
      </div>
    </CardUserTravelPrice>
  );
}

export default CardUser;
