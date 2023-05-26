import { UserContext } from "../../../UserContextStore/UserContext";
import { HeaderDashboardContainer } from "./styles";
import React, { useContext, useState } from "react";

function DashboardHeader() {
  const userName = localStorage.getItem("userName");

  interface IStoreDate {
    currentDate: Date;
  }

  const [currentNewDate, setCurrentNewDate] = useState<IStoreDate>({
    currentDate: new Date(),
  });

  const formattedCurrentDate = currentNewDate.currentDate.toLocaleString(
    "pt-BR",
    { timeZone: "UTC" }
  );

  return (
    <HeaderDashboardContainer>
      <div className="content-data-dashboard">
        <div className="layer-title-dashboard">
          <h1>Seja Bem vindo(a) Novamente - {userName} </h1>

          <div className="layer-buttons-header">
            <div className="date-layer">
              <h1>Agenda e tarefas - {formattedCurrentDate} </h1>
            </div>
            <div className="more-info-layer"></div>
          </div>
        </div>
      </div>
    </HeaderDashboardContainer>
  );
}

export default DashboardHeader;