import { Form, InputGroup } from "react-bootstrap";
import { SelectedAllTravelsBoxWrapper } from "./styles";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import InProgressTravels from "./InProgressTravels";

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

  const [buttonSelected, setButtonSelected] = useState<string>(
    myTravelsButtonsData[0].buttonName
  );

  function handleClick(buttonNameAddClass: string) {
    setButtonSelected(buttonNameAddClass);
  }

  return (
    <SelectedAllTravelsBoxWrapper>
      <div className="body-items-travels-referece">
        <div className="my-travles">
          <div className="header-travels-wrapper">
            {myTravelsButtonsData.map(
              (myTravelsButtonsDataCallBack: IMyTravelsButtonsData) => {
                return (
                  <div
                    onClick={() =>
                      handleClick(myTravelsButtonsDataCallBack.buttonName)
                    }
                    className="buttons-data-travels"
                  >
                    <button
                      className={
                        buttonSelected ===
                        myTravelsButtonsDataCallBack.buttonName
                          ? "add-border"
                          : ""
                      }
                    >
                      {myTravelsButtonsDataCallBack.buttonName}
                    </button>
                  </div>
                );
              }
            )}
          </div>
          <InProgressTravels />
        </div>
      </div>

      <div className="user-card-reference"></div>
    </SelectedAllTravelsBoxWrapper>
  );
}

export default SelectedAllTravels;
