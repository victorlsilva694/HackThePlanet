import { Button } from "react-bootstrap";
import { Transaction } from "../../../../../../../Types/Dashboard";
import { BodyTableAllTravels } from "./styles";

function TravelsTableBody({
  tableBodyTravels,
}: {
  tableBodyTravels: Transaction[];
}) {
  return (
    <>
      {tableBodyTravels.map((travel) => (
        <BodyTableAllTravels>
          <div className="col-xs-2">
            <input type="checkbox" style={{ width: "18px", height: "18px" }} />
          </div>
          <div className="col-xs-4">
            {travel.travel_code}
          </div>
          <div className="col-xs-6">
            {travel.transaction_name}
          </div>
          <div className="col-xs-4">
            {travel.created_at}
          </div>
          <div className="col-xs-5">
            <Button style={{ width: '100%', height: '2.5rem', margin: 'auto' }} variant="danger">Excluir</Button>
          </div>
        </BodyTableAllTravels>
      ))}
    </>
  );
}

export default TravelsTableBody;
