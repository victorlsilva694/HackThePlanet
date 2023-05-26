import { HeaderDashboardContainer } from "../../DashboardHeader/styles";
import SelectedAllTravels from "./SelectedAllTravels";
import { GoGraphBoxRootWrapper } from "./styles";
import React, { useContext, useState } from "react";

function GoGraph() {
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
    <GoGraphBoxRootWrapper>
      <HeaderDashboardContainer>    
        <div className="content-data-dashboard">
          <div className="layer-title-dashboard">
            <div className="sub-header">
              <h1>Painel de análise interna do usuário - Viagens e destinos</h1>
            </div>
            <div className="layer-buttons-header">
              <div className="date-layer">
                <h1>Agenda e tarefas - {formattedCurrentDate} </h1>
              </div>
            </div>
          </div>
        </div>
      </HeaderDashboardContainer>


      <SelectedAllTravels />
    </GoGraphBoxRootWrapper>
  );
}

export default GoGraph;
