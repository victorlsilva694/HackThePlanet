import { Button } from "react-bootstrap";
import { InProgressTravelsTableWrapper } from "./styles";
import { RxRowSpacing } from "react-icons/rx";

function InProgressTravels() {
  interface IUserTravelsTableData {
    id: number;
    name: string | JSX.Element;
    lengthTableData: string;
  }

  interface ITravelsSelectedForInsertInTable {
    id: number;
    name: string;
    lengthTableData: string;
  }

  const userTravelsTableData: IUserTravelsTableData[] = [
    {
      id: 0,
      lengthTableData: "col-xs-2",
      name: <input type="checkbox" style={{ width: "18px", height: "18px" }} />,
    },
    {
      id: 1,
      name: "ID",
      lengthTableData: "col-xs-2",
    },
    {
      id: 2,
      name: "Destino da viagem",
      lengthTableData: "col-xs-6",
    },
    {
      id: 3,
      name: "Dia da voo",
      lengthTableData: "col-xs-4",
    },
    {
      id: 4,
      name: "Excluir",
      lengthTableData: "col-xs-5",
    },
  ];

  const travelsSelectedForInsertInTable: ITravelsSelectedForInsertInTable[] = [
    {
      id: 1,
      name: "U-I3191",
      lengthTableData: "col-xs-2",
    },
    {
      id: 2,
      name: "Rio de Janeiro - Santos Dumont (SDU) ",
      lengthTableData: "col-xs-6",
    },
    {
      id: 3,
      name: "06/08/2024",
      lengthTableData: "col-xs-4",
    },
  ];

  return (
    <InProgressTravelsTableWrapper>
      <div className="table-header-travels-layer">
        {userTravelsTableData.map(
          (userTravelsTableDataCallBack: IUserTravelsTableData) => {
            return (
              <div className={userTravelsTableDataCallBack.lengthTableData}>
                {userTravelsTableDataCallBack.name}
              </div>
            );
          }
        )}
      </div>
      <div className="table-data-travels-layer">
        <div className="col-xs-2">
          <input type="checkbox" style={{ width: "15px", height: "15px" }} />
        </div>
        {travelsSelectedForInsertInTable.map(
          (
            travelsSelectedForInsertInTable: ITravelsSelectedForInsertInTable
          ) => {
            return (
              <div className={travelsSelectedForInsertInTable.lengthTableData}>
                {travelsSelectedForInsertInTable.name}
              </div>
            );
          }
        )}
        <div className="col-xs-5">
          <Button
            style={{ width: "85%", height: "70%", margin: "auto" }}
            variant="danger"
          >
            Deletar
          </Button>
        </div>
      </div>
      <div className="table-data-travels-layer">
        <div className="col-xs-2">
          <input type="checkbox" style={{ width: "15px", height: "15px" }} />
        </div>
        {travelsSelectedForInsertInTable.map(
          (
            travelsSelectedForInsertInTable: ITravelsSelectedForInsertInTable
          ) => {
            return (
              <div className={travelsSelectedForInsertInTable.lengthTableData}>
                {travelsSelectedForInsertInTable.name}
              </div>
            );
          }
        )}
        <div className="col-xs-5">
          <Button
            style={{ width: "85%", height: "70%", margin: "auto" }}
            variant="danger"
          >
            Deletar
          </Button>
        </div>
      </div>
      <div className="table-data-travels-layer">
        <div className="col-xs-2">
          <input type="checkbox" style={{ width: "15px", height: "15px" }} />
        </div>
        {travelsSelectedForInsertInTable.map(
          (
            travelsSelectedForInsertInTable: ITravelsSelectedForInsertInTable
          ) => {
            return (
              <div className={travelsSelectedForInsertInTable.lengthTableData}>
                {travelsSelectedForInsertInTable.name}
              </div>
            );
          }
        )}
        <div className="col-xs-5">
          <Button
            style={{ width: "85%", height: "70%", margin: "auto" }}
            variant="danger"
          >
            Deletar
          </Button>
        </div>
      </div>
      <div className="table-data-travels-layer">
        <div className="col-xs-2">
          <input type="checkbox" style={{ width: "15px", height: "15px" }} />
        </div>
        {travelsSelectedForInsertInTable.map(
          (
            travelsSelectedForInsertInTable: ITravelsSelectedForInsertInTable
          ) => {
            return (
              <div className={travelsSelectedForInsertInTable.lengthTableData}>
                {travelsSelectedForInsertInTable.name}
              </div>
            );
          }
        )}
        <div className="col-xs-5">
          <Button
            style={{ width: "85%", height: "70%", margin: "auto" }}
            variant="danger"
          >
            Deletar
          </Button>
        </div>
      </div>
      <div className="table-data-travels-layer">
        <div className="col-xs-2">
          <input type="checkbox" style={{ width: "15px", height: "15px" }} />
        </div>
        {travelsSelectedForInsertInTable.map(
          (
            travelsSelectedForInsertInTable: ITravelsSelectedForInsertInTable
          ) => {
            return (
              <div className={travelsSelectedForInsertInTable.lengthTableData}>
                {travelsSelectedForInsertInTable.name}
              </div>
            );
          }
        )}
        <div className="col-xs-5">
          <Button
            style={{ width: "85%", height: "70%", margin: "auto" }}
            variant="danger"
          >
            Deletar
          </Button>
        </div>
      </div>
    </InProgressTravelsTableWrapper>
  );
}

export default InProgressTravels;
