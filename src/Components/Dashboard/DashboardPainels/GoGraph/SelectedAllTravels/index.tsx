import { Form, InputGroup } from "react-bootstrap";
import { SelectedAllTravelsBoxWrapper } from "./styles";
import { BsSearch } from "react-icons/bs";

function SelectedAllTravels() {
  interface IMyTravelsButtonsData {
    id: number;
    buttonName: string;
  }

  const myTravelsButtonsData: IMyTravelsButtonsData[] = [
    {
      id: 1,
      buttonName: "Viagens em andamento",
    },
    {
      id: 2,
      buttonName: "Viagens em Planejamento",
    },
    {
      id: 3,
      buttonName: "Viagens Profissionais",
    },
  ];

  return (
    <SelectedAllTravelsBoxWrapper>
      <div className="body-items-travels-referece">
        <div className="my-travles">
          <div className="header-travels-wrapper">
            {myTravelsButtonsData.map(
              (myTravelsButtonsDataCallBack: IMyTravelsButtonsData) => {
                return (
                  <div className="buttons-data-travels">
                    <button>{myTravelsButtonsDataCallBack.buttonName}</button>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>

      <div className="user-card-reference"></div>
    </SelectedAllTravelsBoxWrapper>
  );
}

export default SelectedAllTravels;
