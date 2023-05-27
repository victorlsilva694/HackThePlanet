import { Form, InputGroup } from "react-bootstrap";
import { SelectedAllTravelsBoxWrapper } from "./styles";
import { BsSearch } from "react-icons/bs";

function SelectedAllTravels() {
  interface IMyTravels {
    id: number;
    buttonsClass: string;
  }

  return (
    <SelectedAllTravelsBoxWrapper>
      <div className="body-items-travels-referece">
        <div className="my-travles">
          <div className="header-travels-wrapper">

          </div>
        </div>
      </div>

      <div className="user-card-reference"></div>
    </SelectedAllTravelsBoxWrapper>
  );
}

export default SelectedAllTravels;
